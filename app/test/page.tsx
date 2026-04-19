'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import QuestionCard from '@/components/ui/QuestionCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { questions } from '@/lib/questions';
import { calculateResult, getDimensionResults } from '@/lib/calculations';
import { saveTestRecord } from '@/lib/storage';

export default function TestPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const questionRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoBack = currentQuestion > 0;

  useEffect(() => {
    if (!prefersReducedMotion && questionRef.current) {
      questionRef.current.focus();
    }
    const firstOption = document.querySelector('[data-option-index="0"]') as HTMLButtonElement | null;
    firstOption?.focus();
  }, [currentQuestion, prefersReducedMotion]);

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, prefersReducedMotion ? 0 : 150);
    }
  };

  const handleAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
    setIsTransitioning(true);
    setDirection(1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const result = calculateResult(newAnswers, questions);
        const dimensionScores = getDimensionResults(newAnswers, questions);
        localStorage.setItem('mbti_last_result', JSON.stringify({
          type: result,
          answers: newAnswers,
          dimensionScores,
          completedAt: new Date().toISOString()
        }));
        saveTestRecord({
          id: Date.now().toString(),
          categoryId: 'mbti',
          type: result,
          answers: newAnswers,
          dimensionScores,
          completedAt: new Date().toISOString(),
          timeSpent: 0
        });
        router.push(`/result/${result}`);
      }
      setIsTransitioning(false);
    }, prefersReducedMotion ? 0 : 300);
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-500">
              第 {currentQuestion + 1} / {questions.length} 题
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% 完成
            </span>
          </div>
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            ref={questionRef}
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 * direction }}
            animate={{ opacity: isTransitioning ? 0 : 1, x: 0 }}
            exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 * direction }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            tabIndex={-1}
          >
            <QuestionCard
              question={question}
              selectedAnswer={answers[question.id]}
              onAnswer={handleAnswer}
              questionRef={questionRef}
            />
          </motion.div>
        </AnimatePresence>

        <div className="fixed bottom-8 left-8">
          <button
            onClick={handlePrevQuestion}
            disabled={!canGoBack || isTransitioning}
            className={`px-6 py-2 text-sm rounded-lg border transition-all ${
              canGoBack && !isTransitioning
                ? 'border-primary text-primary hover:bg-primary/5'
                : 'border-slate-200 text-slate-300 cursor-not-allowed'
            }`}
          >
            ← 上一题
          </button>
        </div>
      </div>
    </div>
  );
}

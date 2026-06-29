'use client';

import { useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import QuestionCard from '@/components/ui/QuestionCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { questions } from '@/lib/questions';
import { useTestFlow } from '@/hooks/useTestFlow';

export default function TestPage() {
  const {
    currentQuestion,
    answers,
    isTransitioning,
    direction,
    question,
    progress,
    canGoBack,
    handleAnswer,
    handlePrevQuestion
  } = useTestFlow(questions);

  const questionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

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

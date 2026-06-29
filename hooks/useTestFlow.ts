'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '@/lib/types';
import { calculateResult, getDimensionResults } from '@/lib/calculations';
import { saveTestRecord } from '@/lib/storage';

interface UseTestFlowReturn {
  currentQuestion: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  isTransitioning: boolean;
  direction: number;
  question: Question;
  progress: number;
  canGoBack: boolean;
  handleAnswer: (answer: 'A' | 'B' | 'C' | 'D') => void;
  handlePrevQuestion: () => void;
}

export function useTestFlow(questions: Question[]): UseTestFlowReturn {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const startTimeRef = useRef(Date.now());

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoBack = currentQuestion > 0;

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    // Prevent duplicate submissions
    if (answers[question.id] !== undefined || isTransitioning) return;

    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
    setIsTransitioning(true);
    setDirection(1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        const result = calculateResult(newAnswers, questions);
        const dimensionScores = getDimensionResults(newAnswers, questions);
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

        localStorage.setItem('mbti_last_result', JSON.stringify({
          type: result,
          answers: newAnswers,
          dimensionScores,
          completedAt: new Date().toISOString()
        }));
        saveTestRecord({
          id: crypto.randomUUID(),
          categoryId: 'mbti',
          type: result,
          answers: newAnswers,
          dimensionScores,
          completedAt: new Date().toISOString(),
          timeSpent
        });
        router.push(`/result/${result}`);
      }
    }, 300);
  };

  return {
    currentQuestion,
    answers,
    isTransitioning,
    direction,
    question,
    progress,
    canGoBack,
    handleAnswer,
    handlePrevQuestion
  };
}
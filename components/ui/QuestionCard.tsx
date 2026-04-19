'use client';

import { useRef, useCallback, useEffect } from 'react';
import { Question } from '@/lib/types';
import OptionButton from './OptionButton';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D';
  onAnswer: (answer: 'A' | 'B' | 'C' | 'D') => void;
  questionRef?: React.RefObject<HTMLDivElement | null>;
}

export default function QuestionCard({ question, selectedAnswer, onAnswer, questionRef }: QuestionCardProps) {
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const options = question.options;
    const focusedIndex = optionRefs.current.findIndex(el => el === document.activeElement);
    let nextIndex = focusedIndex >= 0 ? focusedIndex : 0;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        nextIndex = (nextIndex + 1) % options.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        nextIndex = (nextIndex - 1 + options.length) % options.length;
        break;
      case '1':
      case '2':
      case '3':
      case '4':
        e.preventDefault();
        const numIndex = parseInt(e.key) - 1;
        if (numIndex < options.length) {
          onAnswer(options[numIndex].value);
        }
        return;
      case 'Enter':
      case ' ':
        if (focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
          e.preventDefault();
          onAnswer(options[focusedIndex].value);
        }
        return;
      default:
        return;
    }

    optionRefs.current[nextIndex]?.focus();
  }, [question.options, onAnswer]);

  useEffect(() => {
    optionRefs.current = optionRefs.current.slice(0, question.options.length);
  }, [question.options]);

  useEffect(() => {
    const container = containerRef.current;
    container?.focus();
    optionRefs.current[0]?.focus();
  }, [question.id]);

  return (
    <div
      ref={(el) => { containerRef.current = el; questionRef && ('current' in questionRef ? questionRef.current = el : null); }}
      className="bg-white rounded-2xl shadow-xl p-8"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          第 {question.id} 题
        </span>
      </div>
      <h2 className="text-xl font-semibold text-slate-800 mb-8" tabIndex={-1}>
        {question.text}
      </h2>
      <div
        className="grid grid-cols-1 gap-4"
        role="listbox"
        aria-label="请选择最符合你的选项"
      >
        {question.options.map((option, index) => (
          <OptionButton
            key={option.value}
            ref={(el) => { optionRefs.current[index] = el; }}
            label={option.label}
            value={option.value}
            isSelected={selectedAnswer === option.value}
            onClick={onAnswer}
            tabIndex={-1}
            dataOptionIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

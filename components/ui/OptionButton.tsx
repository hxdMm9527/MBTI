'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface OptionButtonProps {
  label: string;
  value: 'A' | 'B' | 'C' | 'D';
  isSelected: boolean;
  onClick: (value: 'A' | 'B' | 'C' | 'D') => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  tabIndex?: number;
  dataOptionIndex?: number;
}

const OptionButton = forwardRef<HTMLButtonElement, OptionButtonProps>(
  ({ label, value, isSelected, onClick, onKeyDown, tabIndex = 0, dataOptionIndex }: OptionButtonProps, ref) => {
    return (
      <motion.button
        ref={ref}
        tabIndex={tabIndex}
        data-option-index={dataOptionIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(value)}
        onKeyDown={onKeyDown}
        className={`
          w-full p-4 text-left rounded-xl border-2 transition-all duration-200
          ${isSelected
            ? 'border-primary bg-primary/10 shadow-md'
            : 'border-slate-200 bg-white hover:border-primary/50 hover:shadow-md'
          }
        `}
        role="option"
        aria-selected={isSelected}
        aria-label={`选项${value}: ${label}`}
      >
        <span className={`
          inline-block w-8 h-8 rounded-full text-center leading-8 mr-3 text-sm font-medium
          ${isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}
        `}>
          {value}
        </span>
        {label}
      </motion.button>
    );
  }
);

OptionButton.displayName = 'OptionButton';

export default OptionButton;

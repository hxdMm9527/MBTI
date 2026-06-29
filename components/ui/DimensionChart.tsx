'use client';

import { motion } from 'framer-motion';
import { DimensionScore } from '@/lib/types';
import { getDimensionLabels } from '@/lib/questions';

interface DimensionChartProps {
  scores: DimensionScore[];
}

export default function DimensionChart({ scores }: DimensionChartProps) {
  const dimensionLabels = getDimensionLabels();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-8"
    >
      <h2 className="text-lg font-semibold text-slate-800 mb-6">性格维度解析</h2>
      <div className="space-y-6">
        {scores.map((score, index) => {
          const labels = dimensionLabels[score.dimension];
          const isFirst = score.leaning === score.dimension.split('/')[0];
          const percentage = isFirst ? score.percentage : 100 - score.percentage;

          return (
            <motion.div
              key={score.dimension}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">
                  {labels.first.label} ←→ {labels.second.label}
                </span>
                <span className="text-sm font-bold text-primary">
                  {score.leaning} {score.percentage}%
                </span>
              </div>
              <div className="relative h-3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-lg border-2 border-primary"
                  initial={{ left: '0%' }}
                  animate={{ left: `${percentage}%` }}
                  transition={{ delay: 1.8 + index * 0.1, type: 'spring', stiffness: 100 }}
                  style={{ marginLeft: '-10px' }}
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">
                {isFirst ? labels.first.desc : labels.second.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

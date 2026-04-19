'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
            <span className="text-white text-4xl font-bold">M</span>
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          MBTI 性格测试
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          基于迈尔斯-布里格斯类型指标，助你发现真实的自己
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">16</div>
              <div className="text-sm text-slate-500">人格类型</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">16</div>
              <div className="text-sm text-slate-500">测试题目</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">5</div>
              <div className="text-sm text-slate-500">分钟完成</div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 items-center">
          <Button onClick={() => router.push('/test')}>
            开始测试
          </Button>
          <Button variant="secondary" onClick={() => router.push('/history')}>
            查看历史记录
          </Button>
          <p className="text-sm text-slate-500">
            测试共16道选择题，预计用时5分钟
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center text-slate-500 text-sm"
      >
        <p>内向 (I) · 感知 (S) · 思考 (T) · 判断 (J)</p>
        <p className="mt-1">外向 (E) · 直觉 (N) · 情感 (F) · 知觉 (P)</p>
      </motion.div>
    </div>
  );
}

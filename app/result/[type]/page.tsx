'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { personalityData } from '@/lib/personalityData';
import { PersonalityType, VALID_PERSONALITY_TYPES, DimensionScore } from '@/lib/types';
import DimensionChart from '@/components/ui/DimensionChart';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensionScores, setDimensionScores] = useState<DimensionScore[]>([]);

  const type = params.type as PersonalityType;

  if (!VALID_PERSONALITY_TYPES.includes(type) || !personalityData[type]) {
    notFound();
  }

  const data = personalityData[type];

  useEffect(() => {
    const stored = localStorage.getItem('mbti_last_result');
    if (stored) {
      const data = JSON.parse(stored);
      if (data.dimensionScores) {
        setDimensionScores(data.dimensionScores);
      }
    }
    setTimeout(() => setIsLoaded(true), 1500);
  }, []);

  const handleShare = async () => {
    const text = `我的MBTI性格类型是 ${type} - ${data.name}！${data.description}`;
    if (navigator.share) {
      await navigator.share({ title: 'MBTI测试结果', text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('结果已复制到剪贴板！');
    }
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/40 mb-6">
              <span className="text-white text-5xl font-bold tracking-wider">
                {type}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-slate-800 mb-2"
          >
            {data.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-600"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-lg font-semibold text-slate-800 mb-4">性格优势</h2>
          <div className="flex flex-wrap gap-2">
            {data.strengths.map((strength, index) => (
              <motion.span
                key={strength}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
              >
                {strength}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-lg font-semibold text-slate-800 mb-4">适合的职业</h2>
          <div className="flex flex-wrap gap-2">
            {data.careers.map((career, index) => (
              <motion.span
                key={career}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm"
              >
                {career}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 1.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-lg font-semibold text-slate-800 mb-4">人际关系</h2>
          <p className="text-slate-600">{data.relationships}</p>
        </motion.div>

        {dimensionScores.length > 0 && (
          <DimensionChart scores={dimensionScores} />
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" onClick={handleShare}>
            分享结果
          </Button>
          <Button variant="secondary" onClick={() => router.push('/test')}>
            重新测试
          </Button>
          <Button variant="secondary" onClick={() => router.push('/')}>
            返回首页
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

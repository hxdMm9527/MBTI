'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { getTestRecords, deleteTestRecord } from '@/lib/storage';
import { TestRecord } from '@/lib/types';
import { personalityData } from '@/lib/personalityData';

export default function HistoryPage() {
  const router = useRouter();
  const [records, setRecords] = useState<TestRecord[]>([]);

  useEffect(() => {
    setRecords(getTestRecords());
  }, []);

  const handleDelete = (id: string) => {
    deleteTestRecord(id);
    setRecords(getTestRecords());
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-800">测试历史</h1>
          <Button variant="secondary" onClick={() => router.push('/')}>
            返回首页
          </Button>
        </div>

        {records.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-slate-500 mb-4">暂无测试记录</p>
            <Button onClick={() => router.push('/test')}>开始测试</Button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {records.map((record, index) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => router.push(`/result/${record.type}`)}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{record.type}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {personalityData[record.type as keyof typeof personalityData]?.name || record.type}
                      </h3>
                      <p className="text-sm text-slate-500">{formatDate(record.completedAt)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(record.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {record.dimensionScores.map((score) => (
                    <span key={score.dimension} className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                      {score.dimension}: {score.倾向}{score.percentage}%
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
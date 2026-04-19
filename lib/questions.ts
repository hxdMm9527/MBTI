import { Question, QuestionCategory, DimensionDefinition } from './types';

export const mbtiCategory: QuestionCategory = {
  id: 'mbti',
  name: 'MBTI性格测试',
  description: '基于迈尔斯-布里格斯类型指标，助你发现真实的自己',
  version: '1.0',
  dimensions: [
    { pair: 'E/I', name: '能量倾向', description: '外向 E ←→ 内向 I' },
    { pair: 'S/N', name: '感知方式', description: '感觉 S ←→ 直觉 N' },
    { pair: 'T/F', name: '判断方式', description: '思考 T ←→ 情感 F' },
    { pair: 'J/P', name: '生活态度', description: '判断 J ←→ 知觉 P' }
  ],
  questionCount: 16
};

export const dimensionDefinitions: Record<string, DimensionDefinition[]> = {
  mbti: [
    { pair: 'E/I', name: '能量倾向', description: '外向 E ←→ 内向 I' },
    { pair: 'S/N', name: '感知方式', description: '感觉 S ←→ 直觉 N' },
    { pair: 'T/F', name: '判断方式', description: '思考 T ←→ 情感 F' },
    { pair: 'J/P', name: '生活态度', description: '判断 J ←→ 知觉 P' }
  ]
};

export const questions: Question[] = [
  {
    id: 1,
    categoryId: 'mbti',
    dimension: 'E/I',
    dimensionAspect: 'first',
    text: '在社交场合中，你通常会：',
    options: [
      {
        label: '主动与陌生人交谈，享受热闹氛围',
        value: 'A',
        weight: { E: 1, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '等待他人主动接近，内心感到疲惫',
        value: 'B',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '在熟悉的人群中活跃，陌生人面前沉默',
        value: 'C',
        weight: { E: 0.5, I: 0.5, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '倾向于独自充电，社交让我感到耗电',
        value: 'D',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 2,
    categoryId: 'mbti',
    dimension: 'E/I',
    dimensionAspect: 'first',
    text: '下班后的周末，你更倾向于：',
    options: [
      {
        label: '约朋友一起聚餐或参加活动',
        value: 'A',
        weight: { E: 1, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '在家安静地看书、看电影或独处',
        value: 'B',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '先独处一会儿，再考虑是否出门',
        value: 'C',
        weight: { E: 0.5, I: 0.5, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '需要看心情，状态好就出门，不好就宅着',
        value: 'D',
        weight: { E: 0.3, I: 0.7, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 3,
    categoryId: 'mbti',
    dimension: 'E/I',
    dimensionAspect: 'first',
    text: '在团队会议中，你通常会：',
    options: [
      {
        label: '积极发言，主动分享自己的想法',
        value: 'A',
        weight: { E: 1, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '先倾听，整理好自己的思路后再发言',
        value: 'B',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '如果有好主意就会发言，否则保持沉默',
        value: 'C',
        weight: { E: 0.5, I: 0.5, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '更习惯用文字方式表达观点',
        value: 'D',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 4,
    categoryId: 'mbti',
    dimension: 'E/I',
    dimensionAspect: 'second',
    text: '当你独自一人时，你会：',
    options: [
      {
        label: '感到有点无聊，渴望找人聊天',
        value: 'A',
        weight: { E: 1, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '享受独处时光，这是我恢复精力的方式',
        value: 'B',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '整理房间或做些琐事，享受忙碌中的宁静',
        value: 'C',
        weight: { E: 0.3, I: 0.7, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '沉静在思考中，思考人生和未来',
        value: 'D',
        weight: { E: 0, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 5,
    categoryId: 'mbti',
    dimension: 'S/N',
    dimensionAspect: 'first',
    text: '在阅读一本新书时，你更关注：',
    options: [
      {
        label: '具体的情节、人物和事件',
        value: 'A',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '书中的深层含义和象征意义',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '事实和数据，觉得这些更有说服力',
        value: 'C',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '书能给我带来什么启发和思考',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 6,
    categoryId: 'mbti',
    dimension: 'S/N',
    dimensionAspect: 'first',
    text: '当别人向你描述一个梦想时，你通常会：',
    options: [
      {
        label: '想知道这个梦想的具体实施步骤',
        value: 'A',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '欣赏这个愿景的美好和可能性',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '觉得不切实际，建议务实一些',
        value: 'C',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '被这个想法激发，开始畅想更多可能',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 7,
    categoryId: 'mbti',
    dimension: 'S/N',
    dimensionAspect: 'second',
    text: '在学习新技能时，你更喜欢：',
    options: [
      {
        label: '按照教材或教程一步步实践',
        value: 'A',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '先理解原理，再自由探索创新',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '看到实际效果，边做边学',
        value: 'C',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '尝试各种方法，找到最适合自己的',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 8,
    categoryId: 'mbti',
    dimension: 'S/N',
    dimensionAspect: 'second',
    text: '你更容易被什么类型的电影吸引：',
    options: [
      {
        label: '基于真实故事改编的剧情片',
        value: 'A',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '充满想象力的科幻或奇幻片',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '有精彩打斗或视觉效果的动作片',
        value: 'C',
        weight: { E: 0, I: 0, S: 1, N: 0, T: 0, F: 0, J: 0, P: 0 }
      },
      {
        label: '引人深思的文艺片或哲学电影',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 9,
    categoryId: 'mbti',
    dimension: 'T/F',
    dimensionAspect: 'first',
    text: '在做重大决定时，你更依赖：',
    options: [
      {
        label: '逻辑分析和利弊权衡',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '内心感受和价值观念',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      },
      {
        label: '事实和数据，情感不是主要考量',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '对关系和人的影响，觉得人情更重要',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 10,
    categoryId: 'mbti',
    dimension: 'T/F',
    dimensionAspect: 'first',
    text: '当你的朋友向你倾诉烦恼时，你通常会：',
    options: [
      {
        label: '给出实际的解决方案和建议',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '先表达理解和共情，再给建议',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      },
      {
        label: '分析问题原因，帮助他理性看待',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '陪伴和安慰，让他感受到被理解',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 11,
    categoryId: 'mbti',
    dimension: 'T/F',
    dimensionAspect: 'second',
    text: '你认为什么是最重要的：',
    options: [
      {
        label: '效率和成果，做事要有效率',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '和谐的人际关系，大家开心就好',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      },
      {
        label: '公平公正，对所有人都一视同仁',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '真诚和善良，待人处事有温度',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 12,
    categoryId: 'mbti',
    dimension: 'T/F',
    dimensionAspect: 'second',
    text: '在争论中，你更倾向于：',
    options: [
      {
        label: '用事实和逻辑说服对方',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '试图理解对方的感受和立场',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      },
      {
        label: '坚持自己认为对的，不轻易妥协',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 0, J: 0, P: 0 }
      },
      {
        label: '为了关系和谐，愿意做出让步',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 13,
    categoryId: 'mbti',
    dimension: 'J/P',
    dimensionAspect: 'first',
    text: '你更习惯于：',
    options: [
      {
        label: '提前计划安排，按部就班完成任务',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 0 }
      },
      {
        label: '灵活应变，随情况变化而调整',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      },
      {
        label: '有大框架但细节可以随机应变',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0.5, P: 0.5 }
      },
      {
        label: '到最后一刻再做决定，这样更有灵感',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      }
    ]
  },
  {
    id: 14,
    categoryId: 'mbti',
    dimension: 'J/P',
    dimensionAspect: 'first',
    text: '当你到达一个陌生城市，你会：',
    options: [
      {
        label: '提前做详细的攻略和行程安排',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 0 }
      },
      {
        label: '到了当地再说，享受发现的乐趣',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      },
      {
        label: '订好酒店和必去景点，其他随缘',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0.5, P: 0.5 }
      },
      {
        label: '喜欢迷路的过程，觉得这样更有趣',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      }
    ]
  },
  {
    id: 15,
    categoryId: 'mbti',
    dimension: 'J/P',
    dimensionAspect: 'second',
    text: '你的工作风格更接近：',
    options: [
      {
        label: '设定明确目标，分阶段完成',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 0 }
      },
      {
        label: '边做边想，保持弹性和开放性',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      },
      {
        label: '有计划但也愿意接受意外的变化',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0.5, P: 0.5 }
      },
      {
        label: '不喜欢被截止日期束缚，更爱自由创作',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      }
    ]
  },
  {
    id: 16,
    categoryId: 'mbti',
    dimension: 'J/P',
    dimensionAspect: 'second',
    text: '你更喜欢什么样的生活方式：',
    options: [
      {
        label: '有规律、有计划的生活作息',
        value: 'A',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 0 }
      },
      {
        label: '充满新鲜感和惊喜的多变生活',
        value: 'B',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      },
      {
        label: '工作日有规律，周末可以放松随意',
        value: 'C',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0.5, P: 0.5 }
      },
      {
        label: '讨厌固定模式，喜欢随心所欲',
        value: 'D',
        weight: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 1 }
      }
    ]
  }
];

export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions.filter(q => q.categoryId === categoryId);
}

export function getCategories(): QuestionCategory[] {
  return [mbtiCategory];
}

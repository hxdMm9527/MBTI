import { PersonalityType } from './types';

interface PersonalityInfo {
  name: string;
  description: string;
  strengths: string[];
  careers: string[];
  relationships: string;
}

export const personalityData: Record<PersonalityType, PersonalityInfo> = {
  INTJ: {
    name: '建筑师',
    description: '富有想象力和战略性的思想家，一切都在他们的计划之中。',
    strengths: ['独立思考', '战略眼光', '理性分析', '高标准'],
    careers: ['科学家', '工程师', '战略规划师', '企业顾问'],
    relationships: '善于深度交流，欣赏智慧型伴侣，但在情感表达上需要学习。'
  },
  INTP: {
    name: '逻辑学家',
    description: '创新的发明家，对知识充满渴望，渴望用逻辑理解一切。',
    strengths: ['创造性思维', '分析能力', '求知欲', '客观理性'],
    careers: ['哲学家', '研究员', '软件工程师', '数学家'],
    relationships: '重视智力匹配，需要理解和支持，不擅长表达情感。'
  },
  ENTJ: {
    name: '指挥官',
    description: '大胆、富有想象力的领导者，总能找到方向并带领他人前进。',
    strengths: ['领导能力', '决策力', '自信', '战略思维'],
    careers: ['CEO', '企业家', '律师', '管理顾问'],
    relationships: '直接坦率，喜欢能跟上节奏的伴侣，渴望成功的伙伴关系。'
  },
  ENTP: {
    name: '辩论家',
    description: '聪明好奇的思想者，热衷于挑战现状，善于发现可能性。',
    strengths: ['创新思维', '社交能力', '应变能力', '口才'],
    careers: ['企业家', '律师', '记者', '营销策划'],
    relationships: '喜欢有趣的对话，欣赏独特个性，需要保持新鲜感。'
  },
  INFJ: {
    name: '提倡者',
    description: '安静而神秘，鼓舞人心且不知疲倦地追求理想。',
    strengths: ['同理心', '洞察力', '创造力', '理想主义'],
    careers: ['心理咨询师', '作家', '教师', '社会工作者'],
    relationships: '深度连接者，渴望有意义的关系，敏感但坚定。'
  },
  INFP: {
    name: '调停者',
    description: '诗意、善良的理想主义者，渴望创造美好和有意义的生活。',
    strengths: ['同理心', '创造力', '适应性', '价值观导向'],
    careers: ['作家', '艺术家', '心理咨询师', '人力资源'],
    relationships: '浪漫主义者，渴望灵魂伴侣，需要被理解和欣赏。'
  },
  ENFJ: {
    name: '主人公',
    description: '魅力四射的领导者，能启发他人，渴望成为改变的推动者。',
    strengths: ['共情能力', '领导力', '沟通能力', '热情'],
    careers: ['教师', '政治家', '顾问', '公关专家'],
    relationships: '温暖的陪伴者，渴望帮助他人成长，重视深度连接。'
  },
  ENFP: {
    name: '竞选者',
    description: '热情洋溢、富有创意的社交者，总能找到理由庆祝生活。',
    strengths: ['热情', '创造力', '社交能力', '乐观积极'],
    careers: ['记者', '设计师', '演员', '营销人员'],
    relationships: '充满热情，喜欢探索可能性，需要情感上的自由。'
  },
  ISTJ: {
    name: '物流师',
    description: '值得信赖的执行者，注重事实，追求有序和高效。',
    strengths: ['可靠性', '责任感', '实用性', '专注'],
    careers: ['会计师', '律师', '医生', '管理者'],
    relationships: '忠诚可靠，重视承诺，偏好稳定和可预测的关系。'
  },
  ISFJ: {
    name: '守卫者',
    description: '温暖体贴的守护者，专注他人的需求，是可靠的支持者。',
    strengths: ['责任感', '善良', '忠诚', '注重细节'],
    careers: ['护士', '教师', '行政人员', '社会工作者'],
    relationships: '无私的照顾者，默默付出，渴望被感激和认可。'
  },
  ESTJ: {
    name: '总经理',
    description: '出色的管理者，诚信务实，善于组织，确保事情有序进行。',
    strengths: ['执行力', '责任感', '正直', '管理能力'],
    careers: ['企业高管', '军官', '法官', '项目经理'],
    relationships: '直接坦诚，重视传统和责任，喜欢有目标的伴侣。'
  },
  ESFJ: {
    name: '执行者',
    description: '热心肠的给予者，渴望让身边人开心，是天生的社交者。',
    strengths: ['善解人意', '受欢迎', '有条理', '乐于助人'],
    careers: ['护士', '教师', '销售', '人力资源'],
    relationships: '热情洋溢的陪伴者，喜欢照顾他人，需要被喜爱。'
  },
  ISTP: {
    name: '鉴赏家',
    description: '大胆而实用的实验家，掌握工具并理解因果关系。',
    strengths: ['动手能力', '理性', '适应性', '观察力'],
    careers: ['工程师', '机械师', '飞行员', '建筑师'],
    relationships: '需要空间和自由，欣赏独立，不善言辞但行动表达。'
  },
  ISFP: {
    name: '探险家',
    description: '灵活有魅力的艺术家，随时准备探索新事物和感受。',
    strengths: ['艺术感', '适应力', '观察力', '好奇心'],
    careers: ['艺术家', '设计师', '摄影师', '厨师'],
    relationships: '活在当下，珍惜自由，需要能尊重他们空间的伴侣。'
  },
  ESTP: {
    name: '企业家',
    description: '聪明的冒险者，善于发现机会，享受即时反馈。',
    strengths: ['行动力', '社交能力', '务实', '适应力'],
    careers: ['企业家', '销售', '经纪人', '运动员'],
    relationships: '充满活力，喜欢刺激，需要能跟上节奏的伴侣。'
  },
  ESFP: {
    name: '表演者',
    description: '自发的才华洋溢的表演者，让每次体验都充满乐趣。',
    strengths: ['魅力', '热情', '创造力', '社交能力'],
    careers: ['演员', '歌手', '主持人', '设计师'],
    relationships: '生活的派对！需要观众和掌声，讨厌无聊和孤独。'
  }
};

export type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type DimensionPair = 'E/I' | 'S/N' | 'T/F' | 'J/P';

export const VALID_PERSONALITY_TYPES = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
] as const;

export type PersonalityType = typeof VALID_PERSONALITY_TYPES[number];

export interface DimensionDefinition {
  pair: DimensionPair;
  name: string;
  description: string;
}

export interface QuestionCategory {
  id: string;
  name: string;
  description: string;
  version: string;
  dimensions: DimensionDefinition[];
  questionCount: number;
}

export interface Option {
  label: string;
  value: 'A' | 'B' | 'C' | 'D';
  weight: Partial<Record<Dimension, number>>;
}

export interface Question {
  id: number;
  categoryId: string;
  dimension: DimensionPair;
  text: string;
  options: Option[];
}

export interface DimensionScore {
  dimension: DimensionPair;
  leaning: Dimension;
  percentage: number;
  score: number;
}

export interface TestRecord {
  id: string;
  categoryId: string;
  type: PersonalityType;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  dimensionScores: DimensionScore[];
  completedAt: string;
  timeSpent: number;
}

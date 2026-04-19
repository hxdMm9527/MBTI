import { Dimension, DimensionPair, PersonalityType, DimensionScore } from './types';

export function calculateResult(
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>,
  questions: Array<{ id: number; dimension: DimensionPair; options: Array<{ value: 'A' | 'B' | 'C' | 'D'; weight: Record<Dimension, number> }> }>
): PersonalityType {
  const scores: Record<Dimension, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find(q => q.id === Number(questionId));
    if (!question) return;

    const selectedOption = question.options.find(opt => opt.value === answer);
    if (!selectedOption) return;

    Object.entries(selectedOption.weight).forEach(([dim, weight]) => {
      scores[dim as Dimension] += weight as number;
    });
  });

  const type =
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return type as PersonalityType;
}

export function getDimensionResults(
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>,
  questions: Array<{ id: number; dimension: DimensionPair; options: Array<{ value: 'A' | 'B' | 'C' | 'D'; weight: Record<Dimension, number> }> }>
): DimensionScore[] {
  const scores: Record<Dimension, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find(q => q.id === Number(questionId));
    if (!question) return;

    const selectedOption = question.options.find(opt => opt.value === answer);
    if (!selectedOption) return;

    Object.entries(selectedOption.weight).forEach(([dim, weight]) => {
      scores[dim as Dimension] += weight as number;
    });
  });

  const dimensions: DimensionPair[] = ['E/I', 'S/N', 'T/F', 'J/P'];
  const dimensionMapping: Record<DimensionPair, [Dimension, Dimension]> = {
    'E/I': ['E', 'I'],
    'S/N': ['S', 'N'],
    'T/F': ['T', 'F'],
    'J/P': ['J', 'P']
  };

  return dimensions.map(dim => {
    const [first, second] = dimensionMapping[dim];
    const firstScore = scores[first];
    const secondScore = scores[second];
    const total = firstScore + secondScore;
    const percentage = total > 0 ? (firstScore / total) * 100 : 50;

    return {
      dimension: dim,
      score: firstScore - secondScore,
      倾向: firstScore >= secondScore ? first : second,
      percentage: Math.round(percentage)
    };
  });
}

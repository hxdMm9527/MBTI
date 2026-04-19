import { TestRecord, PersonalityType } from './types';

const STORAGE_KEY = 'mbti_test_records';

export function getTestRecords(): TestRecord[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveTestRecord(record: TestRecord): void {
  if (typeof window === 'undefined') return;
  const records = getTestRecords();
  records.unshift(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function deleteTestRecord(id: string): void {
  if (typeof window === 'undefined') return;
  const records = getTestRecords().filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function clearAllRecords(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
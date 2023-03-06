import { expect, test } from 'bun:test';
import { solution } from './solution';

test('solution', () => {
  expect(solution(1, 1)).toBe(2);
});

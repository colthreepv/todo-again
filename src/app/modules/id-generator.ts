import { base62 } from './base62';
import { Alea } from './alea';

const MIN_VALUE = Math.pow(62, 7);
const MAX_VALUE = Math.pow(62, 8);

export function idGenerator(): string {
  const numericVal = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE);
  const test = new Alea(numericVal);
  return base62(test.next());
}

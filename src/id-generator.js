const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MIN_VALUE = Math.pow(62, 7);
const MAX_VALUE = Math.pow(62, 8);

function base62 (integer) {
  if (integer === 0) return '0';
  let s = '';
  let decrementing = integer;
  while (decrementing > 0) {
    s = ALPHABET[decrementing % 62] + s;
    decrementing = Math.floor(decrementing/62);
  }
  return s;
}

export function idGenerator () {
  const numericVal = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE);
  return base62(numericVal);
}

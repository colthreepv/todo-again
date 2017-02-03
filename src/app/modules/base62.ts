const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function base62 (integer: number): string {
  let decrementing;
  if (integer > 0 && integer < 1) {
    const commaLength = integer.toString().substr(2).length;
    decrementing = integer * Math.pow(10, commaLength);
  } else {
    decrementing = integer;
  }
  if (integer === 0) return '0';
  let s = '';
  while (decrementing > 0) {
    s = ALPHABET[decrementing % 62] + s;
    decrementing = Math.floor(decrementing/62);
  }
  return s;
}

export function decode62 (base62String: string): number {
  const base62Chars = base62String.split('').reverse();
  return base62Chars
    .map((character, index) => ALPHABET.indexOf(character) * Math.pow(62, index))
    .reduce((prev, current) => prev + current, 0);
}

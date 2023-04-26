import { sum } from './utils';

export function exo1_part1(str: string) {
  const matches = str.match(/\d+/g);
  return matches.map(Number).reduce(sum);
}

export function exo1_part2(str: string) {
  const points = str.match(/-?\d/g).map(Number);
  const sortedPoints = points.sort((a, b) => a - b);
  return sortedPoints.at(-1) - sortedPoints.at(0);
}

export function exo1_part3(str: string) {
  const pattern = /^[A-Za-z_]*$/g;
  return pattern.test(str);
}

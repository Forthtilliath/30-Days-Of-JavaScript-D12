export function cleanText(str: string) {
  return str.replace(/[^A-Za-z ]+/g, '');
}

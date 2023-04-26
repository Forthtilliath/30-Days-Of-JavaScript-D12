export function mostFrequentWords(paragraph: string) {
  const matches = paragraph.match(/[A-Za-z]+/g);
  const arrCount = Object.entries(
    matches.reduce((acc, word) => {
      return {
        ...acc,
        [word]: (acc[word] ?? 0) + 1,
      };
    }, {} as Record<string, number>)
  );
  const arrObj = arrCount.map(([word, count]) => ({ word, count }));
  const sorted = arrObj.sort((a, b) => {
    const diff = b.count - a.count;
    if (diff !== 0) {
      return diff;
    }
    return a.word < b.word ? 1 : -1;
  });

  return sorted;
}

export function setupMostFrequentWords(size: number) {
  return function (paragraph: string) {
    return mostFrequentWords(paragraph).slice(0, size);
  };
}

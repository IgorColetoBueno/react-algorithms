export const fisherYatesShuffle = <T>(sortedList: T[]): T[] => {
  // Create a copy of the sorted list to avoid modifying the original array
  const shuffledList = [...sortedList];

  // Start from the end of the array and swap each element with a randomly selected one before it
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  return shuffledList;
};

export const fisherYatesShuffleFromNumberOfItems = (numberOfItems: number) => {
  const array = new Array(numberOfItems).fill(0).map((_, index) => index);
  return fisherYatesShuffle(array);
};

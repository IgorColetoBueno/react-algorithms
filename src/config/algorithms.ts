export type SortAlgorithmType =
  | "Bubble Sort"
  | "Selection Sort"
  | "Insertion Sort"
  | "Merge Sort"
  | "Quick Sort";

export const SORT_ALGORITHMS: SortAlgorithmType[] = [
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
];

const SORT_ALGORITHMS_DESCRIPTIONS = [
  "Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm continues until the entire list is sorted.",
  "Selection Sort is an in-place comparison-based sorting algorithm. It divides the input list into two parts: the sorted and the unsorted part. It repeatedly selects the minimum (or maximum) element from the unsorted part and places it at the end of the sorted part.",
  "Insertion Sort is an in-place comparison-based sorting algorithm with two parts. It builds the sorted array one element at a time by repeatedly picking an element from the unsorted part and inserting it into its correct position in the sorted part.",
  "Merge Sort is a divide and conquer algorithm that divides the input array into two halves, sorts each half, and then merges them to obtain the final sorted array. It is efficient for large datasets but requires additional memory for the merging step.",
  "Quick Sort is another divide and conquer algorithm that selects a pivot element and partitions the array into two sub-arrays around the pivot. It then recursively sorts the sub-arrays. Quick Sort is widely used and performs well in practice.",
];

export const SORT_ALGORITHMS_WITH_DESCRIPTIONS = SORT_ALGORITHMS.reduce(
  (result: any, algorithm, index) => {
    result[algorithm] = SORT_ALGORITHMS_DESCRIPTIONS[index];
    return result;
  },
  {}
);

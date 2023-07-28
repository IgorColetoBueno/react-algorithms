export type SortAlgorithmType =
  | "Bubble Sort"
  | "Selection Sort"
  | "Insertion Sort"
  | "Merge Sort"
  | "Quick Sort"
  | "Heap Sort"
  | "Counting Sort"
  | "Radix Sort"
  | "Bucket Sort"
  | "Tim Sort";

export const SORT_ALGORITHMS: SortAlgorithmType[] = [
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
  "Heap Sort",
  "Counting Sort",
  "Radix Sort",
  "Bucket Sort",
  "Tim Sort",
];

const SORT_ALGORITHMS_DESCRIPTIONS = [
  "Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm continues until the entire list is sorted.",
  "Selection Sort is an in-place comparison-based sorting algorithm. It divides the input list into two parts: the sorted and the unsorted part. It repeatedly selects the minimum (or maximum) element from the unsorted part and places it at the end of the sorted part.",
  "Insertion Sort is an in-place comparison-based sorting algorithm with two parts. It builds the sorted array one element at a time by repeatedly picking an element from the unsorted part and inserting it into its correct position in the sorted part.",
  "Merge Sort is a divide and conquer algorithm that divides the input array into two halves, sorts each half, and then merges them to obtain the final sorted array. It is efficient for large datasets but requires additional memory for the merging step.",
  "Quick Sort is another divide and conquer algorithm that selects a pivot element and partitions the array into two sub-arrays around the pivot. It then recursively sorts the sub-arrays. Quick Sort is widely used and performs well in practice.",
  "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It builds a max (or min) heap and repeatedly extracts the root element (which is the maximum or minimum) to obtain the sorted array.",
  "Counting Sort is an integer sorting algorithm suitable for sorting non-negative integers with a limited range. It counts the occurrences of each element and uses this information to place the elements in their correct positions.",
  "Radix Sort is an integer sorting algorithm based on digits. It sorts the elements by processing the digits from the least significant to the most significant. Radix Sort is efficient for sorting integers with a fixed number of digits.",
  "Bucket Sort is a divide and conquer algorithm that distributes the elements into a number of buckets, sorts each bucket individually, and then merges the buckets to obtain the final sorted array. It is often used as a sub-routine in other sorting algorithms.",
  "Tim Sort is a hybrid sorting algorithm based on Merge Sort and Insertion Sort. It divides the input array into small chunks, sorts them using Insertion Sort, and then merges the sorted chunks using Merge Sort. Tim Sort is efficient and stable.",
];

export const SORT_ALGORITHMS_WITH_DESCRIPTIONS = SORT_ALGORITHMS.reduce(
  (result: any, algorithm, index) => {
    result[algorithm] = SORT_ALGORITHMS_DESCRIPTIONS[index];
    return result;
  },
  {}
);

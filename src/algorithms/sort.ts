import { SortAlgorithmType } from "@/config/algorithms";

export interface ISortResult {
  currentValue: number;
  affectedItems: number[];
  list: number[];
}
interface ISortAlgorithm {
  sort: (arr: number[]) => ISortResult[];
}

interface ISortAlgorithFactory {
  createSortAlgorithm: (type: SortAlgorithmType) => ISortAlgorithm;
}

export class SortAlgorithmFactory implements ISortAlgorithFactory {
  createSortAlgorithm(type: SortAlgorithmType): ISortAlgorithm {
    switch (type) {
      case "Bubble Sort":
        return BubbleSortAlgorithm.getInstance();
      case "Selection Sort":
        return SelectionSortAlgorithm.getInstance();
      case "Insertion Sort":
        return InsertionSortAlgorithm.getInstance();
      case "Merge Sort":
        return MergeSortAlgorithm.getInstance();
      case "Quick Sort":
        return QuickSortAlgorithm.getInstance();
      default:
        throw new Error("No sort class found");
    }
  }
}

class BubbleSortAlgorithm implements ISortAlgorithm {
  private static instance: BubbleSortAlgorithm | null = null;

  private constructor() {}

  public static getInstance(): BubbleSortAlgorithm {
    if (!BubbleSortAlgorithm.instance) {
      BubbleSortAlgorithm.instance = new BubbleSortAlgorithm();
    }
    return BubbleSortAlgorithm.instance;
  }
  sort(arr: number[]): ISortResult[] {
    const arrToSort = [...arr];
    const numberOfItems = arrToSort.length;
    const finalValue: ISortResult[] = [];

    // Outer loop for the number of passes
    arrToSort.forEach((_, externalIndex) => {
      // Inner loop for each pass
      // The largest element will "bubble up" to its correct position
      for (
        let internalIndex = 0;
        internalIndex < numberOfItems - externalIndex - 1;
        internalIndex++
      ) {
        // Swap if the element found is greater than the next element
        if (arrToSort[internalIndex] > arrToSort[internalIndex + 1]) {
          const result: ISortResult = {
            currentValue: arrToSort[internalIndex],
            affectedItems: [arrToSort[internalIndex + 1]],
            list: [],
          };

          // Swap elements using destructuring assignment
          [arrToSort[internalIndex], arrToSort[internalIndex + 1]] = [
            arrToSort[internalIndex + 1],
            arrToSort[internalIndex],
          ];

          result.list = [...arrToSort];

          finalValue.push(result);
        }
      }
    });

    return finalValue;
  }
}

class SelectionSortAlgorithm implements ISortAlgorithm {
  private static instance: SelectionSortAlgorithm | null = null;

  private constructor() {}

  public static getInstance(): SelectionSortAlgorithm {
    if (!SelectionSortAlgorithm.instance) {
      SelectionSortAlgorithm.instance = new SelectionSortAlgorithm();
    }
    return SelectionSortAlgorithm.instance;
  }
  sort(arr: number[]): ISortResult[] {
    const arrToSort = [...arr];
    const numberOfItems = arrToSort.length;
    const finalValue: ISortResult[] = [];

    // Outer loop for the number of passes
    arrToSort.forEach((_, externalIndex) => {
      let minIndex = externalIndex;

      // Find the index of the minimum element in the unsorted part of the array
      for (
        let internalIndex = externalIndex + 1;
        internalIndex < numberOfItems;
        internalIndex++
      ) {
        if (arrToSort[internalIndex] < arrToSort[minIndex]) {
          minIndex = internalIndex;
        }
      }

      // Swap the minimum element with the first element of the unsorted part
      if (minIndex !== externalIndex) {
        const result: ISortResult = {
          currentValue: arrToSort[externalIndex],
          affectedItems: [arrToSort[minIndex]],
          list: [],
        };
        const temp = arrToSort[externalIndex];
        arrToSort[externalIndex] = arrToSort[minIndex];
        arrToSort[minIndex] = temp;

        result.list = [...arrToSort];
        finalValue.push(result);
      }
    });

    return finalValue;
  }
}
class InsertionSortAlgorithm implements ISortAlgorithm {
  private static instance: InsertionSortAlgorithm | null = null;

  private constructor() {}

  public static getInstance(): InsertionSortAlgorithm {
    if (!InsertionSortAlgorithm.instance) {
      InsertionSortAlgorithm.instance = new InsertionSortAlgorithm();
    }
    return InsertionSortAlgorithm.instance;
  }

  sort(arr: number[]): ISortResult[] {
    const arrToSort = [...arr];
    const numberOfItems = arrToSort.length;
    const finalValue: ISortResult[] = [];

    for (
      let externalIndex = 1;
      externalIndex < numberOfItems;
      externalIndex++
    ) {
      debugger;
      const key = arrToSort[externalIndex];
      let aux = externalIndex - 1;

      const result: ISortResult = {
        currentValue: key,
        affectedItems: [],
        list: [],
      };

      /* Move elements of arrToSort[0..i-1] that are greater than the key
       to one position ahead of their current position */
      while (aux >= 0 && arrToSort[aux] > key) {
        result.affectedItems.push(arrToSort[aux]);
        arrToSort[aux + 1] = arrToSort[aux];
        aux--;
      }

      arrToSort[aux + 1] = key;

      if (result.affectedItems.length) {
        result.list = [...arrToSort];
        finalValue.push(result);
      }
    }

    return finalValue;
  }
}
class MergeSortAlgorithm implements ISortAlgorithm {
  private result: ISortResult[] = [];

  private static instance: MergeSortAlgorithm | null = null;

  private constructor() {}

  public static getInstance(): MergeSortAlgorithm {
    if (!MergeSortAlgorithm.instance) {
      MergeSortAlgorithm.instance = new MergeSortAlgorithm();
    }
    // reset value
    MergeSortAlgorithm.instance.result = [];

    return MergeSortAlgorithm.instance;
  }

  sort(arr: number[]): ISortResult[] {
    this.internalSort(arr);
    return this.result;
  }

  private internalSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middleIndex);
    const rightArray = arr.slice(middleIndex);

    const sortedLeft = this.internalSort(leftArray);
    const sortedRight = this.internalSort(rightArray);
    const merged = this.merge(sortedLeft, sortedRight);

    this.result.push({
      list: merged,
      affectedItems: merged,
      currentValue: -1,
    });

    return merged;
  }

  private merge(left: number[], right: number[]): number[] {
    debugger;
    const mergedArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }

    return mergedArray;
  }
}
class QuickSortAlgorithm implements ISortAlgorithm {
  private result: ISortResult[] = [];
  private size: number = 0;

  private static instance: QuickSortAlgorithm | null = null;

  private constructor() {}

  public static getInstance(): QuickSortAlgorithm {
    if (!QuickSortAlgorithm.instance) {
      QuickSortAlgorithm.instance = new QuickSortAlgorithm();
    }
    // reset value
    QuickSortAlgorithm.instance.result = [];
    QuickSortAlgorithm.instance.size = 0;

    return QuickSortAlgorithm.instance;
  }

  sort(arr: number[]): ISortResult[] {
    this.size = arr.length
    this.internalSort(arr);
    return this.result;
  }

  private internalSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivotValue = arr[pivotIndex];
    const leftArray: number[] = [];
    const rightArray: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) continue;
      if (arr[i] < pivotValue) {
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }

    const finalValue = [
      ...this.internalSort(leftArray),
      pivotValue,
      ...this.internalSort(rightArray),
    ];

    if (finalValue.length === this.size) {
      this.result.push({
        affectedItems: finalValue,
        currentValue: pivotIndex,
        list: finalValue,
      });
    }

    return finalValue;
  }
}

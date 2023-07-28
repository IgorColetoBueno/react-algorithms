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
        return new BubbleSortAlgorith();
      default:
        throw new Error("No sort class found");
    }
  }
}

class BubbleSortAlgorith implements ISortAlgorithm {
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

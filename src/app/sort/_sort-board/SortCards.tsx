import { SortAlgorithmFactory } from "@/algorithms/sort";
import { SortAlgorithmType } from "@/config/algorithms";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useMemo, useState } from "react";
import SortIndex from "./SortIndex";
import { useAtom } from "jotai";
import { sortConfigAtom, sortReproduceIndexAtom } from "../atom";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface SortCardsProps {
  randomList: number[];
}

const SortCards = ({ randomList }: SortCardsProps) => {
  const params = useSearchParams();
  const type = params.get("type");
  const [sortConfig, setSortConfig] = useAtom(sortConfigAtom);
  const [reproduceIndex, setReproduceIndex] = useAtom(sortReproduceIndexAtom);

  const sortedValue = useMemo(() => {
    const sortFactory = new SortAlgorithmFactory().createSortAlgorithm(
      type as SortAlgorithmType
    );
    return sortFactory.sort(randomList);
  }, [randomList, type]);

  useEffect(() => {
    if (reproduceIndex < sortedValue.length) {
      const timeoutId = setTimeout(() => {
        setReproduceIndex(reproduceIndex + 1);
      }, sortConfig.delay);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return () => {
      setReproduceIndex(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedValue, reproduceIndex]);

  return (
    <>
      <div className="flex gap-10 flex-wrap justify-around">
        {(randomList ?? []).map((random, index) => (
          <SortIndex key={`random-${index}`}>{random}</SortIndex>
        ))}
      </div>
      <div className="flex justify-center">
        <ArrowDownIcon height={40} />
      </div>
      {sortedValue.slice(0, reproduceIndex).map((sorted, index) => (
        <Fragment key={index + "-serie"}>
          <div className="flex gap-10 flex-wrap justify-around">
            {sorted.list.map((sortedItem) => (
              <SortIndex
                key={`${index}-${sortedItem}`}
                color={
                  sorted.currentValue === sortedItem
                    ? "current"
                    : sorted.affectedItems.includes(sortedItem)
                    ? "affected"
                    : undefined
                }
              >
                {sortedItem}
              </SortIndex>
            ))}
          </div>
          {index < sortedValue.length - 1 && (
            <div className="flex justify-center">
              <ArrowDownIcon height={40} />
            </div>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default SortCards;

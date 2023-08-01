"use client";
import { fisherYatesShuffleFromNumberOfItems } from "@/algorithms/random";
import { sortConfigAtom } from "@/app/sort/atom";
import { useAtom } from "jotai";
import { useMemo } from "react";
import SortCards from "./SortCards";
interface SortBoardProps {}

const SortBoard = ({}: SortBoardProps) => {
  const [sortConfig] = useAtom(sortConfigAtom);
  const randomList = useMemo(() => {
    return fisherYatesShuffleFromNumberOfItems(sortConfig.numberOfItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortConfig.numberOfItems, sortConfig.running]);

  if (!sortConfig.running) return null;

  return (
    <div className="p-4 space-y-5">
      <SortCards randomList={randomList} />
    </div>
  );
};

export default SortBoard;

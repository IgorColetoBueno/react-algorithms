import { atom } from "jotai";

export interface SortConfig {
  numberOfItems: number;
  delay: number;
  running: boolean;
}

export const sortReproduceIndexAtom = atom(0);

export const sortConfigAtom = atom<SortConfig>({
  numberOfItems: 6,
  delay: 1200,
  running: false,
});

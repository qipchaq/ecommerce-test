import { atom } from "jotai";

const sliceStartAtom = atom(0);
const sliceEndAtom = atom(10);
const currentPageAtom = atom(1);

const searchTermAtom = atom("");

export { sliceStartAtom, sliceEndAtom, currentPageAtom, searchTermAtom };

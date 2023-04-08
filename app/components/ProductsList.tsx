"use client";

import React from "react";
import Product from "./Product";
import Pagination from "../components/Pagination";

import { sliceStartAtom, sliceEndAtom } from "@/storage/atoms";
import { useAtom } from "jotai";

type Props = {
  data: Product[];
};

const DataList = ({ data }: Props) => {
  const [currentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd] = useAtom(sliceEndAtom);

  return (
    <>
      <div className="my-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        {data.slice(currentSliceStart, currentSliceEnd).map((data: Product) => (
          <Product key={data.id} product={data} />
        ))}
      </div>
      <Pagination totalProducts={data.length} />
    </>
  );
};

export default DataList;

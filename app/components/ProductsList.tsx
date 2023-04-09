"use client";

import React, { useEffect, useState } from "react";
import Product from "./Product";
import Pagination from "../components/Pagination";

import { sliceStartAtom, sliceEndAtom, searchTermAtom } from "@/storage/atoms";
import { useAtom } from "jotai";

type Props = {
  data: Product[];
};

const DataList = ({ data }: Props) => {
  const [currentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd] = useAtom(sliceEndAtom);

  const [products, setProducts] = useState(data);
  const [currentSearchTerm] = useAtom(searchTermAtom);

  useEffect(() => {
    const filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
    setProducts(filteredData);
  }, [currentSearchTerm, data]);

  return (
    <>
      <div className="my-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        {products
          .slice(currentSliceStart, currentSliceEnd)
          .map((data: Product) => (
            <Product key={data.id} product={data} />
          ))}
      </div>
      <Pagination totalProducts={products.length} />
    </>
  );
};

export default DataList;

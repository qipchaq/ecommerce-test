import React from "react";
// import Product from "../components/Product";
import getProducts from "@/lib/getProducts";

// import { useAtom } from "jotai";
// import { sliceStartAtom, sliceEndAtom, currentPageAtom } from "@/storage/atoms";

import ProductList from "../components/ProductsList";

const ProductsList = async () => {
  const productsData: Promise<Product[]> = getProducts();
  const data: Product[] = await productsData;

  // const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  // const itemsPerPage = 10;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Top selling products
        </h2>
        {/* <ProductList data={data} /> */}
        <ProductList data={data} />
      </div>
    </div>
  );
};

export default ProductsList;

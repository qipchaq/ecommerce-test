"use client";

import React from "react";
import getProducts from "@/lib/getProducts";

import ProductList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";

const ProductsList = async () => {
  const productsData: Promise<Product[]> = getProducts();
  const data: Product[] = await productsData;

  return (
    <div className="mx-auto max-w-2xl px-8 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 flex flex-col gap-8">
      <SearchBar />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Top selling products
      </h2>
      <ProductList data={data} />
    </div>
  );
};

export default ProductsList;

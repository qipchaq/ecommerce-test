import Image from "next/image";
import React, { useState } from "react";

import { totalOrdersAtom, ordersAtom } from "@/storage/atoms";
import { useAtom } from "jotai";

type Props = {
  product: Product;
};

const Product = ({ product }: Props) => {
  const [currentTotalOrders, setCurrentTotalOrders] = useAtom(totalOrdersAtom);
  const [currentOrders, setCurrentOrders] = useAtom(ordersAtom);

  const description =
    product.description.length > 100
      ? product.description.substring(0, 100) + "..."
      : product.description;

  const handleAddReduceButtons = (action: string) => {
    if (currentTotalOrders === 0 && action !== "add") {
      return;
    }

    switch (action) {
      case "add":
        setCurrentTotalOrders((prev) => prev + 1);
        setCurrentOrders((prev) => [...prev, product]);
        break;
      case "reduce":
        setCurrentTotalOrders((prev) => prev - 1);
        break;
      default:
        setCurrentTotalOrders((prev) => prev);
    }
  };

  return (
    <div className="group relative border-solid border-slate-950">
      <div className="min-h-40 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 sm:h-40 lg:h-40">
        <Image
          src={product.image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          width={200}
          height={200}
        />
      </div>

      <div className="flex m-auto w-fit mt-4 items-center">
        <button onClick={() => handleAddReduceButtons("add")}>
          <Image src="/images/plus.png" alt="" width={35} height={35} />
        </button>
        <button onClick={() => handleAddReduceButtons("reduce")}>
          <Image src="/images/reduce.png" alt="" width={35} height={35} />
        </button>
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div className="flex gap-2 justify-between">
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true"></span>
            {product.title}
          </h3>
          <p className="text-sm font-medium text-gray-900">{product.price}$</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Product;

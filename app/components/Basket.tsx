import Image from "next/image";
import React, { useState } from "react";

import { totalOrdersAtom, ordersAtom } from "@/storage/atoms";
import { useAtom } from "jotai";
import Order from "./Order";

const Basket = () => {
  const [currentTotalOrders] = useAtom(totalOrdersAtom);
  const [currentOrders] = useAtom(ordersAtom);
  const [isOpen, setIsOpen] = useState(false);

  const removeDuplicates = (items: Product[]) => {
    const seen = new Map();
    const result = [];

    for (const item of items) {
      if (!seen.has(item.id)) {
        seen.set(item.id, 1);
        result.push({
          id: item.id,
          title: item.title,
          price: item.price,
          amount: 1,
        });
      } else {
        const index = result.findIndex((x) => x.id === item.id);
        result[index].amount++;
      }
    }

    return result;
  };

  const filteredCurrentOrders = removeDuplicates(currentOrders);

  const total = () => {
    let sum = 0;
    for (const order of filteredCurrentOrders) {
      sum += order.amount * +order.price;
    }
    return sum.toFixed(2);
  };

  return (
    <div className="relative">
      <button className="relative" onClick={() => setIsOpen((prev) => !prev)}>
        <Image src="/images/basket.png" alt="" width={35} height={35} />
        <span className="absolute flex items-center justify-center bg-rose-600 rounded-full text-white text-sm top-0 left-5 w-5 h-5">
          {currentTotalOrders}
        </span>
      </button>
      {isOpen && (
        <div className="bg-slate-200 absolute -right-3 flex flex-col z-10 px-6 py-4 rounded-md">
          {filteredCurrentOrders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
          <span className="w-28 justify-between text-left ml-auto">
            {`Total: ${total()}$`}
          </span>
        </div>
      )}
    </div>
  );
};

export default Basket;

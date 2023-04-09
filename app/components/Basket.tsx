import Image from "next/image";
import React from "react";

import { totalOrdersAtom } from "@/storage/atoms";
import { useAtom } from "jotai";

const Basket = () => {
  const [currentTotalOrders] = useAtom(totalOrdersAtom);

  return (
    <div className="relative">
      <Image src="/images/basket.png" alt="" width={35} height={35} />
      <span className="absolute flex items-center justify-center bg-rose-600 rounded-full text-white text-sm top-0 left-5 w-5 h-5">
        {currentTotalOrders}
      </span>
    </div>
  );
};

export default Basket;

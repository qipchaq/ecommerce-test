import React from "react";

type Props = {
  order: Pick<Product, "id" | "title" | "price" | "amount">;
};

const Order = ({ order: { title, price, amount } }: Props) => {
  const sumOrder = +price * amount!;

  return (
    <div className="flex gap-3">
      <span className="w-24 justify-between">{title.substring(0, 10)}</span>
      <span className="w-24 justify-between">{`Amount: ${amount}`}</span>
      <span className="w-28 justify-between">{`Price: ${sumOrder.toFixed(
        2
      )}$`}</span>
    </div>
  );
};

export default Order;

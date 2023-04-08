import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
};

const Product = ({ product }: Props) => {
  const description =
    product.description.length > 100
      ? product.description.substring(1, 100) + "..."
      : product.description;

  return (
    <div className="group relative border-solid border-slate-950">
      <div className="min-h-40 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-40">
        <Image
          src={product.image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div className="flex gap-2 justify-between">
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.title}
            </a>
          </h3>
          <p className="text-sm font-medium text-gray-900">{product.price}$</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Product;

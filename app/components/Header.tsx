"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Basket from "./Basket";

const Header = () => {
  return (
    <header className="max-w-screen-xl m-auto px-4 py-2 border-b-2 border-gray-200">
      <nav className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src="/images/logo1.png" alt="" width={50} height={50} />
          </Link>
        </div>
        <Basket />
      </nav>
    </header>
  );
};

export default Header;

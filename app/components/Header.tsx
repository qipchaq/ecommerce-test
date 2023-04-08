import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="max-w-screen-xl m-auto px-4 py-2 bg-teal-300">
      <nav className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/images/logo1.png"
              alt=""
              width={501}
              height={500}
            />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-white font-semibold leading-6 rounded-lg bg-rose-500 px-2 py-0.5 rounded-md px-3.5 py-2.5 shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 px-2 py-0.5 "
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

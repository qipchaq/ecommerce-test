import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen-xl m-auto">
      <div className="flex">
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            New arrivals
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eius
            modi, magnam unde impedit qui, quae necessitatibus quasi veritatis
            tempore autem sequi error ad, quo consequatur. Esse excepturi error
            minus?
          </p>
          <Link
            href="/products"
            className="text-lg text-white font-semibold leading-6 rounded-lg bg-rose-500 px-3 py-2 rounded-md px-3.5 py-2.5 shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Shop New Arrivals
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            // className="h-auto w-auto"
            src="/images/bg-main.png"
            alt=""
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </main>
  );
}

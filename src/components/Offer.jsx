import Image from "next/image";
import Link from "next/link";
import React from "react";

const Offer = () => {
  return (
    <>
      <section className="h-screen bg-[url('https://github.com/safak/restaurant-ui/blob/main/public/offerBg.png?raw=true')] flex items-center bg-contain">
        <div className="container">
          <div className="flex">
            <div className="w-2/4 flex flex-col gap-5">
              <h2 className="text-white text-4xl font-bold">
                Delicious Burger & <br /> Frenchy Fry
              </h2>
              <p className="text-white pr-20">
                food desc Learn how to create a horizontal scrollable menu with
                CSS. Learn how to create a horizontal scrollable menu with CSS.
              </p>
              <span className="text-yellow-500 font-bold text-2xl">
                05:5:12:56
              </span>
              <Link
                href="/menu"
                className="block rounded-md bg-red-500 w-fit px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Order Now
              </Link>
            </div>
            <div className="w-2/4 flex justify-end">
              <div className="offer-responsive">
                <Image
                  src="https://github.com/safak/restaurant-ui/blob/main/public/offerProduct.png?raw=true"
                  width={700}
                  height={500}
                  alt="offerImg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/utils/data";
const Featured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    setFeatured(products);
  }, []);
  return (
    <>
      <section className="h-screen overflow-x-scroll overflow-y-hidden ">
        <div className="items flex w-max">
          {featured.map((item) => (
            <div
              className="item hover:bg-fuchsia-50 transition-all duration-300 w-[33vw] flex flex-col justify-center items-center gap-4 p-10"
              key={item.id}
            >
              <div className="mb-3 hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={item.img}
                  width={350}
                  height={200}
                  alt="featuredImg"
                />
              </div>
              <h2 className="text-xl font-bold text-red-600">{item.title}</h2>
              <p className="text-sm text-red-500">{item.desc}</p>
              <span className="text-red-600">${item.price}</span>
              <button className="block rounded-md bg-red-500 w-fit px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Featured;

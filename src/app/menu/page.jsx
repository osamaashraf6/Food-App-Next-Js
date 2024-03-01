"use client";
import React, { useEffect, useState } from "react";
import { categories } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(categories);
  }, []);
  return (
    <>
      <section className="h-[85vh] flex justify-center items-center">
        <div className="container">
          <div className="items flex">
            {category.map((item) => (
              <div className="item w-4/12 flex relative border-y-2 border-gray-100">
                <div className="absolute left-5 top-6 flex pr-20 pb-20 flex-col gap-5">
                  <h2
                    className={`text-white text-xl font-bold uppercase ${
                      item.id == 2 ? "text-black" : ""
                    }`}
                  >
                    {item.title} <br />
                    {item.category}
                  </h2>
                  <p
                    className={`text-white ${item.id == 2 ? "text-black" : ""}`}
                  >
                    {item.desc}
                  </p>
                  <Link
                    href={`/menu/${item.category}`}
                    className={`transition-all duration-300 block rounded-md bg-white w-fit px-5 py-2 text-center text-sm font-semibold text-red-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                      item.id == 2 ? "bg-black text-white" : ""
                    }`}
                  >
                    Explore
                  </Link>
                </div>
                <div>
                  <div className="menu-responsive">
                    <Image
                      src={item.img}
                      alt="menuImg"
                      width={600}
                      height={600}
                      className="h-[45vh]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

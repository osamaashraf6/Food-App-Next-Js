"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const Category = ({ params }) => {
  const [productsList, setProductsList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { category } = params;
  const handleCart = (id) => {
    const updated = products.filter((item) => item.id == id);
    setCartItems([...cartItems, updated]);
  };
  console.log(cartItems);
  useEffect(() => {
    const updated = products.filter((item) => item.category === category);
    setProductsList(updated);
  }, [category]);
  return (
    <>
      <section className="">
        <div className="items flex flex-wrap items-center">
          {productsList.map((item) => (
            <div
              className="item relative itemcategorybutton w-[32.96vw] even:bg-fuchsia-50 h-[50vh] border-b-2 border-x border-red-500"
              key={item.id}
            >
              <Link href={`/menu/${category}/${item.id}`}>
                <div className="productlist-responsive mb-12 flex flex-col justify-center items-center ">
                  <Image
                    src={item.img}
                    width={260}
                    height={260}
                    alt="productlistImg"
                  />
                </div>
                <div className="flex justify-between px-5 ">
                  <h2 className="text-red-500 font-black uppercase">
                    {item.title}
                  </h2>
                  <span className="text-red-500 font-bold">$ {item.price}</span>
                </div>
              </Link>
              <button
                onClick={() => handleCart(item.id)}
                className="categorybutton hidden absolute right-4 bottom-2 rounded-md bg-red-500 w-fit px-1 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;

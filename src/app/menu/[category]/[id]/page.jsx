"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/utils/data";
import Image from "next/image";

const Product = ({ params }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = params;
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : (prev = 0)));
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  useEffect(() => {
    const updated = products.filter((product) => product.id == id);
    setSingleProduct(updated);
  }, [id]);
  return (
    <>
      <section className="h-[90vh] flex justify-center items-center">
        <div className="container">
          {singleProduct.map((product) => (
            <div className="items flex items-center" key={product.id}>
              <div className="item w-2/4 ml-20">
                <div className="flex justify-center">
                  <Image
                    src={product.img}
                    width={400}
                    height={400}
                    alt="singleproductImg"
                  />
                </div>
              </div>
              <div className="item flex flex-col gap-4 w-2/4">
                <h2 className="text-red-500 font-black uppercase">
                  {product.title}
                </h2>
                <p className="text-red-500">{product.desc}</p>
                <span className="text-red-500 font-bold">
                  $ {product.price * quantity}
                </span>
                <div className="flex gap-4">
                  <button className="rounded-md border border-red-500 w-20 px-3 py-1 text-center text-sm font-semibold text-red-500 shadow-sm hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Small
                  </button>
                  <button className="rounded-md border border-red-500 w-20 px-3 py-1 text-center text-sm font-semibold text-red-500 shadow-sm hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Medium
                  </button>
                  <button className="rounded-md border border-red-500 w-20 px-3 py-1 text-center text-sm font-semibold text-red-500 shadow-sm hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Large
                  </button>
                </div>
                <div className="flex justify-between border border-red-500">
                  <div className="flex relative w-[77%] items-center px-5 text-red-500">
                    <span>Quantitiy</span>
                    <div className="absolute flex items-center right-5">
                      <span onClick={handleDecrease} className="cursor-pointer">
                        &lt;
                      </span>
                      <span className="mx-4 block"> {quantity} </span>
                      <span onClick={handleIncrease} className="cursor-pointer">
                        &gt;
                      </span>
                    </div>
                  </div>
                  <button className="block bg-red-500  w-[23%] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Product;

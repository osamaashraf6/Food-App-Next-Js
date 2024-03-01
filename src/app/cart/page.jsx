"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { products } from "@/utils/data";
const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const updated = products.filter((product) => product.category === "burger");
    setCartItem(updated);
  }, []);
  return (
    <>
      <section className="">
        <div className="items flex ">
          <div className="item w-2/4 flex justify-center items-center h-[80vh]">
            <div className="w-[62%] m-auto">
              {cartItem.map((item) => (
                <div className="flex gap-20 items-center shadow-sm mb-6">
                  <div>
                    <Image
                      src="https://github.com/safak/restaurant-ui/blob/main/public/temporary/p10.png?raw=true"
                      width={100}
                      height={100}
                      alt="cartimg"
                    />
                  </div>
                  <div>
                    <h2 className="text-red-500 font-black uppercase">
                      {item.title}
                    </h2>
                    <span className="text-red-500">Large</span>
                  </div>
                  <div className="text-red-500 font-bold">{item.price}</div>
                  <div className="text-red-500 font-bold cursor-pointer">
                    &times;
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="item w-2/4 flex justify-center items-center h-[80vh] bg-fuchsia-100">
            <div className="w-[62%] m-auto">
              <div>
                <div className="shadow-sm mb-4 flex justify-between p-3 text-red-500">
                  <p>
                    Subtotal <span>(3 items)</span>
                  </p>
                  <span>5</span>
                </div>
                <div className="shadow-sm mb-6 flex justify-between p-3 text-red-500">
                  <p>Service Cost</p>
                  <span>0</span>
                </div>
                <div className="shadow-sm mb-6 flex justify-between p-3 text-red-500">
                  <p>Delivery Cost</p>
                  <span className="text-green-500">FREE!</span>
                </div>
                <div className="shadow-sm mb-6 flex justify-between p-3 text-red-500">
                  <p>TOTAL(INCL. VAT)</p>
                  <span>6</span>
                </div>
                <button className="block bg-red-500 rounded ml-auto w-[50%] px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

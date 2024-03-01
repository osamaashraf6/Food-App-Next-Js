import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <header className="bg-red-500 h-9 flex justify-center items-center">
        <div className="container">
          <div className=" text-white text-center">
            Free delivery for all orders $50. Order your food now !
          </div>
        </div>
      </header>
      {/* start navbar */}
      <nav className="h-20 flex items-center border-y-2 border-red-500">
        <div className="container">
          <div className="parnav flex justify-between">
            <ul className="flex gap-3 text-red-500">
              <li>
                <Link href="/">HOMEPAGE</Link>
              </li>
              <li>
                <Link href="/menu">MENU</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
            <div className="brand">
              <Link href="/" className="font-bold text-xl text-red-500">
                MASSIMO
              </Link>
            </div>
            <ul className="flex gap-4 text-red-500">
              <li className="">
                <Link
                  href="/contact"
                  className="flex rounded-full px-2 pt-0.5 bg-yellow-300"
                >
                  <span className="icon text-white mr-1">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  555 44 00
                </Link>
              </li>
              <li>
                <Link href="/orders" className="flex">
                  ORDERS
                  <span className="icon ml-1 text-yellow-300">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  CART <span className="">(3)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

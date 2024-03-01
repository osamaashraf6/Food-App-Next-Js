import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="h-20 border-y border-red-500 flex items-center">
        <div className="container">
          <div className="parfoot flex justify-between">
            <div>
              <Link href="/" className="font-bold text-xl text-red-500">
                MASSIMO
              </Link>
            </div>
            <div className="text-red-500">&copy; ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

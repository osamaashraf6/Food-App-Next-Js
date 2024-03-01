"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImgs = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      img: "https://github.com/safak/restaurant-ui/blob/main/public/slide1.png?raw=true",
      alt: "slide1",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      img: "https://github.com/safak/restaurant-ui/blob/main/public/slide2.png?raw=true",
      alt: "slide2",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      img: "https://github.com/safak/restaurant-ui/blob/main/public/slide3.jpg?raw=true",
      alt: "slide3",
    },
  ];
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === slideImgs.length - 1 ? 0 : prev + 1
        ),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div className="items flex ">
          <div className="w-2/4 flex justify-center items-center flex-col gap-12 bg-pink-100">
            <h1 className="text-4xl text-red-500 w-[54%] font-extrabold">
              {slideImgs[currentSlide].title}
            </h1>
            <Link
              href="/menu"
              className="block rounded-md bg-red-500 w-fit px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Order Now
            </Link>
          </div>
          <div className="w-2/4">
            <div className="slide-responsive">
              <Image
                src={slideImgs[currentSlide].img}
                alt={slideImgs[currentSlide].alt}
                width={770}
                height={500}
                className="object-cover h-[84vh]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slide;
Slide;

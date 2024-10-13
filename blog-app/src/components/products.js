"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Products({ cardData }) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500); // Delay the animation start by 500ms
  }, []);
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="bg-sky-200">
      <section className="text-black  body-font">
        <div className="container mx-auto flex px-5 pt-6 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`title-font sm:text-5xl text-5xl mb-4 text-black font-bold transition duration-700 ease-in-out ${
                startAnimation ? "transform scale-105 opacity-100" : "opacity-0"
              }`}
            >
              Products
            </h1>
            <div className="flex justify-center text-left ">
              <p
                className={`mb-8 w-50% text-black transition duration-1000 ease-in-out ${
                  startAnimation
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                Welcome to a world of limitless possibilities, where the journey
                is as
                <br />
                exhilarating as the destination, and where every moment is an
                opportunity to make your mark on the canvas of existence. The
                only limit is the extent of your imagination. The only limit is
                the extent of your imagination.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      <section className="p-10">
        <Carousel className="p-10">
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselContent>
            {cardData.map((card, index) => (
              <CarouselItem key={index} className="basis-1/4 p-2 mr-20">
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-[449px] w-[515px] overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover rounded-lg object-center h-full w-full"
                      src={card.image}
                    />
                  </div>
                  {/* Text below image should not exceed the width of the image */}
                  <div className="w-[515px] mt-2">
                    <h5 className="text-sm font-bold ml-1">Color</h5>
                    <h2 className="text-xl font-medium title-font text-gray-900">
                      {card.title}
                    </h2>
                    <p className="text-base leading-relaxed mt-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext>Next</CarouselNext>
        </Carousel>
      </section>
    </div>
  );
}

export default Products;


"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonialDemo";

function Testimonial({ testimonialsData }) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500); // Delay the animation start by 500ms
  }, []);

  // Updated truncateText function to handle both word limit and overflow
  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <div>
      <section className="text-black bg-blue-200 body-font">
        <div className="container mx-auto flex px-5 pt-6 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`title-font sm:text-5xl text-5xl mb-4 text-black font-bold transition duration-700 ease-in-out ${startAnimation ? "transform scale-105 opacity-100" : "opacity-0"
                }`}
            >
              Testimonial
            </h1>
            <div className="flex justify-center text-left">
              <p
                className={`mb-8 w-50% text-black transition duration-1000 ease-in-out ${startAnimation ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
              >
                Welcome to a world of limitless possibilities, where the journey is as
                <br />
                exhilarating as the destination, and where every moment is an
                opportunity to make your mark on the canvas of existence.
                The only limit is the extent of your imagination.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5">
          <TestimonialCard testimonials={testimonialsData} />
        </div>
      </section>
    </div>
  );
}

export default Testimonial;

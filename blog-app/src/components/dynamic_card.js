"use client";
import { useState } from "react";

// The CardGrid component now accepts data as a prop
export default function CardGrid({ cardData }) {
  // Function to truncate text to a specific number of words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl"
        >
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={card.image}
            alt={card.title}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {card.category}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{card.title}</h1>
            <p className="leading-relaxed mb-3">{truncateText(card.description, 80)}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{card.author}</span>
              <span className="text-gray-500 text-sm">{new Date(card.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

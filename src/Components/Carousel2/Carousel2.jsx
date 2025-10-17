import React, { useState } from "react";

const VerticalCarousel2 = () => {
  const images = [
    "gympic6.jpg",
    "gympic2.jpg",
    "gympic3.jpg",
    "aurumpic4.jpg",
    "aurumpic5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-72 lg:h-screen  overflow-hidden ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="absolute w-full h-full object-cover top-0 left-0"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-end h-10 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-3 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-0 end-0 z-30 flex items-center justify-center h-10 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-focus:ring-3 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4 4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default VerticalCarousel2;

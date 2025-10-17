import React from 'react'

// أيقونات مجانية
import { useState, useEffect } from "react";



export default function caro3({className=""}) {

  const images = [
    "gympic1.jpg",
    "gympic8.jpg",
    "gympic2.jpg",
    "gympic3.jpg",
    "gympic4.jpg",
    "gympic5.jpg",
  ];
  const [current, setCurrent] = useState(0);

  // auto-slide كل 5 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);


  return (
    <>

      <div className={`relative w-full h-[400px]  overflow-hidden  ${className}`}>
        {/* الصور */}
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* زر السابق */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-50"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

        </button>

        {/* زر التالي */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-50"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round"  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        </button>

        {/* النقاط (indicators) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-5 h-5 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>

    </>
  )
}

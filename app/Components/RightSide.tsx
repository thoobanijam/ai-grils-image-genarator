"use client";
import React, { useState, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

interface RightSideProps {
  images: string[]; // <- tell TS that we accept an array of images
}

const demoImages = [
  "/img/i1.webp",
  "/img/i2.webp",
  "/img/i3.jpg",
  "/img/i4.webp",
  "/img/i5.webp",
  "/img/i6.jpg",
];

const RightSide: React.FC<RightSideProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto slider ONLY when no generated images
  useEffect(() => {
    if (images.length > 0) return; // stop auto slider if images exist

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % demoImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-[700px] rounded-lg p-4 bg-gradient-to-r from-[#3d0661] to-[#4f082c] flex items-center justify-center relative overflow-hidden">

      {/* ✅ Show generated images if they exist */}
      {images.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-2">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Generated ${idx}`}
              className="w-[100%]  rounded-lg shadow-xl border-4 border-[#0f162a]"
            />
          ))}
        </div>
      ) : (
        <>
          {/* 🔁 Slider if no generated images */}
          <img
            src={demoImages[current]}
            className="w-[90%] rounded-lg shadow-xl transition-all duration-700 ease-in-out"
            alt="Demo"
          />

          {/* Left button */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? demoImages.length - 1 : current - 1)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl"
          >
            <FaCircleChevronLeft />
          </button>

          {/* Right button */}
          <button
            onClick={() => setCurrent((current + 1) % demoImages.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl"
          >
            <FaCircleChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default RightSide;

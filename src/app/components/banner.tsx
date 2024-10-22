"use client"; // Ensure the component is rendered on the client side

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/table-accessories.jpg",
    "/buntings.jpg",
    "/baby-smile.jpg",
    "/cake.jpg",
    "/pinyata.jpg",
  ];

  // Autoplay functionality with a 3-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full">
      <div className="overflow-hidden w-full h-96 relative"> {/* Full width and smaller height */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={1920} // Full width for large screens
                height={400} // Adjust height for image to maintain aspect ratio
                className="object-cover w-full h-full" // Make the image full width and height
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
      >
        Next
      </button>
    </section>
  );
}

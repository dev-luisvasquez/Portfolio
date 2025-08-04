'use client';

import { useState } from 'react';
import Image from 'next/image';

const CarouselComponent = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const prevSlide = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-xl mx-auto my-2">
      <div className="relative">
        {/* Slides */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-80">
          {images.map((src, index) => {
            let position = '';
            if (index === activeIndex) {
              position = direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft';
            } else if (
              (direction === 'right' && index === (activeIndex === 0 ? images.length - 1 : activeIndex - 1)) ||
              (direction === 'left' && index === (activeIndex === images.length - 1 ? 0 : activeIndex + 1))
            ) {
              position = direction === 'right' ? 'animate-slideOutLeft' : 'animate-slideOutRight';
            } else {
              position = 'hidden';
            }
            return (
              <div
                key={index}
                className={`absolute w-full h-full top-0 left-0 ${position}`}
              >
                <Image
                  src={src}
                  className="block w-full h-full object-cover object-top"
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={600}
                />
              </div>
            );
          })}
        </div>

<style jsx>{`
@keyframes slideInRight {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes slideInLeft {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutLeft {
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
}
@keyframes slideOutRight {
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}
.animate-slideInRight {
  animation: slideInRight 0.7s forwards;
  z-index: 10;
}
.animate-slideInLeft {
  animation: slideInLeft 0.7s forwards;
  z-index: 10;
}
.animate-slideOutLeft {
  animation: slideOutLeft 0.7s forwards;
  z-index: 5;
}
.animate-slideOutRight {
  animation: slideOutRight 0.7s forwards;
  z-index: 5;
}
`}</style>

        {/* Botón anterior */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/50 group-hover:bg-black/80">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
        </button>

        {/* Botón siguiente */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/50 group-hover:bg-black/80">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;

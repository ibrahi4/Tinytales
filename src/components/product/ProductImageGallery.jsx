/* eslint-disable react/prop-types */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductImageGallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
        <p className="text-gray-400 text-sm sm:text-base">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full lg:max-w-[652px]">
      {/* Main Image Container */}
      <div className="relative bg-gradient-to-b from-gray-300 to-gray-100 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 group">
        <div className="relative w-full aspect-[3/4] sm:aspect-[2.5/3]">
          <Image
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 652px"
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on hover for desktop */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#C4A69D]/80 hover:bg-[#C4A69D] rounded-full flex items-center justify-center transition-all duration-200 shadow-lg sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Progress Indicator */}
        <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2">
          <div className="flex gap-1.5 sm:gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 sm:w-8 bg-white'
                    : 'w-3 sm:w-4 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
        {images.slice(0, window.innerWidth < 640 ? 4 : 5).map((image, index) => {
          const isLastVisible = (window.innerWidth < 640 && index === 3) || (window.innerWidth >= 640 && index === 4);
          const remainingCount = images.length - (window.innerWidth < 640 ? 4 : 5);
          
          return (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? 'ring-2 ring-[#C4A69D] ring-offset-1 sm:ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1 sm:hover:ring-offset-2'
              } ${isLastVisible && remainingCount > 0 ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              {isLastVisible && remainingCount > 0 ? (
                // "+X" Overlay for remaining images
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                  <span className="text-white text-lg sm:text-2xl font-bold">
                    +{remainingCount}
                  </span>
                </div>
              ) : (
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 25vw, 130px"
                  className="object-cover"
                   loading="eager"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
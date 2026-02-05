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
      <div className="w-full h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[652px]">
      {/* Main Image Container */}
      <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 group">
        <div className="relative h-[500px] w-full">
          <Image
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C4A69D]/80 hover:bg-[#C4A69D] rounded-full flex items-center justify-center transition-all duration-200 shadow-lg opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Progress Indicator */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <div className="flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-4 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-3">
        {images.slice(0, 5).map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
              index === currentIndex
                ? 'ring-2 ring-[#C4A69D] ring-offset-2'
                : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
            } ${index === 3 ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            {index === 3 ? (
              // "+2" Overlay for more images
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+2</span>
              </div>
            ) : (
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
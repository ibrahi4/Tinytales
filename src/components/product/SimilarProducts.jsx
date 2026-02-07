/* eslint-disable react/prop-types */
'use client';

import { useState,React } from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SimilarProducts({ products = [] }) {
  const [favorites, setFavorites] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const defaultProducts = [
    {
      id: 1,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: 'Dresses',
      price: 900,
      originalPrice: null,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product5.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: null,
    },
    {
      id: 2,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: 'Dresses',
      price: 900,
      originalPrice: 1300,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product6.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: 25,
    },
    {
      id: 3,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: 'Dresses',
      price: 900,
      originalPrice: null,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product8.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: null,
      isFavorited: true,
    },
    {
      id: 4,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: 'Dresses',
      price: 900,
      originalPrice: 1300,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product7.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: 25,
    },
    {
      id: 5,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: 'Dresses',
      price: 900,
      originalPrice: 1300,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product8.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: 25,
    },
    {
      id: 6,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello..",
      category: 'Dresses',
      price: 900,
      originalPrice: null,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product6.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: null,
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(displayProducts.length - 1, prev + 1));
  };

  return (
    <div className="w-full py-6 sm:py-8">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8 px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">
          Similar Items
        </h2>
        <div className="mt-2 h-1 w-12 bg-[#C4A69D] rounded-full" />
      </div>

      {/* Products Carousel */}
      <div className="relative">
        {/* Desktop View - 4 cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-5 px-4 lg:px-0">
          {displayProducts.slice(currentIndex, currentIndex + 4).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              isFavorite={favorites[product.id] || product.isFavorited}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>

        {/* Tablet View - 3 cards */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 px-4">
          {displayProducts.slice(currentIndex, currentIndex + 3).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              isFavorite={favorites[product.id] || product.isFavorited}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>

        {/* Mobile View - 2.5 cards */}
        <div className="md:hidden overflow-hidden">
          <div 
            className="flex gap-3 px-4 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 42}%)`,
            }}
          >
            {displayProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-[42%]"
              >
                <ProductCard 
                  product={product}
                  isFavorite={favorites[product.id] || product.isFavorited}
                  onToggleFavorite={() => toggleFavorite(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" strokeWidth={2} />
        </button>
        
        <span className="text-xs sm:text-sm text-gray-600 font-medium min-w-[80px] sm:min-w-[100px] text-center">
          <span className="hidden md:inline">
            {currentIndex + 1} - {Math.min(currentIndex + 4, displayProducts.length)} of {displayProducts.length}
          </span>
          <span className="md:hidden">
            {currentIndex + 1} / {displayProducts.length}
          </span>
        </span>
        
        <button
          onClick={handleNext}
          disabled={currentIndex >= displayProducts.length - 1}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C4A69D] hover:bg-[#B39588] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-sm"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full">
      <div className="border-[#f0e6e3] border rounded-xl sm:rounded-2xl">
        {/* Image Container */}
        <div className="relative w-full bg-white overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300">
          
          {/* Top Bar - Icons */}
          <div className="min-h-12 sm:min-h-15 px-2 sm:px-3 pt-2 sm:pt-3 flex items-start justify-between">
            {/* Discount */}
            <div className="flex-1">
              {product.discount && (
                <div className="bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg shadow-sm inline-block">
                  <span className="text-[10px] sm:text-xs font-semibold text-[#C4A69D]">
                    {product.discount}% OFF
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
              <button className="w-7 h-7 sm:w-9 sm:h-9 bg-white rounded-md sm:rounded-lg shadow-sm flex items-center justify-center hover:bg-gray-50 transition">
                <ShoppingBag className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-[#C4A69D]" strokeWidth={1.5} />
              </button>

              <button
                onClick={onToggleFavorite}
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-md sm:rounded-lg shadow-sm flex items-center justify-center transition ${
                  isFavorite ? 'bg-[#C4A69D]' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] ${
                    isFavorite ? 'text-white fill-white' : 'text-[#C4A69D]'
                  }`}
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative aspect-square w-[55%] sm:w-[60%] mx-auto pb-3 sm:pb-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 42vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 280px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div> 
      
      {/* Product Details */}
      <div className="p-2.5 sm:p-3 lg:p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <span className="text-[11px] sm:text-xs lg:text-sm font-medium text-gray-900 truncate mr-2">
            {product.category}
          </span>
          <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 fill-[#C4A69D] text-[#C4A69D]" strokeWidth={0} />
            <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-gray-900">{product.rating}</span>
            <span className="text-[10px] sm:text-xs lg:text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-[11px] sm:text-xs lg:text-sm font-normal text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-relaxed min-h-[28px] sm:min-h-[32px] lg:min-h-[40px]">
          {product.name}
        </h3>

        {/* Bottom Row: Price + Colors */}
        <div className="flex items-center justify-between gap-2">
          {/* Price */}
          <div className="flex items-baseline gap-1 sm:gap-1.5 flex-shrink-0">
            <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
              AED {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs lg:text-sm text-gray-400 line-through">
                AED {product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            {product.colors.slice(0, 2).map((color, idx) => (
              <div
                key={idx}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                aria-label={`Color option ${idx + 1}`}
              />
            ))}
            {product.colors.length > 2 && (
              <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900">
                +{product.colors.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-disable react/prop-types */
'use client';

import { useState,React } from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SimilarProducts({ products = [] }) {
  const [favorites, setFavorites] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // عدد الكاردات اللي تظهر
  
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
  const maxIndex = Math.max(0, displayProducts.length - itemsToShow);

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
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const visibleProducts = displayProducts.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="w-full py-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-[28px] font-bold text-gray-900 leading-tight">
          Similar Items
        </h2>
        <div className="mt-2 h-1 w-12 bg-[#C4A69D] rounded-full" />
      </div>

      {/* Products Carousel */}
      <div className="overflow-hidden mb-8">
        <div 
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(0px)` }}
        >
          {visibleProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              isFavorite={favorites[product.id] || product.isFavorited}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" strokeWidth={2} />
        </button>
        
        <span className="text-sm text-gray-600 font-medium">
          {currentIndex + 1} - {Math.min(currentIndex + itemsToShow, displayProducts.length)} of {displayProducts.length}
        </span>
        
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="w-12 h-12 rounded-full bg-[#C4A69D] hover:bg-[#B39588] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex-shrink-0 w-[280px]">
      <div className="border-[#f0e6e3] border rounded-2xl">
        {/* Image Container */}
        <div className="relative w-full bg-white overflow-hidden rounded-2xl transition-all duration-300">
          
          {/* Top Bar - Icons */}
          <div className="h-[20%] min-h-15 px-3 pt-3 flex items-start justify-between">
            {/* Discount */}
            <div className="flex-1">
              {product.discount && (
                <div className="bg-white px-3 py-1 rounded-lg shadow-sm inline-block">
                  <span className="text-xs font-semibold text-[#C4A69D]">
                    {product.discount}% OFF
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <button className="w-9 h-9 bg-white rounded-lg shadow-sm flex items-center justify-center hover:bg-gray-50 transition">
                <ShoppingBag className="w-[18px] h-[18px] text-[#C4A69D]" strokeWidth={1.5} />
              </button>

              <button
                onClick={onToggleFavorite}
                className={`w-9 h-9 rounded-lg shadow-sm flex items-center justify-center transition ${
                  isFavorite ? 'bg-[#C4A69D]' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <Heart
                  className={`w-[18px] h-[18px] ${
                    isFavorite ? 'text-white fill-white' : 'text-[#C4A69D]'
                  }`}
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative aspect-square w-[60%] mx-auto pb-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </div> 
      
      {/* Product Details */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-900">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#C4A69D] text-[#C4A69D]" strokeWidth={0} />
            <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-normal text-gray-900 mb-3 line-clamp-2 leading-relaxed min-h-[40px]">
          {product.name}
        </h3>

        {/* Bottom Row: Price + Colors */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              AED {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                AED {product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5">
            {product.colors.slice(0, 2).map((color, idx) => (
              <div
                key={idx}
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                aria-label={`Color option ${idx + 1}`}
              />
            ))}
            {product.colors.length > 2 && (
              <span className="text-sm font-semibold text-gray-900">
                +{product.colors.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
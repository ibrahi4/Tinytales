'use client';

import { useState,React } from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function SimilarProducts({ products = [] }) {
  const [favorites, setFavorites] = useState({});
  
  const defaultProducts = [
    {
      id: 1,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow..",
      category: 'Dresses',
      price: 900,
      originalPrice: null,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product1.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: null,
    },
    {
      id: 2,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow..",
      category: 'Dresses',
      price: 900,
      originalPrice: 1300,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product2.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: 25,
    },
    {
      id: 3,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow..",
      category: 'Dresses',
      price: 900,
      originalPrice: null,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product3.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: null,
      isFavorited: true,
    },
    {
      id: 4,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow..",
      category: 'Dresses',
      price: 900,
      originalPrice: 1300,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product4.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: 25,
    },
    {
      id: 5,
      name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow..",
      category: 'Dresses',
      price: 900,
      originalPrice: 1300,
      rating: 4.5,
      reviews: 2910,
      image: '/images/product5.png',
      colors: ['#C4A69D', '#1F2937', '#FFFFFF'],
      discount: 25,
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="w-full py-12">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-[32px] font-bold text-gray-900 leading-tight">
          Similar Items
        </h2>
        <div className="mt-2 h-1 w-16 bg-[#C4A69D] rounded-full" />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
        {displayProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            isFavorite={favorites[product.id] || product.isFavorited}
            onToggleFavorite={() => toggleFavorite(product.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3">
        <button
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
        </button>
        <button
          className="w-12 h-12 rounded-full bg-[#C4A69D] hover:bg-[#B39588] flex items-center justify-center transition-all duration-200 shadow-sm"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <Card 
      variant="default" 
      padding="none"
      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100"
    >
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-1.5 left-1 w-22 h-8 z-20 bg-white px-4 py-2 rounded-xl shadow-md">
          <span className="text-xs font-bold text-[#B39588] justify-center flex items-center ">
            {product.discount}% OFF
          </span>
        </div>
      )}

      {/* Action Buttons - Top Right */}
      <div className="absolute top-1.5 right-1 z-20 flex gap-2">
        <button 
          className="w-9 h-9 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-5 h-5 text-[#B39588]" strokeWidth={2} />
        </button>
        
        <button 
          onClick={onToggleFavorite}
          className={`w-9 h-9 rounded-xl shadow-md flex items-center justify-center transition-all duration-200 ${
            isFavorite 
              ? 'bg-[#C4A69D] hover:bg-[#B39588]' 
              : 'bg-white hover:bg-gray-50'
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'text-white fill-white' : 'text-[#B39588]'}`}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-[3/3] bg-white overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-[#C4A69D] text-[#C4A69D]" strokeWidth={0} />
            <span className="text-sm font-semibold text-black">{product.rating}</span>
            <span className="text-sm text-black">({product.reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-base font-semibold text-black mb-4 line-clamp-2 leading-snug min-h-[48px]">
          {product.name}
        </h3>

        {/* Price & Colors */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through leading-none">
                AED {product.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-black">
              AED {product.price}
            </span>
          </div>

          {/* Color Swatches */}
          <div className="flex items-center gap-2">
            {product.colors.slice(0, 3).map((color, idx) => (
              <button
                key={idx}
                className="w-6 h-6 rounded-full border-2 hover:scale-110 transition-transform duration-200 shadow-sm"
                style={{ backgroundColor: color }}
                aria-label={`Color option ${idx + 1}`}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-sm font-semibold text-gray-400">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
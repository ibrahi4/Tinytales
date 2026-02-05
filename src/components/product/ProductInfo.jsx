'use client';
import React from 'react';
import { useState } from 'react';
import { Heart, ShoppingBag, Plus, Minus } from 'lucide-react';

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState('Cotton');
  const [selectedSize, setSelectedSize] = useState('2Xl');
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [isFavorite, setIsFavorite] = useState(false);

  const colors = [
    { name: 'Red', value: '#DC2626', hex: '#DC2626' },
    { name: 'Blue', value: '#93C5FD', hex: '#93C5FD' },
    { name: 'Beige', value: '#A8936F', hex: '#A8936F' },
    { name: 'Light Blue', value: '#93B7DC', hex: '#93B7DC' },
    { name: 'Gray', value: '#6B7280', hex: '#6B7280' },
  ];

  const types = ['Cotton', 'Polyester', 'Blend'];
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice = (product?.price || 300) * quantity;

  return (
    <div className="flex-1 max-w-[680px]">
      {/* Category Badge */}
      <div className="inline-block mb-4">
        <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
          T-Shirt
        </span>
      </div>

      {/* Product Title */}
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight pr-4">
          {product?.title || 'J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue'}
        </h1>
        
        {/* Action Icons */}
        <div className="flex gap-2">
          <button className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              isFavorite
                ? 'bg-[#C4A69D] text-white'
                : 'bg-gray-700 text-white hover:bg-gray-800'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-4xl font-bold text-gray-900">
          ${product?.price || '300.00'}
        </span>
        <span className="text-xl text-gray-400 line-through">
          ${product?.originalPrice || '360.00'}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-6">This price is exclusive of taxes.</p>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8">
        {product?.description || 
          'Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy'}
      </p>

      {/* Type Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Type
        </label>
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C4A69D] focus:border-transparent text-gray-900"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Size Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Size
        </label>
        <div className="relative">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C4A69D] focus:border-transparent text-gray-900"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Color Selector */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Colors
        </label>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`relative w-12 h-12 rounded-full transition-all ${
                selectedColor === color.name
                  ? 'ring-2 ring-offset-2 ring-gray-900'
                  : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.name}`}
            >
              {selectedColor === color.name && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
        {selectedColor && (
          <p className="text-sm text-gray-600 mt-2">{selectedColor}</p>
        )}
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity{' '}
            <span className="text-gray-400 font-normal">
              (${(product?.price || 300).toFixed(2)} for Piece)
            </span>
          </label>
          <div className="flex items-center gap-4 p-1 bg-white border border-gray-200 rounded-lg">
            <button
              onClick={() => handleQuantityChange('decrement')}
              disabled={quantity <= 1}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="flex-1 text-center text-2xl font-semibold text-gray-900">
              {quantity.toString().padStart(2, '0')}
            </span>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
            <div className="h-10 w-px bg-gray-200" />
            <div className="px-4 text-xl font-bold text-gray-900">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>

        <button className="px-8 py-6 bg-[#C4A69D] hover:bg-[#B39588] text-white rounded-lg flex items-center gap-3 transition-colors shadow-lg hover:shadow-xl mt-6">
          <ShoppingBag className="w-5 h-5" />
          <span className="font-semibold">Add To Cart</span>
        </button>
      </div>
    </div>
  );
}
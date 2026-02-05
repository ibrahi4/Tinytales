/* eslint-disable react/prop-types */
'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/shared/Header';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RatingSection from '@/components/product/RatingSection';
import SimilarProducts from '@/components/product/SimilarProducts';
import React from 'react';
export default function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
const productImages = [
  '/images/person1.png',
  '/images/person2.png', // Add full paths from /public/images
  '/images/person3.png',
  '/images/person4.png',
  '/images/person5.png',
  // ...
];
  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      try {
        // Simulated product data
        const productData = {
          id: params?.id || '1',
          title: 'J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue',
          price: 300.0,
          originalPrice: 360.0,
          description:
            'Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy',
          category: 'T-Shirt',
          images: [
            '/images/product1.png',
            '/images/product2.png',
            '/images/product3.png',
            '/images/product4.png',
          ],
          rating: 4.5,
          totalReviews: 3000,
          reviews: [
            {
              id: 1,
              author: 'Alex Daewn',
              rating: 4,
              date: '4 months ago',
              comment:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
            },
            {
              id: 2,
              author: 'Alex Daewn',
              rating: 4,
              date: '4 months ago',
              comment:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
            },
            {
              id: 3,
              author: 'Alex Daewn',
              rating: 4,
              date: '4 months ago',
              comment:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
            },
            {
              id: 4,
              author: 'Alex Daewn',
              rating: 4,
              date: '4 months ago',
              comment:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
            },
          ],
        };

        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params?.id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C4A69D]"></div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600 text-lg">Product not found</p>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Page Title Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 text-center mb-8 tracking-tight">
            Product Details
          </h1>
          
          {/* Breadcrumb */}
          <nav className="bg-gray-50 rounded-2xl px-6 py-4 max-w-fit mx-auto" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <a href="/" className="text-gray-900 hover:text-[#C4A69D] font-semibold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
              </li>
              <li>
                <a href="/category" className="text-gray-900 hover:text-[#C4A69D] font-semibold transition-colors">
                  Our Category
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
              </li>
              <li>
                <span className="text-gray-400 font-medium">Product Details</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          <ProductImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>

        {/* Rating & Reviews Section */}
        <div className="mb-20">
          <RatingSection reviews={product.reviews} />
        </div>

        {/* Similar Products Section */}
        <div>
          <SimilarProducts />
        </div>
      </div>
    </div>
  );
}
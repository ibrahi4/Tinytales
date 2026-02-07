'use client';

import { useEffect, useState,React } from 'react';
import { useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/shared/Header';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RatingSection from '@/components/product/RatingSection';
import SimilarProducts from '@/components/product/SimilarProducts';
import Footer from '@/components/shared/Footer';

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const productData = {
          id,
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
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C4A69D]"></div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-white">
          <p className="text-gray-600 text-lg">Product not found</p>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative h-32 sm:h-36 md:h-40 lg:h-48 bg-[#F5F5F5] border-gray-200 overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/background.jpg')",
            backgroundPosition: '50% 83%'
          }}
        />
        <div className="absolute inset-0 bg-white/90" />
        
        {/* Title */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            {/* Watermark */}
            <h1 className="watermark-title">
              Product Details
            </h1>

            {/* Main Title */}
            <h1 className="relative z-10 main-title">
              Product Details
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
<div className="bg-white py-4 md:py-5">
  <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-30 xl:px-15">
    <nav
      className="inline-flex bg-gray-100 rounded-lg sm:rounded-xl
                 px-3 sm:px-4 md:px-6
                 py-2 sm:py-3 md:py-4
                 w-full overflow-x-auto"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap">
        <li>
          <a href="/" className="font-semibold text-gray-900 hover:text-[#C4A69D]">
            Home
          </a>
        </li>

        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />

        <li>
          <a href="/category" className="font-semibold text-gray-900 hover:text-[#C4A69D]">
            Our Category
          </a>
        </li>

        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />

        <li>
          <span className="text-gray-400 font-medium">Product Details</span>
        </li>
      </ol>
    </nav>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <ProductImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>

        {/* Rating & Reviews Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <RatingSection reviews={product.reviews} />
        </div>

        {/* Similar Products Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <SimilarProducts />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
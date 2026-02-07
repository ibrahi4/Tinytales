
'use client';

import { useEffect, useState,React} from 'react';
import { useParams } from 'next/navigation'
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
        // mock data (مكان API لاحقًا)
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
              id: 3,
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
  }, [id]); // ✅ depe

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
      <div className="relative h-40 md:h-45 bg-[#F5F5F5] border-b border-gray-200 overflow-hidden">
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
<div className="relative flex items-center justify-center px-4 py-16 sm:py-13">
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
      <div className="bg-white py-5 pl-15 pr-15">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="inline-flex bg-gray-100 rounded-xl px-5 md:px-6 py-3 md:py-4 w-103 md:w-255 sm:w-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm md:text-base">
              <li>
                <a 
                  href="/" 
                  className="text-gray-900 hover:text-[#C4A69D] font-semibold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400" strokeWidth={2} />
              </li>
              <li>
                <a 
                  href="/category" 
                  className="text-gray-900 hover:text-[#C4A69D] font-semibold transition-colors"
                >
                  Our Category
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400" strokeWidth={2} />
              </li>
              <li>
                <span className="text-gray-400 font-medium">Product Details</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 ">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20 pl-15 pr-15">
          <ProductImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>

        {/* Rating & Reviews Section */}
        <div className="mb-12 md:mb-20 pr-15 pl-15">
          <RatingSection reviews={product.reviews} />
        </div>

        {/* Similar Products Section */}
         <div className="mb-12 md:mb-20 pr-15 pl-15">
          <SimilarProducts />
        </div>
        
      </div>
       <div className="prose prose-invert">
          <Footer />
        </div>
    </div>
  );
}
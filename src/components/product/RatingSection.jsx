'use client';

import { Star, MessageCircle } from 'lucide-react';
import React from 'react'
export default function RatingSection({ reviews }) {
  const ratingData = [
    { stars: 5, percentage: 67, count: 2010 },
    { stars: 4, percentage: 15, count: 450 },
    { stars: 3, percentage: 6, count: 180 },
    { stars: 2, percentage: 3, count: 90 },
    { stars: 1, percentage: 9, count: 270 },
  ];

  const totalReviews = 3000;
  const averageRating = 4.5;

  const renderStars = (count, filled = true) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < count
            ? filled
              ? 'fill-[#C4A69D] text-[#C4A69D]'
              : 'fill-gray-300 text-gray-300'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full bg-white">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Rating & Reviews</h2>
        <div className="h-1 w-20 bg-[#C4A69D] mt-2 rounded-full" />
      </div>

      {/* Rating Overview */}
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        {/* Average Rating */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-8xl font-bold text-gray-900 leading-none mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="text-gray-400 text-2xl mb-1">/5</div>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 max-w-2xl">
          {ratingData.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-4 mb-4 last:mb-0">
              {/* Star Icon */}
              <div className="flex items-center gap-1 w-12">
                <Star className="w-5 h-5 fill-[#C4A69D] text-[#C4A69D]" />
                <span className="text-sm font-medium text-gray-700">{rating.stars}</span>
              </div>

              {/* Progress Bar */}
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C4A69D] rounded-full transition-all duration-500"
                  style={{ width: `${rating.percentage}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="w-16 text-right">
                <span className="text-sm font-medium text-gray-600">
                  %{rating.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Reviews */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">
            {(totalReviews / 1000).toFixed(1)}K
          </div>
          <div className="text-gray-600 text-sm font-medium">Total Reviews</div>
          <button className="mt-6 px-6 py-3 bg-[#C4A69D] hover:bg-[#B39588] text-white rounded-lg flex items-center gap-2 transition-colors shadow-md">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Add Comment</span>
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {(reviews || [
          {
            id: 1,
            author: 'Alex Daewn',
            rating: 4,
            date: '4 months ago',
            comment:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
          },
 
        ]).map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-gray-900 text-lg">{review.author}</h4>
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center flex justify-center">
 <button className="mt-6 px-6 py-3 shadow-xs font-semibold bg-[#f5f5f5] hover:bg-[#dacfcc] text-[#ab8270] rounded-lg flex items-center gap-2 transition-colors">
          View More Comments
        </button>
      </div>
    </div>
  );
}
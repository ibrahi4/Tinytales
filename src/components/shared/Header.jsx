'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Bell, Heart, ChevronDown } from 'lucide-react';
import React from 'react'
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[140px] h-12">
              <Image
                src="/logo.svg"
                alt="Tinytales"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <path
                  d="M3 10L10 3L17 10V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Home</span>
            </Link>

            <Link
              href="/category"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <rect
                  x="3"
                  y="3"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="11"
                  y="3"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="3"
                  y="11"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <rect
                  x="11"
                  y="11"
                  width="6"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Our Category</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 13V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="7" r="0.5" fill="currentColor" />
              </svg>
              <span>About Us</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <rect
                  x="3"
                  y="5"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 8L10 12L17 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Contact Us</span>
            </Link>

            <Link
              href="/faqs"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-400"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 13.5V13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 10C10 9.5 10.5 9 11 8.5C11.5 8 12 7.5 12 6.5C12 5.67 11.33 5 10.5 5C9.67 5 9 5.67 9 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>FAQs</span>
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Shopping Bag */}
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <ShoppingBag className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            </button>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            </button>

            {/* Wishlist/Favorites */}
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Heart className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            </button>

            {/* Language Selector */}
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-gray-700 font-medium">EN</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {/* User Account */}
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-700"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6 21V19C6 17.3431 7.34315 16 9 16H15C16.6569 16 18 17.3431 18 19V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
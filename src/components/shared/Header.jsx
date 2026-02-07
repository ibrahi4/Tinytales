'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Bell, Heart, ChevronDown } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLocale } from '@/providers/LocaleProvider'; // Import to use t
import React from 'react';
export default function Header() {
  const { t } = useLocale(); // Get t function for translation

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-360 mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-32.5 h-12.5">
              <Image
                src="/logo.svg"
                alt="Tinytales"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu - Responsive: hidden on mobile, flex on lg */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <Link
              href="/"
              className="group flex items-center gap-2 text-[15px] text-[#9CA3AF] hover:text-gray-900 transition-colors duration-200"
            >
              <Image
                src="/home.svg"
                alt={t('header.home')}
                width={20}
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span>{t('header.home')}</span>
            </Link>

            <Link
              href="/category"
              className="group flex items-center gap-2 text-[15px] text-[#9CA3AF] hover:text-gray-900 transition-colors duration-200"
            >
              <Image
                src="/category.svg"
                alt={t('header.ourCategory')}
                width={20}
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span>{t('header.ourCategory')}</span>
            </Link>

            <Link
              href="/about"
              className="group flex items-center gap-2 text-[15px] text-[#9CA3AF] hover:text-gray-900 transition-colors duration-200"
            >
              <Image
                src="/aboutus.svg"
                alt={t('header.aboutUs')}
                width={20}
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span>{t('header.aboutUs')}</span>
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 text-[15px] text-[#9CA3AF] hover:text-gray-900 transition-colors duration-200"
            >
              <Image
                src="/contactus.svg"
                alt={t('header.contactUs')}
                width={20}
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span>{t('header.contactUs')}</span>
            </Link>

            <Link
              href="/faqs"
              className="group flex items-center gap-2 text-[15px] text-[#9CA3AF] hover:text-gray-900 transition-colors duration-200"
            >
              <Image
                src="/FAQs.svg"
                alt={t('header.faqs')}
                width={20}
                height={20}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span>{t('header.faqs')}</span>
            </Link>
          </nav>

          {/* Right Side Icons - Responsive flex */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Shopping Bag */}
            <button 
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
            </button>

            {/* Notifications */}
            <button 
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
            </button>

            {/* Wishlist/Favorites */}
            <button 
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
            </button>

            {/* Language Selector */}
            <LanguageSwitcher />

            {/* User Account */}
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-gray-900"
              >
                <circle
                  cx="10"
                  cy="7"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 17V16C5 14.3431 6.34315 13 8 13H12C13.6569 13 15 14.3431 15 16V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <ChevronDown className="w-4 h-4 text-gray-900" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
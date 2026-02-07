'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react';
import { useState,React } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  // Social Media Links Data
  const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://wa.me/', icon: MessageCircle, label: 'WhatsApp' },
    { href: 'https://t.me/', icon: Send, label: 'Telegram' },
  ];

  return (
    <footer className="relative w-full lg:h-80 bg-[#3A3A3A] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footerbackground.jpg"
          alt="Footer background"
          fill
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#000000]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full lg:flex lg:items-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-0">
          
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-8">
            {/* Brand Section */}
            <div className="space-y-4 text-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/watermark.svg"
                  alt="TinyTales Logo"
                  width={120}
                  height={50}
                  className="h-auto w-auto mx-auto"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto px-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              </p>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-bold">Contact Us</h3>
              <div className="flex flex-col space-y-3">
                <Link href="tel:+8701928491" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+87 01928491</span>
                </Link>
                <Link href="mailto:Named@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Named@gmail.com</span>
                </Link>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">381, cairo, egypt</span>
                </div>
              </div>
            </div>

            {/* Let Us Help - Mobile */}
            <div className="space-y-3">
              <h3 className="text-white text-lg font-bold">Let Us Help</h3>
              <nav className="flex flex-col space-y-2.5">
                <Link href="/account" className="text-gray-300 hover:text-white transition-colors text-sm">
                  My Account
                </Link>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Categories
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </nav>
            </div>

            {/* Send Email */}
            <div className="space-y-3">
              <h3 className="text-white text-lg font-bold">Send Email</h3>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full h-12 px-4 pr-24 rounded-xl bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C4A69D] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 h-[40px] px-6 bg-[#C4A69D] hover:bg-[#B39588] text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Follow Us */}
            <div className="space-y-3">
              <h3 className="text-white text-lg font-bold">Follow Us</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                      aria-label={social.label}
                    >
                      <IconComponent 
                        className="w-6 h-6" 
                         
                        
                        strokeWidth={1.5}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-10">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/watermark.svg"
                  alt="TinyTales Logo"
                  width={100}
                  height={45}
                  className="h-auto w-auto"
                />
              </Link>
              <p className="text-gray-300 text-[13px] leading-relaxed max-w-[240px]">
                Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae ipsam in eos qui consequatur ab .Soluta dolor quae ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae
              </p>
            </div>

            {/* Let Us Help */}
            <div className="space-y-4">
              <h3 className="text-white text-[18px] font-bold">Let Us Help</h3>
              <nav className="flex flex-col space-y-2.5">
                <Link href="/account" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  My Account
                </Link>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  FAQs
                </Link>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  Categories
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  All Products
                </Link>
              </nav>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h3 className="text-white text-[18px] font-bold">Policies</h3>
              <nav className="flex flex-col space-y-2.5">
                <Link href="/refund-policy" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  Refund Policy
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  About Us
                </Link>
                <Link href="/cancellation-policy" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  Cancellation Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  Terms and Conditions
                </Link>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-[14px]">
                  Privacy Policy
                </Link>
              </nav>
            </div>

            {/* Send Email & Follow Us */}
            <div className="space-y-5">
              {/* Send Email */}
              <div className="space-y-3">
                <h3 className="text-white text-[18px] font-bold">Send Email</h3>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full h-12 px-4 pr-24 rounded-xl bg-white text-gray-900 text-[13px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C4A69D] transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 h-[40px] px-6 bg-[#C4A69D] hover:bg-[#B39588] text-white text-[14px] font-semibold rounded-lg transition-all duration-200"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Follow Us */}
              <div className="space-y-3">
                <h3 className="text-white text-[18px] font-bold">Follow Us</h3>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label={social.label}
                      >
                        <IconComponent 
                          className="w-6 h-6 text-amber-50 font-bold" 
                          stroke="white" 
                          strokeWidth={1.5}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
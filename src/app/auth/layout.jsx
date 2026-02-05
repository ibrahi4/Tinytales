/**
 * Auth Layout
 * Shared layout for authentication pages (login, register, verify)
 */

'use client';
import React from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                TinyTales
              </h1>
            </div>
          </Link>
          <p className="text-gray-600 text-sm">
            Welcome to TinyTales Authentication
          </p>
        </div>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 TinyTales. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
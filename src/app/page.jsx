/**
 * Home Page
 * Landing page with authentication options
 */

'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/utils/constants';
import { isAuthenticated } from '@/lib/utils/storage';

export default function HomePage() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    if (isAuthenticated()) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
    

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
              ✨ Welcome to TinyTales
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Where Stories Come
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              To Life
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of storytellers and readers in our magical community.
            Create your account today and start your journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => router.push(ROUTES.REGISTER)}
              className="min-w-[200px]"
            >
              Create Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push(ROUTES.LOGIN)}
              className="min-w-[200px]"
            >
              Sign In
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
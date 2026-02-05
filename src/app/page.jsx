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
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              TinyTales
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {isAuth ? (
              <Button onClick={() => router.push(ROUTES.DASHBOARD)}>
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => router.push(ROUTES.LOGIN)}
                >
                  Sign In
                </Button>
                <Button onClick={() => router.push(ROUTES.REGISTER)}>
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

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

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                Your data is protected with industry-standard security measures
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Email Verification
              </h3>
              <p className="text-gray-600">
                Quick and easy email verification process to secure your account
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Started Fast
              </h3>
              <p className="text-gray-600">
                Simple registration process to get you started in minutes
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>© 2025 TinyTales. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
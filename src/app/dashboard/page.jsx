'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { getUser } from '@/lib/utils/storage';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { ROUTES } from '@/lib/utils/constants';
import { User, Mail, Phone, ShoppingBag, ArrowRight, LogOut } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { logout, loading: authLoading } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = getUser();
    if (!userData) {
      router.push(ROUTES.LOGIN);
      return;
    }
    setUser(userData);
    setLoading(false);
  }, [router]);

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return <LoadingSpinner.FullPage message="Loading your dashboard..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] via-[#FFF9F5] to-[#FCF5F0] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              My Account
            </h1>
            <p className="text-gray-600">Manage your profile and preferences</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            loading={authLoading}
            className="flex items-center gap-2 border-gray-300 hover:border-[#C4A69D] hover:text-[#C4A69D] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* User Profile Card */}
          <div className="lg:col-span-2">
            <Card variant="elevated" className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Card.Content className="p-6 sm:p-8">
                
                {/* User Avatar & Welcome */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#C4A69D] to-[#D4B5A8] flex items-center justify-center shadow-lg">
                      {user?.image ? (
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-4xl sm:text-5xl font-bold">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    {/* Active Badge */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>

                  {/* Welcome Text */}
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Welcome back, {user?.name?.split(' ')[0]}! 👋
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Great to see you again. Here's your account overview.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Account Active
                    </div>
                  </div>
                </div>

                {/* Account Details */}
                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
                  
                  {/* Full Name */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <User className="w-5 h-5 text-[#C4A69D]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Full Name</p>
                      <p className="font-semibold text-gray-900">{user?.name}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Mail className="w-5 h-5 text-[#C4A69D]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Email Address</p>
                      <p className="font-semibold text-gray-900 break-all">{user?.email}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Phone className="w-5 h-5 text-[#C4A69D]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                      <p className="font-semibold text-gray-900">
                        +{user?.mobile_country_code} {user?.mobile}
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>

          {/* Quick Action Card */}
          <div className="lg:col-span-1">
            <Card variant="elevated" className="bg-gradient-to-br from-[#C4A69D] to-[#B39588] border-0 shadow-lg h-full">
              <Card.Content className="p-6 sm:p-8 flex flex-col justify-between h-full">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <ShoppingBag className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Explore Products
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Discover our amazing collection of products curated just for you
                  </p>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/product/1"
                  className="group flex items-center justify-between w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">100+</p>
                    <p className="text-white/80 text-xs">Products</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">24/7</p>
                    <p className="text-white/80 text-xs">Support</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>

        {/* Account Type Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <div className="w-2 h-2 bg-[#C4A69D] rounded-full"></div>
            <span className="text-sm text-gray-700">
              Account Type: <span className="font-semibold capitalize">{user?.type || 'Client'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
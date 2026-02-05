/**
 * Dashboard Page
 * Protected dashboard page shown after successful login
 */

'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { getUser } from '@/lib/utils/storage';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { ROUTES } from '@/lib/utils/constants';

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              TinyTales
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            loading={authLoading}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="lg:col-span-2">
            <Card variant="elevated" padding="lg">
              <div className="text-center py-12">
                {/* User Avatar */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mb-6 shadow-lg">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-4xl font-bold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Welcome Message */}
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Welcome, {user?.name}! 🎉
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                You've successfully logged in to your TinyTales account!
                </p>

                {/* Success Badge */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Account Verified</span>
                </div>
              </div>
            </Card>
          </div>

          {/* User Info Card */}
          <div className="lg:col-span-1">
            <Card variant="elevated" padding="lg">
              <Card.Header>
                <Card.Title className="text-xl">Account Details</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="font-medium text-gray-900">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-medium text-gray-900">{user?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="font-medium text-gray-900">
                      +{user?.mobile_country_code} {user?.mobile}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Type</p>
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium capitalize">
                      {user?.type || 'Client'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6">
          <Card variant="elevated" padding="lg">
            <Card.Header>
              <Card.Title className="text-xl">Quick Actions</Card.Title>
              <Card.Description>
                What would you like to do today?
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all text-center group">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-pink-500">
                    Browse Stories
                  </h3>
                  <p className="text-sm text-gray-600">
                    Explore our collection
                  </p>
                </button>
                <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all text-center group">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-pink-500">
                    Settings
                  </h3>
                  <p className="text-sm text-gray-600">
                    Manage your account
                  </p>
                </button>
                <button className="p-6 border-2 border-gray-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all text-center group">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-pink-500">
                    Support
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get help anytime
                  </p>
                </button>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}
/**
 * LoginForm Component
 * Handles user login with validation
 */

'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { validateLogin } from '@/lib/utils/validators';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Card from '@/components/ui/Card';
import ErrorMessage from '@/components/shared/ErrorMessage';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const { login, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Validate form
    const validation = validateLogin(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    try {
      await login(formData);
      // useAuth hook handles redirect automatically
    } catch (error) {
      setApiError(error.message);
      if (error.errors) {
        setErrors(error.errors);
      }
    }
  };

  return (
    <Card variant="elevated">
      <Card.Header>
        <Card.Title>Welcome Back</Card.Title>
        <Card.Description>
          Sign in to your TinyTales account
        </Card.Description>
      </Card.Header>

      <Card.Content>
        {apiError && (
          <ErrorMessage message={apiError} className="mb-4" />
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" required>
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              disabled={loading}
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                disabled={loading}
                className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 focus:ring-offset-0 transition-colors cursor-pointer disabled:opacity-50"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700 cursor-pointer select-none"
              >
                Remember me
              </label>
            </div>

            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
          >
            Sign In
          </Button>
        </form>
      </Card.Content>

      <Card.Footer>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link
            href="/auth/register"
            className="font-medium text-pink-600 hover:text-pink-700 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
}
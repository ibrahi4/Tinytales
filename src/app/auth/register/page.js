/**
 * Register Page
 * User registration page
 */

'use client';
import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import RegisterForm from '@/components/auth/RegisterForm';
import { ROUTES } from '@/lib/utils/constants';

export default function RegisterPage() {
  return (
    <Card variant="elevated" padding="lg">
      <Card.Header>
        <Card.Title>Create Your Account</Card.Title>
        <Card.Description>
          Join TinyTales today and start your journey
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <RegisterForm />
      </Card.Content>

      <Card.Footer>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href={ROUTES.LOGIN}
              className="font-medium text-pink-500 hover:text-pink-600 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </Card.Footer>
    </Card>
  );
}
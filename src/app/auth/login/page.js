/**
 * Login Page
 * User login page
 */

'use client';
import React from 'react';
import Card from '@/components/ui/Card';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <Card variant="elevated" padding="lg">
      <Card.Header>
        <Card.Title>Welcome Back</Card.Title>
        <Card.Description>
          Sign in to your TinyTales account
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <LoginForm />
      </Card.Content>
    </Card>
  );
}
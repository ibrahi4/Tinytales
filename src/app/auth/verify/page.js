/**
 * Verify Page
 * Email verification page
 */

'use client';
import React from 'react';
import Card from '@/components/ui/Card';
import VerifyForm from '@/components/auth/VerifyForm';

export default function VerifyPage() {
  return (
    <Card variant="elevated" padding="lg">
      <Card.Content>
        <VerifyForm />
      </Card.Content>
    </Card>
  );
}
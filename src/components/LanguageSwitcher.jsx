'use client';

import { useLocale } from '@/providers/LocaleProvider';
import React from 'react';
export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale();

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value)}
      className="border-none text-sm text-gray-600 bg-transparent cursor-pointer focus:outline-none"
    >
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
}
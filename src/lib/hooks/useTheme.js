'use client';
import { useEffect, useState } from 'react';
import { useTheme as NextTheme } from 'next-themes';

export const useTheme = () => {
  const { theme, setTheme } = NextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme, mounted };
};

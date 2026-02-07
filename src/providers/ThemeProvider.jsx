'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState,React } from 'react';

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      storageKey="tinytales-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
import '../styles/globals.css'; // Import globals.css
import { LocaleProvider } from '@/providers/LocaleProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import React from 'react';
export const metadata = {
  title: 'TinyTales - Authentication',
  description: 'TinyTales authentication system with Next.js',
  keywords: ['tinytales', 'authentication', 'nextjs', 'react'],
  authors: [{ name: 'TinyTales Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
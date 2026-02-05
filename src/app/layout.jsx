/**
 * Root Layout
 * Main layout for the entire application
 */

import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
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

function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;

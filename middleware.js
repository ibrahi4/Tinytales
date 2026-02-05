// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('tinytales_token');
  const { pathname } = req.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Redirect authenticated users away from auth pages
  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};
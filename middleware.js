// middleware.js

import { NextResponse } from 'next/server';

const TOKEN_NAME = 'tinytales_token';

// Routes that need login
const PROTECTED = ['/dashboard', '/product', '/profile'];

// Auth pages (login, register)
const AUTH_PAGES = ['/auth/login', '/auth/register'];

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(TOKEN_NAME)?.value;
  const isLoggedIn = !!token;

  // Check if it's a protected route
  const isProtected = PROTECTED.some(route => pathname.startsWith(route));
  
  // Check if it's an auth page
  const isAuthPage = AUTH_PAGES.some(route => pathname.startsWith(route));

  // ============================================
  // 1. Protected routes → redirect to login if not logged in
  // ============================================
  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL('/auth/login', req.url);
    loginUrl.searchParams.set('redirect', pathname);
    
    console.log(`🔒 Protected route: ${pathname} - Redirecting to login`);
    return NextResponse.redirect(loginUrl);
  }

  // ============================================
  // 2. Auth pages → redirect to dashboard if already logged in
  // ============================================
  if (isAuthPage && isLoggedIn) {
    const redirect = req.nextUrl.searchParams.get('redirect') || '/dashboard';
    
    console.log(`✅ Already logged in - Redirecting to: ${redirect}`);
    return NextResponse.redirect(new URL(redirect, req.url));
  }

  // ============================================
  // 3. Allow everything else
  // ============================================
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|static|favicon.ico|.*\\..*).*)',
  ],
};
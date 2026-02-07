/**
 * Cookie & Storage Utilities
 * Secure storage management for auth data
 */

import Cookies from 'js-cookie';

const TOKEN_KEY = 'tinytales_token';
const USER_KEY = 'tinytales_user';

// Cookie options
const COOKIE_OPTIONS = {
  expires: 7, // 7 days
  secure: process.env.NODE_ENV === 'production', // HTTPS only in production
  sameSite: 'strict', // CSRF protection
  path: '/',
};

// ===== TOKEN (Stored in Cookies) =====
export function saveToken(token) {
  if (typeof window !== 'undefined') {
    Cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS);
  }
}

export function getToken() {
  if (typeof window === 'undefined') return null;
  return Cookies.get(TOKEN_KEY) || null;
}

// ===== USER (Stored in localStorage for easy access) =====
export function saveUser(user) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

export function getUser() {
  if (typeof window === 'undefined') return null;
  
  try {
    const user = localStorage.getItem(USER_KEY);
    if (!user || user === 'undefined' || user === 'null') {
      return null;
    }
    return JSON.parse(user);
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
}

// ===== AUTH =====
export function isAuthenticated() {
  return !!getToken();
}

export function clearAuth() {
  if (typeof window !== 'undefined') {
    // Clear cookie
    Cookies.remove(TOKEN_KEY, { path: '/' });
    
    // Clear localStorage
    localStorage.removeItem(USER_KEY);
  }
}
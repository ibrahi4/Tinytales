/**
 * Local Storage Utilities
 * Simple storage management for auth data
 */

const TOKEN_KEY = 'tinytales_token';
const USER_KEY = 'tinytales_user';

// ===== TOKEN =====
export function saveToken(token) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

// ===== USER =====
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
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}
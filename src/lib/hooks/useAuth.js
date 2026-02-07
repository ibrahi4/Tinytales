// src/lib/hooks/useAuth.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import authApi from '@/lib/api/auth';
import { saveToken, saveUser, clearAuth } from '@/lib/utils/storage';
import { ROUTES } from '@/lib/utils/constants';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // LOGIN
  const login = async (data) => {
    setLoading(true);
    try {
      const res = await authApi.login(data);

      // Save to cookies & localStorage
      saveToken(res.data.token);
      saveUser(res.data);

      // Check if there's a redirect parameter
      const urlParams = new URLSearchParams(window.location.search);
      const redirect = urlParams.get('redirect') || ROUTES.DASHBOARD;
      
      router.push(redirect);
      return { success: true };
    } catch (error) {
      const apiError = handleError(error);
      throw new Error(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const register = async (data) => {
    setLoading(true);
    try {
      const res = await authApi.register(data);

      saveToken(res.data.token);
      saveUser(res.data);
      
      const email = res.data?.email || data.email;
      router.push(`${ROUTES.VERIFY}?email=${encodeURIComponent(email)}`);

      return { success: true };
    } catch (error) {
      return handleError(error);
    } finally {
      setLoading(false);
    }
  };

  // VERIFY ACCOUNT
  const verify = async (code) => {
    setLoading(true);
    try {
      const res = await authApi.verify({ code });

      if (res.data) {
        saveToken(res.data.token);
        saveUser(res.data);
      }

      router.push(ROUTES.DASHBOARD);
      return { success: true };
    } catch (error) {
      return handleError(error);
    } finally {
      setLoading(false);
    }
  };

  // RESEND CODE
  const resendCode = async () => {
    try {
      await authApi.resendCode();
      return { success: true };
    } catch (error) {
      return handleError(error);
    }
  };

  // LOGOUT
  const logout = async () => {
    setLoading(true);
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAuth(); // Removes cookie & localStorage
      router.push(ROUTES.LOGIN);
      setLoading(false);
    }
  };

  return {
    login,
    register,
    verify,
    resendCode,
    logout,
    loading,
  };
}

// Central error handler
function handleError(error) {
  if (error?.response?.data) {
    return {
      success: false,
      message: error.response.data.message || 'Something went wrong',
      errors: error.response.data.errors || null,
    };
  }

  return {
    success: false,
    message: 'Network error, please try again',
  };
}
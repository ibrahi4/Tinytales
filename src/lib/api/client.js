// src/lib/api/client.js

import axios from 'axios';
import Cookies from 'js-cookie';

const TOKEN_KEY = 'tinytales_token';

const client = axios.create({
  baseURL: 'https://tinytales.trendline.marketing/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Add token from cookies
client.interceptors.request.use(
  (config) => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle 401 Unauthorized (token expired/invalid)
    if (error.response?.status === 401) {
      Cookies.remove(TOKEN_KEY, { path: '/' });
      localStorage.removeItem('tinytales_user');
      
      // Redirect to login
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default client;
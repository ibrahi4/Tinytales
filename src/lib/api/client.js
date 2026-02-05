// src/lib/api/client.js

import axios from 'axios';
import { getToken } from '@/lib/utils/storage';

const client = axios.create({
  baseURL: 'https://tinytales.trendline.marketing/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default client;
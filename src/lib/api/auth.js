// src/lib/api/auth.js

import client from './client';
import { AUTH_ENDPOINTS } from './endpoints';

const authApi = {
  login(data) {
    return client.post(AUTH_ENDPOINTS.LOGIN, data);
  },

  register(data) {
    return client.post(AUTH_ENDPOINTS.REGISTER, data);
  },

  verify(data) {
    return client.post(AUTH_ENDPOINTS.VERIFY_EMAIL, data);
  },

  resendCode() {
    return client.post(AUTH_ENDPOINTS.RESEND_VERIFY_CODE);
  },

  logout() {
    return client.post(AUTH_ENDPOINTS.LOGOUT);
  },

  getUserData() {
    return client.get(AUTH_ENDPOINTS.USER_DATA);
  },
};

export default authApi;
import api from './api';
import type { LoginCredentials, AuthResponse, User } from '@/types/auth';
import { API_ENDPOINTS } from '@/utils/constants';

export const authService = {
  async login(credentials: LoginCredentials): Promise<string> {
    const response = await api.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
    const token = response.data.auth_token;
    localStorage.setItem('token', token);
    return token;
  },

  async logout(): Promise<void> {
    try {
      await api.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
      localStorage.removeItem('token');
    }
  },

  async getProfile(): Promise<User> {
    const response = await api.get<User>(API_ENDPOINTS.AUTH.PROFILE);
    return response.data;
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};

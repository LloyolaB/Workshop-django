export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  PRODUCTS: '/products',
  INVENTORY: '/inventory',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/token/login/',
    LOGOUT: '/auth/token/logout/',
    REGISTER: '/auth/users/',
    PROFILE: '/auth/users/me/',
  },
  PRODUCTS: {
    CATEGORIES: '/products/categories/',
    PRODUCTS: '/products/products/',
  },
  INVENTORY: {
    LOCATIONS: '/inventory/locations/',
    ITEMS: '/inventory/inventory-items/',
  },
} as const;

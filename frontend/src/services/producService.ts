import api from './api';
import type { Category } from '@/types/category';
import type { Product } from '@/types/product';
import { API_ENDPOINTS } from '@/utils/constants';

export const productsService = {
    // Categorías
    async getCategories(): Promise<Category[]> {
      const response = await api.get<Category[]>(API_ENDPOINTS.PRODUCTS.CATEGORIES);
      return response.data;
    },

    async createCategory(category: Omit<Category, 'id'>): Promise<Category> {
      const response = await api.post<Category>(API_ENDPOINTS.PRODUCTS.CATEGORIES, category);
      return response.data;
    },

    // Productos
    async getProducts(): Promise<Product[]> {
      const response = await api.get<Product[]>(API_ENDPOINTS.PRODUCTS.PRODUCTS);
      return response.data;
    },

    async createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> {
      const response = await api.post<Product>(API_ENDPOINTS.PRODUCTS.PRODUCTS, product);
      return response.data;
    },

    async updateProduct(id: number, product: Partial<Product>): Promise<Product> {
      const response = await api.patch<Product>(`${API_ENDPOINTS.PRODUCTS.PRODUCTS}${id}/`, product);
      return response.data;
    },

    async deleteProduct(id: number): Promise<void> {
      await api.delete(`${API_ENDPOINTS.PRODUCTS.PRODUCTS}${id}/`);
    },
}

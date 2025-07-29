import type { Category } from './category';
export interface Product {
  id: number;
  name: string;
  description?: string;
  sku: string;
  price: string;
  category?: Category;
  created_at: string;
  updated_at: string;
}
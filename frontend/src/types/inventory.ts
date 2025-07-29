import type { Product } from './product';
import type { Location } from './location';
export interface InventoryItem {
  id: number;
  product: Product;
  location: Location;
  quantity: number;
  last_updated: string;
}
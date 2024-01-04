import { Product } from './Product';
import { User } from './User';

export interface Category {
  id: number;
  title: string;
  ownerId: number;
}

export interface FullCategory extends Category {
  products: Product[];
  user: User | null;
}

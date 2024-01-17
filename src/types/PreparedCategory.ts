import { Category } from './Category';
import { Product } from './Product';
import { User } from './User';

export type PreparedCategory = Category & {
  owner: User | null;
  products: Product[];
};

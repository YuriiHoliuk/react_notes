// eslint-disable-next-line import/no-cycle
import { Product } from './Product';
import { User } from './User';

export interface Category {
  id: number,
  title: string,
  ownerId: number,
}

export interface FullCategories extends Category {
  owner?: User,
  products: Product[]
}

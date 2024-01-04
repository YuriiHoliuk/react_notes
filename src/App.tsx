import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { CategoryList } from './components/CategoryList';
import { Category, FullCategory } from './types/Category';
import { Product } from './types/Product';
import { User } from './types/User';

const prepareCategories = (
  categories: Category[], // ownerId
  products: Product[], // categoryId
  users: User[],
): FullCategory[] => {
  return categories.map((category) => ({
    ...category,
    products: products.filter((product) => product.categoryId === category.id),
    user: users.find((user) => user.id === category.ownerId) || null,
  }));
};

const preparedCategories = prepareCategories(
  categoriesFromServer,
  productsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <div className="container">
    <CategoryList categories={preparedCategories} />
  </div>
);

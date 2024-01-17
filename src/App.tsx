import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { PreparedCategory } from './types/PreparedCategory';
import { CategotyList } from './components/CategoryList';

const preparedCategories: PreparedCategory[] = categoriesFromServer.map(
  (category) => ({
    ...category,
    owner: usersFromServer
      .find(({ id }) => id === category.ownerId) || null,
    products: productsFromServer
      .filter(({ categoryId }) => categoryId === category.id),
  }),
);

export const App: React.FC = () => (
  <div className="container">
    <CategotyList preparedCategories={preparedCategories} />
  </div>
);

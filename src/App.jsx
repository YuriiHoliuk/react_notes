import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { CategoryList } from './components/CategoryList';

const prepareCategory = categoriesFromServer.map(category => ({
  ...category,
  owner: usersFromServer.find(user => user.id === category.ownerId),
  products: productsFromServer.filter(product => (
    product.categoryId === category.id
  )),
}));

export const App = () => (
  <div className="container">
    <CategoryList categories={prepareCategory} />
  </div>
);

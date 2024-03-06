import React from 'react';
import './App.scss';

import categoriesFromServer from './api/categories';
import { CategoryCard } from './components/CategoryCard';

export const App = () => (
  <div className="container">
    {categoriesFromServer.map(category => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </div>
);

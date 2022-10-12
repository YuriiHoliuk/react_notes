import React from 'react';
import './App.scss';
import { CategoriesList } from './components/CategoriesList';

export const App: React.FC = () => (
  <div className="container">
    <CategoriesList />
  </div>
);

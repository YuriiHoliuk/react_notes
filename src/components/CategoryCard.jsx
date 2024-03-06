import React from 'react';
import { ProductList } from './ProductList';
import usersFromServer from '../api/users';

export function getUserById(userId) {
  return usersFromServer.find(user => userId === user.id);
}

export const CategoryCard = ({ category }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{`${category.title} - ${getUserById(category.ownerId).name}`}</p>

        <ProductList categoryId={category.id} />
      </div>
    </div>
  </div>
);

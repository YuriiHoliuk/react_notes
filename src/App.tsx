import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { User } from './types/User';
import { FullCategories } from './types/Category';
import { Product } from './types/Product';

function getUserById(userId: number): User | undefined {
  return usersFromServer.find(user => userId === user.id);
}

function getProductsById(produtsId: number): Product[] {
  return productsFromServer.filter(product => produtsId === product.categoryId);
}

const preapearCategories: FullCategories[] = categoriesFromServer
  .map((category) => ({
    ...category,
    owner: getUserById(category.ownerId),
    products: getProductsById(category.id),
  }));

export const App: React.FC = () => (
  <div className="container">
    {preapearCategories.map((category) => (
      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>{`${category.title} - (${category.owner?.name})`}</p>

            {category.products.length === 0 ? (
              <b>No products</b>
            ) : (
              <ul className="ui list">
                {category.products.map((product) => (
                  <li>{product.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

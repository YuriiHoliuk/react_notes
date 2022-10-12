import React from 'react';
import {
  Categories, FullCategories, Product, User,
} from '../../react-app-env';
import usersFromServer from '../../api/users';
import productsFromServer from '../../api/products';
import categoriesFromServer from '../../api/categories';
import { ProductsList } from '../ProductsList';

const prepareCategories = (
  categories: Categories[],
  users: User[],
  products: Product[],
): FullCategories[] => {
  return categories.map((category) => ({
    ...category,
    user: users.find((user) => user.id === category.ownerId),
    products: products.filter((product) => product.groupId === category.id),
  }));
};

const preparedCategories = prepareCategories(
  categoriesFromServer,
  usersFromServer,
  productsFromServer,
);

export const CategoriesList: React.FC = () => (
  <>
    {preparedCategories.map((category) => (
      <div className="ui card" key={category.id}>
        <div className="ui content">
          <div className="ui description">
            <p>{`${category.title} - (${category.user?.name || 'Unknown'})`}</p>
            {category.products.length === 0
              ? 'No products'
              : <ProductsList products={category.products} />}
          </div>
        </div>
      </div>
    ))}
  </>
);

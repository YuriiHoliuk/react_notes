import React from "react";

import productsFromServer from '../api/products';

export function getProductsByCategoryId(categoryId) {
  return productsFromServer.filter(
    (product) => product.categoryId === categoryId
  );
}

export const ProductList = ({ categoryId }) => {
  const products = getProductsByCategoryId(categoryId);

  if (products.length === 0) {
    return <b>No products</b>;
  }

  return (
    <ul className="ui list">
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

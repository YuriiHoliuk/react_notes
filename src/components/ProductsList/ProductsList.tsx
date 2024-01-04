import React from 'react';
import { Product } from '../../types/Product';

interface Props {
  products: Product[];
}

export const ProductsList: React.FC<Props> = ({ products }) => (
  <ul className="ui list">
    {products.map(({ id, name }) => (
      <li key={id}>
        {name}
      </li>
    ))}
  </ul>
);

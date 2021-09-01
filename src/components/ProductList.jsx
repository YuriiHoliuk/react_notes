import React from 'react';
import PropTypes from 'prop-types';
import { Product } from './Product';
import { ProductType } from '../types/project.typedefs';

export const ProductList = ({ products }) => (
  <>
    <ul className="ui list">
      {products.map(product => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  </>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType).isRequired,
};

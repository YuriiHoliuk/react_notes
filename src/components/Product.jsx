import React from 'react';
import { ProductType } from '../types/project.typedefs';

export const Product = ({ product }) => (
  <>
    {`${product.name}`}
  </>
);

Product.propTypes = {
  product: ProductType.isRequired,
};

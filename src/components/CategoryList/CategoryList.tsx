import React from 'react';
import { ProductsList } from '../ProductsList';
import { FullCategory } from '../../types/Category';

interface Props {
  categories: FullCategory[];
}

export const CategoryList: React.FC<Props> = ({ categories }) => (
  <>
    {categories.map((category) => (
      <div className="ui card" key={category.id}>
        <div className="ui content">
          <div className="ui description">
            <p>{`${category.title} - (${category.user?.name})`}</p>

            {category.products.length === 0
              ? <b>No products</b>
              : <ProductsList products={category.products} key={category.id} />}
          </div>
        </div>
      </div>
    ))}
  </>
);

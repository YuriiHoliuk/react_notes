import { FC } from 'react';
import { PreparedCategory } from '../types/PreparedCategory';

interface Props {
  category: PreparedCategory;
}

export const CategoryInfo: FC<Props> = ({
  category,
}) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{`${category.title} - (${category.owner?.name})`}</p>

        <ul className="ui list">
          {category.products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

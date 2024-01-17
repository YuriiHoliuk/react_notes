import { FC } from 'react';
import { PreparedCategory } from '../types/PreparedCategory';
import { CategoryInfo } from './CategoryInfo';

interface Props {
  preparedCategories: PreparedCategory[];
}

export const CategotyList: FC<Props> = ({
  preparedCategories,
}) => (
  <>
    {preparedCategories.map((category) => (
      <CategoryInfo category={category} key={category.id} />
    ))}
  </>
);

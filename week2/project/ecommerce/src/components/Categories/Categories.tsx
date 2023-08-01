import React from 'react';
import { Link } from 'react-router-dom';
import style from './Categories.module.css';

type Categories = {
  categories: string[];
  categoryValue: string;
  setCategoryValue: (category: string) => void;
};

const Categories: React.FC<Categories> = ({
  categories,
  categoryValue,
  setCategoryValue,
}) => {
  const handleClickCategory = (clickedCategory: string) => {
    if (categoryValue === clickedCategory) {
      // Clicked on the already selected category, so remove the filter
      setCategoryValue('');
    } else {
      // Clicked on a new category, set it as the filter value
      setCategoryValue(clickedCategory);
    }
  };
  return (
    <div className={style.categories}>
      <ul className={style.list}>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => handleClickCategory(value)}
              className={`${style.item} ${
                categoryValue === value ? style.active : ''
              }`}
            >
              <Link to={`/${value}/products`} className={style.link}>
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

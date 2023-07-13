import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

type CategoriesType = {
  categoriesArray: string[];
  showCategory: string;
  onClickCategory: (i: string) => void;
};

const Categories: React.FC<CategoriesType> = ({
  categoriesArray,
  showCategory,
  onClickCategory,
}) => {
  return (
    <div className={style.categories}>
      <ul className={style.categoriesList}>
        {categoriesArray.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(value)}
              className={`${style.categoryItem} ${
                showCategory === value ? style.active : ''
              }`}
            >
              <NavLink to={`/category/${value}`}>{value}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

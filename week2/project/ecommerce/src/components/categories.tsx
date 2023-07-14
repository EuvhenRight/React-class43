import React from 'react';
import { Link } from 'react-router-dom';
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
    <>
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
                <Link to={`/${value}/products`} className={style.link}>
                  {value}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;

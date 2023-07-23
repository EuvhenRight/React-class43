import React from 'react';
import { Link } from 'react-router-dom';
import style from './categories.module.css';
import { ChangesContext } from '../favoritesContext';

type CategoriesType = {
  categoriesArray: string[];
};

const Categories: React.FC<CategoriesType> = ({ categoriesArray }) => {
  const { categoryValue, setCategoryValue } = React.useContext(ChangesContext);

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
    <>
      <div className={style.categories}>
        <ul className={style.categoriesList}>
          {categoriesArray.map((value, i) => {
            return (
              <li
                key={i}
                onClick={() => handleClickCategory(value)}
                className={`${style.categoryItem} ${
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
    </>
  );
};

export default Categories;

import React from 'react';
import './App.css';

type CategoriesType = {
  categories: string[];
  showCategory: string;
  onClickCategory: (i: string) => void;
};

const Categories: React.FC<CategoriesType> = ({
  categories,
  showCategory,
  onClickCategory,
}) => {
  return (
    <div className="categories">
      <ul className="categories-list">
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(value)}
              className={`category-item ${
                showCategory === value ? 'active' : ''
              }`}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

import React from 'react';
import './App.css';

type CategoriesType = {
  categories: string[];
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
};

const Categories: React.FC<CategoriesType> = ({
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
    <div className="categories">
      <ul className="categories-list">
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => handleClickCategory(value)}
              className={`category-item ${
                categoryValue === value ? 'active' : ''
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

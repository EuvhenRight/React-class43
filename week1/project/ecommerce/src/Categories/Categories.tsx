import React from 'react';
import styles from './Categories.module.css';

type Categories = {
  categories: string[];
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
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
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => handleClickCategory(value)}
              className={`${styles.item} ${
                categoryValue === value ? styles.active : ''
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

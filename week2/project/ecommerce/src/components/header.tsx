import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/categories';
import style from './header.module.css';

type CategoriesPageProps = {
  categoryValue: string;
  onClickCategory: (category: string) => void;
};

const Header: React.FC<CategoriesPageProps> = ({
  categoryValue,
  onClickCategory,
}) => {
  // const [categoryValue, setCategoryValue] = React.useState<string>('');
  const [categories, setCategories] = React.useState<string[]>([]); // ?

  const categoriesData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories');

      const data = await res.json();

      setCategories(data);
    } catch (err) {
      console.log('Check your internet connection', err);
    }
  };

  React.useEffect(() => {
    categoriesData();
  }, []);
  return (
    <>
      <Link className={style.headerLink} to={'/'}>
        <h1>Products</h1>
      </Link>
      <Categories
        categoriesArray={categories}
        showCategory={categoryValue}
        onClickCategory={(i: string) => {
          onClickCategory(i);
        }}
      />
    </>
  );
};

export default Header;

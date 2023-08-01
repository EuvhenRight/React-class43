import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import style from './Header.module.css';

type CategoriesPageProps = {
  categoryValue: string;
  setCategoryValue: (category: string) => void;
};

const Header: React.FC<CategoriesPageProps> = ({
  categoryValue,
  setCategoryValue,
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
        categories={categories}
        categoryValue={categoryValue}
        setCategoryValue={(i: string) => {
          setCategoryValue(i);
        }}
      />
    </>
  );
};

export default Header;

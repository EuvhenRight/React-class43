import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/categories';
import style from './header.module.css';

const Header: React.FC = () => {
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
      <ul className={style.links}>
        <Link to={'/'} className={style.link}>
          <li>Welcome</li>
        </Link>
        <li>Products</li>
      </ul>

      <Categories categoriesArray={categories} />
    </>
  );
};

export default Header;

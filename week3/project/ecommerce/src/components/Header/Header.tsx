import React from 'react';
import Categories from '../Categories/Categories';
import FavoritesComponent from '../Favorites/Favorite.Component';
import { ChangesContext } from '../ProductsContext';
import style from './Header.module.css';

const Header: React.FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const { error } = React.useContext(ChangesContext);
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
      <div className={style.top}>
        <h1>Products</h1>
        <FavoritesComponent />
      </div>
      <Categories categoriesArray={categories} />
    </>
  );
};

export default Header;

import React from 'react';
import Categories from '../Categories/Categories';
import FavoritesComponent from '../Favorites/Favorite.Component';
import { useError } from '../ProductsContext';
import style from './Header.module.css';

const Header: React.FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const { error, setError } = useError();
  const categoriesData = React.useCallback(async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories');

      const data = await res.json();

      setCategories(data);
    } catch (err) {
      setError('Check your internet connection');
    }
  }, [setError]);

  React.useEffect(() => {
    categoriesData();
  }, [categoriesData]);
  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      <div className={style.top}>
        <h1>Products</h1>
        <FavoritesComponent />
      </div>
      <Categories categoriesArray={categories} />
    </>
  );
};

export default Header;

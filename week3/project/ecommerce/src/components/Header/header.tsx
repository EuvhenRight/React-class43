import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import { ChangesContext } from '../FavoritesContext';
import style from './Header.module.css';

const Header: React.FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const { newArray, setNewArray } = React.useContext(ChangesContext);
  const categoriesData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories');

      const data = await res.json();

      setCategories(data);
    } catch (err) {
      console.log('Check your internet connection', err);
    }
  };

  const handleChangeFavorites = () => {
    setNewArray(!newArray);
  };

  React.useEffect(() => {
    categoriesData();
  }, []);
  return (
    <>
      <div className={style.top}>
        <h1>Products</h1>
        <ul className={style.right_menu}>
          <Link to={'/category/products'} className={style.link}>
            <li>Products</li>
          </Link>
          <Link
            onClick={handleChangeFavorites}
            className={style.link}
            to={'/favorites'}
          >
            <li>Favorites</li>
          </Link>
        </ul>
      </div>
      <Categories categoriesArray={categories} />
    </>
  );
};

export default Header;

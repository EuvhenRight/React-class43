import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/categories';
import { ChangesContext } from '../favoritesContext';
import style from './header.module.css';

const Header: React.FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]); // ?
  const {newArray, setNewArray} = React.useContext(ChangesContext);
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
  }

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
      <div>
      <ul className={style.right_menu}>
        <Link to = {'/category/products'} className={style.link}>
        <li>Products</li>
        </Link>
        <Link onClick={handleChangeFavorites} className={style.link} to={'/favorites'}>
        <li>Favorites</li>
        </Link>
      
      </ul>
      </div>

      <Categories categoriesArray={categories} />
    </>
  );
};

export default Header;

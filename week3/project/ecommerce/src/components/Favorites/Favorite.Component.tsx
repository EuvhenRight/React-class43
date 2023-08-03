import React from 'react';
import { Link } from 'react-router-dom';
import style from './Favorites.module.css';

const FavoritesComponent: React.FC = () => {
  return (
    <ul className={style.right_menu}>
      <Link to={'/category/products'} className={style.link}>
        <li>Products</li>
      </Link>
      <Link className={style.link} to={'/favorites'}>
        <li>Favorites</li>
      </Link>
    </ul>
  );
};
export default FavoritesComponent;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FavoritesComponent from '../Favorites/Favorite.Component';
import { useError, useProduct } from '../ProductsContext';
import { Product } from '../Types/Types';
import style from './Product_Details.module.css';

const heartRegular: string = require('../assets/heart-regular.svg').default;
const heartSolid: string = require('../assets/heart-solid.svg').default;

const ProductDetails: React.FC = () => {
  const { error } = useError();
  const { category, id } = useParams<{ category: string; id?: string }>();

  const navigate = useNavigate();
  const productId = id ? parseInt(id, 10) : undefined;
  const { worksProduct: productData, setWorksProduct } = useProduct();

  const handleChangeFavorites = (productId: number) => {
    setWorksProduct({ type: 'FAVORITES', favorite: productId });
  };

  const findProduct: Product | undefined = productData.products.find(
    (product) => product.id === productId
  );

  if (!findProduct) {
    return null; // or render a loading state
  }

  const isFavorite = productData.favorite.includes(findProduct.id);

  return (
    <div className={style.productDetails}>
      {error && <p className={style.error}>{error}</p>}
      <div className={style.header_favorites}>
        <h1 className={style.productDetailsTitle}>{findProduct.title}</h1>
        <FavoritesComponent />
      </div>
      <div className={style.productDetailsInfo}>
        <div className={style.productDetailsImageContainer}>
          <img
            className={style.productDetailsImage}
            src={findProduct.image}
            alt={findProduct.title}
          />
          <div
            onClick={(event) => {
              event.preventDefault();
              handleChangeFavorites(findProduct.id);
            }}
            className={style.favoriteButtonContainer}
          >
            {!isFavorite ? (
              <img
                className={style.favoriteImage}
                src={heartRegular}
                alt="heart"
              />
            ) : (
              <img
                className={style.favoriteImage}
                src={heartSolid}
                alt="heart"
              />
            )}
          </div>
        </div>
        <p className={style.productDetailsDescription}>
          {findProduct.description}
        </p>
      </div>
      <button
        className={style.productDetailsButton}
        onClick={() => {
          navigate(`/${category}/products`);
        }}
      >
        back
      </button>
    </div>
  );
};

export default ProductDetails;

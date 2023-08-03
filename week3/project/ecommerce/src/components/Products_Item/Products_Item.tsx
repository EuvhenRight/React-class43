import React, { useContext } from 'react';
import { ChangesContext, useError } from '../ProductsContext';
import { Product } from '../Types/Types';
import style from './Products_Item.module.css';

interface ProductInArrayProps {
  product: Product;
}

const ProductsItem: React.FC<ProductInArrayProps> = ({ product }) => {
  const { worksProduct: productData, setWorksProduct } =
    useContext(ChangesContext);
  const { error } = useError();

  const handleChangeFavorites = (productId: number) => {
    setWorksProduct({ type: 'FAVORITES', favorite: productId });
  };

  const isFavorite = productData.favorite.includes(product.id);

  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      <div className={style.productImageContainer}>
        <img
          className={style.productImage}
          src={product.image}
          alt={product.title}
        />
        <div
          className={style.favoriteButtonContainer}
          onClick={(event) => {
            event.preventDefault();
            handleChangeFavorites(product.id);
          }}
        >
          {!isFavorite ? (
            <img
              className={style.favoriteImage}
              src="../assets/heart-regular.svg"
              alt="heart"
            />
          ) : (
            <img
              className={style.favoriteImage}
              src="../assets/heart-solid.svg"
              alt="heart"
            />
          )}
        </div>
      </div>
      <span className={style.productTitle}>{product.title}</span>
    </>
  );
};

export default ProductsItem;

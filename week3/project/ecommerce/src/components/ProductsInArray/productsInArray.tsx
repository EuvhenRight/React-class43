import React from 'react';
import { ProductType } from '../Product/product';
import style from './productsInArray.module.css';

interface ProductInArrayProps {
  product: ProductType;
  handleChangeFavorites: (productId: number) => void;
}

const ProductsInArray: React.FC<ProductInArrayProps> = ({
  product,
  handleChangeFavorites,
}) => {
  return (
    <>
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
          {product.favorite ? (
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

export default ProductsInArray;

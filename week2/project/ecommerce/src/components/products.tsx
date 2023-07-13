import React from 'react';
import style from './productsPage.module.css';

type ProductsType = {
  image: string;
  title: string;
};

type ProductsPropsType = {
  product: ProductsType;
};

const Products: React.FC<ProductsPropsType> = ({ product }) => {
  return (
    <div className={style.product}>
      <img
        className={style.productImage}
        src={product.image}
        alt={product.title}
      />
      <span className={style.productTitle}>{product.title}</span>
    </div>
  );
};

export default Products;

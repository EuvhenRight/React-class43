import React from 'react';
import styles from './Products.module.css';

type Products = {
  image: string;
  title: string;
};

type ProductsProps = {
  product: Products;
};

const Products: React.FC<ProductsProps> = ({ product: { image, title } }) => {
  return (
    <div className={styles.product}>
      <img className={styles.image} src={image} alt={title} />
      <span className={title}>{title}</span>
    </div>
  );
};

export default Products;

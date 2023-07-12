import React from 'react';
import './App.css';

type ProductsType = {
  image: string;
  title: string;
};

type ProductsPropsType = {
  product: ProductsType;
};

const Products: React.FC<ProductsPropsType> = ({ product }) => {
  return (
    <div className="product">
      <img className="product-image" src={product.image} alt={product.title} />
      <span className="product-title">{product.title}</span>
    </div>
  );
};

export default Products;

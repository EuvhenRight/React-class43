import React from 'react';
import './App.css';

type Products = {
  image: string;
  title: string;
};

type ProductsProps = {
  product: Products;
};

const Products: React.FC<ProductsProps> = ({ product:{ image, title }} ) => {
  return (
    <div className="product">
      <img className="product-image" src={image} alt={title} />
      <span className="product-title">{title}</span>
    </div>
  );
};

export default Products;

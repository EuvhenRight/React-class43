import React from 'react';
import './App.css';

const Products = (props) => {
  return (
    <div className="product">
      <img
        className="product-image"
        src={props.product.image}
        alt={props.product.title}
      />
      <span className="product-title">{props.product.title}</span>
    </div>
  );
};

export default Products;

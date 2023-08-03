import React from 'react';
import style from './ProductsPage.module.css';
import { Link } from 'react-router-dom';
import { ChangesContext } from '../FavoritesContext';
import ProductsInArray from '../ProductsInArray/ProductsInArray';

const ProductsPage: React.FC = () => {
  const { product } = React.useContext(ChangesContext);
  const { error } = React.useContext(ChangesContext);
  const { isLoading } = React.useContext(ChangesContext);

  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      {isLoading ? (
        <p className={style.loading}>Loading...</p>
      ) : (
        <ul className={style.products}>
          {product.products.map((product) => {
            return (
              <li className={style.productItem} key={product.id}>
                <Link
                  className={style.product}
                  to={`/${product.category}/products/${product.title}/${product.id}`}
                >
                  <ProductsInArray product={product} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ProductsPage;

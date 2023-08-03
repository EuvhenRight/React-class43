import React from 'react';
import style from './Products_List.module.css';
import { Link } from 'react-router-dom';
import { useError, useLoadingInfo, useProduct } from '../ProductsContext';
import ProductsItem from '../Products_Item/Products_Item';

const ProductsList: React.FC = () => {
  const { worksProduct: productsData } = useProduct();
  const { error } = useError();
  const { isLoading } = useLoadingInfo();

  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      {isLoading ? (
        <p className={style.loading}>Loading...</p>
      ) : (
        <ul className={style.products}>
          {productsData.products.map((product) => {
            return (
              <li className={style.productItem} key={product.id}>
                <Link
                  className={style.product}
                  to={`/${product.category}/products/${product.title}/${product.id}`}
                >
                  <ProductsItem product={product} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ProductsList;

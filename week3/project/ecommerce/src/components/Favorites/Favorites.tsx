import React from 'react';
import { Link } from 'react-router-dom';
import { useData, useProduct } from '../ProductsContext';
import { Product } from '../Types/Types';
import ProductsInArray from '../Products_Item/Products_Item';
import FavoritesComponent from './Favorite.Component';
import style from './Favorites.module.css';

const Favorites: React.FC = () => {
  const { worksProduct: productData } = useProduct();
  // make a full data of products
  const { allDataProducts } = useData();

  // find the product from allDataProducts
  const findProduct: Product[] = allDataProducts.filter((product) =>
    productData.favorite.includes(product.id)
  );

  return (
    <div>
      <div className={style.header_favorites}>
        <h1>Favorites</h1>
        <FavoritesComponent />
      </div>
      {findProduct.length ? (
        <ul className={style.products}>
          {findProduct.map((product) => {
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
      ) : (
        <div className="message">You haven't chosen any favorites yet!</div>
      )}
    </div>
  );
};

export default Favorites;

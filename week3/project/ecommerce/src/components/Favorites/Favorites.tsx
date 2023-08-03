import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChangesContext } from '../FavoritesContext';
import { Product } from '../Product/Product';
import ProductsInArray from '../ProductsInArray/ProductsInArray';
import style from './Favorites.module.css';

const Favorites: React.FC = () => {
  const { newArray, setNewArray } = React.useContext(ChangesContext);
  const { product: productData, setProduct } = useContext(ChangesContext);
  const [myFavorites, setMyFavorites] = React.useState<Product[]>([]);

  const handleButton = () => {
    setNewArray(!newArray);
  };

  React.useEffect(() => {
    const updatedFavorites = productData.products.filter((product) =>
      productData.favor.includes(product.id)
    );
    setMyFavorites(updatedFavorites);
  }, [productData]);

  console.log(myFavorites, 'myFavorites');

  return (
    <div>
      <div className={style.header_favorites}>
        <h1>Favorites</h1>
        <ul className={style.right_menu}>
          <Link to={'/category/products'} className={style.link}>
            <li>Products</li>
          </Link>
          <Link onClick={handleButton} className={style.link} to={'/favorites'}>
            <li>Favorites</li>
          </Link>
        </ul>
      </div>
      {myFavorites.length ? (
        <ul className={style.products}>
          {myFavorites.map((product) => {
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

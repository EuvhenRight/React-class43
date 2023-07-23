import React, { useContext } from 'react';
import style from './productsPage.module.css';
import { Link } from 'react-router-dom';
import { ChangesContext } from '../favoritesContext';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  favorite: boolean;
};

const ProductsPage: React.FC = () => {
  const { products, setProducts } = useContext(ChangesContext);
  const [isFavorites, setFavorites] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const handleChangeFavorites = (productId: number) => {
    // Check if the product is already favorites
    const existingProduct = products.find((item: any) => item.id === productId);

    // Make sure we have found the existing product before proceeding
    if (existingProduct) {
      setProducts((prevArray) =>
        prevArray.map((item) =>
          item.id === productId
            ? { ...item, favorite: !existingProduct.favorite }
            : item
        )
      );
    }
  };

  console.log(products, 'products');
  // React.useEffect(() => {
  //   handleChangeFavorites(productId);
  // },[products])

  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      <ul className={style.products}>
        {products.map((product) => {
          return (
            <li className={style.productItem} key={product.id}>
              <Link
                className={style.product}
                to={`/${product.category}/products/${product.title}/${product.id}`}
              >
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
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;

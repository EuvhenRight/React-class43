import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangesContext } from '../favoritesContext';
import style from './product.module.css';

const heartRegular: string = require('../assets/heart-regular.svg').default;
const heartSolid: string = require('../assets/heart-solid.svg').default;

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

const ProductView: React.FC = () => {
  const { products, setProducts } = React.useContext(ChangesContext);
  const { error } = React.useContext(ChangesContext);
  const { category, id } = useParams<{ category: string; id?: string }>();
  const navigate = useNavigate();

  const productId = id ? parseInt(id, 10) : undefined;

  const product = products.find((item) => item.id === productId);

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

  // React.useEffect(() => {
  //   handleChangeFavorites(productId);
  // }, []);

  if (!product) {
    return null; // or render a loading state
  }

  return (
    <div className={style.productDetails}>
      {error && <p className={style.error}>{error}</p>}
      <h1 className={style.productDetailsTitle}>{product.title}</h1>
      <div className={style.productDetailsInfo}>
        <div
          // onClick={toggleFavorites}
          className={style.productDetailsImageContainer}
        >
          <img
            className={style.productDetailsImage}
            src={product.image}
            alt={product.title}
          />
          <div
            onClick={() => handleChangeFavorites(product.id)}
            className={style.favoriteButtonContainer}
          >
            {product.favorite ? (
              <img
                className={style.favoriteImage}
                src={heartRegular}
                alt="heart"
              />
            ) : (
              <img
                className={style.favoriteImage}
                src={heartSolid}
                alt="heart"
              />
            )}
          </div>
        </div>
        <p className={style.productDetailsDescription}>{product.description}</p>
      </div>
      <button
        className={style.productDetailsButton}
        onClick={() => {
          navigate(`/${category}/products`);
        }}
      >
        back
      </button>
    </div>
  );
};

export default ProductView;

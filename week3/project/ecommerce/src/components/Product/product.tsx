import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChangesContext } from '../FavoritesContext';
import style from './Product.module.css';

const heartRegular: string = require('../assets/heart-regular.svg').default;
const heartSolid: string = require('../assets/heart-solid.svg').default;

export type Product = {
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
  const { error } = React.useContext(ChangesContext);
  const { category, id } = useParams<{ category: string; id?: string }>();
  const [newArray, setNewArray] = React.useState(false);
  const navigate = useNavigate();
  const productId = id ? parseInt(id, 10) : undefined;
  const [myFavorites, setMyFavorites] = React.useState<Product[]>([]);
  const { product: productData, setProduct } = useContext(ChangesContext);

  const handleChangeFavorites = (productId: number) => {
    setProduct({ type: 'FAVORITES', favor: productId });
  };

  const findProduct: Product | undefined = productData.products.find(
    (product) => product.id === productId
  );

  React.useEffect(() => {
    const updatedFavorites = productData.products.filter((product) =>
      productData.favor.includes(product.id)
    );
    setMyFavorites(updatedFavorites);
  }, [productData]);

  const handleButton = () => {
    setNewArray(!newArray);
  };

  if (!findProduct) {
    return null; // or render a loading state
  }

  const isFavorite = productData.favor.includes(findProduct.id);

  return (
    <div className={style.productDetails}>
      {error && <p className={style.error}>{error}</p>}
      <h1 className={style.productDetailsTitle}>{findProduct.title}</h1>
      <ul className={style.right_menu}>
        <Link to={'/category/products'} className={style.link}>
          <li>Products</li>
        </Link>
        <Link onClick={handleButton} className={style.link} to={'/favorites'}>
          <li>Favorites</li>
        </Link>
      </ul>
      <div className={style.productDetailsInfo}>
        <div className={style.productDetailsImageContainer}>
          <img
            className={style.productDetailsImage}
            src={findProduct.image}
            alt={findProduct.title}
          />
          <div
            onClick={(event) => {
              event.preventDefault();
              handleChangeFavorites(findProduct.id);
            }}
            className={style.favoriteButtonContainer}
          >
            {!isFavorite ? (
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
        <p className={style.productDetailsDescription}>
          {findProduct.description}
        </p>
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

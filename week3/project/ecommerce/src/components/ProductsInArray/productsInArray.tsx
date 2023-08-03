import React, { useContext } from 'react';
import { ChangesContext } from '../FavoritesContext';
import { Product } from '../Product/Product';
import style from './ProductsInArray.module.css';

interface ProductInArrayProps {
  product: Product;
}

const ProductsInArray: React.FC<ProductInArrayProps> = ({ product }) => {
  const { product: productData, setProduct } = useContext(ChangesContext);
  const [myFavorites, setMyFavorites] = React.useState<Product[]>([]);

  const handleChangeFavorites = (productId: number) => {
    setProduct({ type: 'FAVORITES', favor: productId });
  };

  React.useEffect(() => {
    const updatedFavorites = productData.products.filter((product) =>
      productData.favor.includes(product.id)
    );
    setMyFavorites(updatedFavorites);
  }, [productData]);

  const isFavorite = productData.favor.includes(product.id);

  return (
    <>
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
          {!isFavorite ? (
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
    </>
  );
};

export default ProductsInArray;

import React  from 'react';
import style from './productsPage.module.css';
import { Link } from 'react-router-dom';
import { ChangesContext } from '../favoritesContext';
import ProductsInArray from '../ProductsInArray/productsInArray';
import { ProductType } from '../Product/product';


const ProductsPage: React.FC = () => {
  const { products, setProducts } = React.useContext(ChangesContext);
  const {error} = React.useContext(ChangesContext);
  const {isLoading} = React.useContext(ChangesContext);

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


  return (
    <>
    {error && <p className={style.error}>{error}</p>}
      {isLoading ? <p className={style.loading}>Loading...</p> :  <ul className={style.products}>
        {products.map((product) => {
          return (
            <li className={style.productItem} key={product.id}>
              <Link
                className={style.product}
                to={`/${product.category}/products/${product.title}/${product.id}`}
              >
                <ProductsInArray
                  product={product}
                  handleChangeFavorites={handleChangeFavorites}
                />
              </Link>
            </li>
          );
        })}
      </ul>}
    </>
  );
};

export default ProductsPage;

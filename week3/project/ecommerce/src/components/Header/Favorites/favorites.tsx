import React from "react";
import { Link } from "react-router-dom";
import { ChangesContext } from "../../favoritesContext";
import { ProductType } from "../../Product/product";
import ProductsInArray from "../../ProductsInArray/productsInArray";
import style from "../../ProductsInArray/productsInArray.module.css";

const Favorites = () => {
    const { products, setProducts } = React.useContext(ChangesContext);
    
    const favoritesProducts: ProductType[] = products.filter((product) => !product.favorite);

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
        <div>
            <h1>Favorites</h1>
            <ul className={style.products}>
        {favoritesProducts.map((product) => {
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
      </ul>
        </div>
    );
}

export default Favorites
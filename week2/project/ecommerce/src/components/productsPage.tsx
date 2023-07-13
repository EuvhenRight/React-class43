import Products from './products';
import React from 'react';
import style from './productsPage.module.css';

type Product = {
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
};

type ProductsPageProps = {
  categoryValue: string;
};

const ProductsPage: React.FC<ProductsPageProps> = ({ categoryValue }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [error, setError] = React.useState<string>('');

  const productsData = async (category: string) => {
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products';
      const res = await fetch(url);
      console.log(url);
      if (!res.ok) {
        throw new Error('Failed to fetch products.');
      }
      const products = await res.json();
      setProducts(products);
      setError('');
    } catch (err) {
      setError('Check your internet connection');
    }
  };

  React.useEffect(() => {
    productsData(categoryValue);
  }, [categoryValue]);
  return (
    <>
      {error && <p className={style.error}>{error}</p>}
      <ul className={style.products}>
        {products.map((product) => {
          return (
            <li className={style.productItem} key={product.id}>
              <Products product={product} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;

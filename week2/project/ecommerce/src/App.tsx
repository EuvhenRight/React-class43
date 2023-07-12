import Categories from './categories';
import './App.css';
import Products from './products';
import React from 'react';

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

const App: React.FC = () => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  const [categories, setCategories] = React.useState<string[]>([]); // ?
  const [products, setProducts] = React.useState<Product[]>([]);

  const categoriesData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories');

      const data = await res.json();

      setCategories(data);
    } catch (err) {
      console.log('Check your internet connection', err);
    }
  };

  const productsData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const products = await res.json();
      setProducts(products);
    } catch (err) {
      console.log('Check your internet connection', err);
    }
  };

  React.useEffect(() => {
    categoriesData();
    productsData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Products</h1>
        <Categories
          categories={categories}
          showCategory={categoryValue}
          onClickCategory={(i: string) => setCategoryValue(i)}
        />
        <ul className="products">
          {products.map((product) => {
            const productCategory = product.category;
            // condition to check if the category is the same
            if (!categoryValue || categoryValue === productCategory) {
              return (
                <li className="product-item" key={product.id}>
                  <Products product={product} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;

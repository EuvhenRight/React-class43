import Categories from './categories';
import CategoriesData from './fake-data/categories';
import './App.css';
import Products from './products';
import ProductsData from './fake-data/products';
import React from 'react';

const App: React.FC = () => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');

  return (
    <>
      <div className="App">
        <h1>Products</h1>
        <Categories
          categories={CategoriesData}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
        />
        <ul className="products">
          {ProductsData.map((product) => {
            const productCategory = product.category;
            const category = categoryValue.replace('FAKE: ', '');

            // condition to check if the category is the same
            if (!categoryValue || productCategory === category) {
              return (
                <li className="product-item" key={product.id}>
                  <Products product={product} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default App;

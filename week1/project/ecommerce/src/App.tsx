import Categories from './Categories/Categories';
import CategoriesData from './fake-data/categories';
import styles from './App.module.css';
import Products from './Products/Products';
import ProductsData from './fake-data/products';
import React from 'react';

const App: React.FC = () => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');

  const filteredProducts = ProductsData.filter((product) => {
    const productCategory = product.category;
    const category = categoryValue.replace('FAKE: ', '');
    return !categoryValue || productCategory === category;
  });

  return (
    <div className={styles.App}>
      <h1>Products</h1>
      <Categories
        categories={CategoriesData}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <ul className={styles.products}>
        {filteredProducts.map((product) => {
          return (
            <li className={styles.item} key={product.id}>
              <Products product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

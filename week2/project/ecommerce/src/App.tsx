import React from 'react';
import { Routes, Route } from 'react-router-dom';

import style from './App.module.css';
import ProductsPage from './components/productsPage';
import Header from './components/header';

const App: React.FC = () => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  return (
    <div className={style.App}>
      <Header
        categoryValue={categoryValue}
        onClickCategory={(i: string) => setCategoryValue(i)}
      />
      <Routes>
        <Route
          path="/category/:category"
          element={<ProductsPage categoryValue={categoryValue} />}
        />
      </Routes>
    </div>
  );
};

export default App;

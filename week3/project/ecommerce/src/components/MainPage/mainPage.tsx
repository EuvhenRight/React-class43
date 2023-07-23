import React from 'react';
import style from '../MainPage/mainPage.module.css';
import ProductsPage from '../ProductsPage/productsPage';
import Header from '../Header/header';

const MainPage: React.FC = () => {
 
  return (
    <>
      <div className={style.App}>
        <Header />
        <ProductsPage />
      </div>
    </>
  );
};
export default MainPage;

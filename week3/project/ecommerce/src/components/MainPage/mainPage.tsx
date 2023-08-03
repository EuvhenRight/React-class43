import React from 'react';
import style from '../MainPage/MainPage.module.css';
import ProductsPage from '../Products_List/Products_List';
import Header from '../Header/Header';

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

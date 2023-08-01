import React from 'react';

import style from './MainPage.module.css';
import ProductsPage from '../Products_Page/Products_Page';
import Header from '../Header/Header';

const MainPage: React.FC = () => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  return (
    <>
      <div className={style.App}>
        <Header
          categoryValue={categoryValue}
          setCategoryValue={(i: string) => setCategoryValue(i)}
        />
        <ProductsPage categoryValue={categoryValue} />
      </div>
    </>
  );
};
export default MainPage;

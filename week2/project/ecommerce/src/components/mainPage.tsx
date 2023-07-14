import React from 'react';

import style from './mainPage.module.css';
import ProductsPage from './productsPage';
import Header from './header';

const MainPage: React.FC = () => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  return (
    <>
      <div className={style.App}>
        <Header
          categoryValue={categoryValue}
          onClickCategory={(i: string) => setCategoryValue(i)}
        />
        <ProductsPage categoryValue={categoryValue} />
      </div>
    </>
  );
};
export default MainPage;

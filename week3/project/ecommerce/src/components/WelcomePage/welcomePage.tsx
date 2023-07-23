import React from 'react';
import { Link } from 'react-router-dom';
import style from './welcomePage.module.css';

const WelcomePage: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <Link className={style.link} to={'category/products/'}>
          <h1>WELCOME TO HOMEWORK_3</h1>
        </Link>
      </div>
    </>
  );
};

export default WelcomePage;

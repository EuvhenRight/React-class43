import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/Not_found/NotFound';
import ProductView from './components/Product/Product';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path=":category/products/" element={<MainPage />} />
      <Route path=":category/products/:product/:id" element={<ProductView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

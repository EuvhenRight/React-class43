import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage';
import NotFound from './components/notFound';
import ProductView from './components/product';

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

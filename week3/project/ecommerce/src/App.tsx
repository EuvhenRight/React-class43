import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from './components/ProductsContext';

import Favorites from './components/Favorites/Favorites';
import MainPage from '../src/components/Main_Page/Main_Page';
import NotFound from './components/Not_Found/Not_Found';
import WelcomePage from './components/WelcomePage/WelcomePage';
import ProductDetails from './components/Product_Details/Product_Details';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path=":category/products/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path=":category/products/:product/:id"
          element={<ProductDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;

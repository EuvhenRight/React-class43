import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from './components/favoritesContext';
import Favorites from './components/Header/Favorites/favorites';
import MainPage from './components/MainPage/mainPage';
import NotFound from './components/NotFound/notFound';
import ProductView from './components/Product/product';

import WelcomePage from './components/WelcomePage/welcomePage';


const App: React.FC = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path=":category/products/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites  />} />
        <Route
          path=":category/products/:product/:id"
          element={<ProductView />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;

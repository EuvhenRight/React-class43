import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from './components/FavoritesContext';
import Favorites from './components/Favorites/Favorites';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import ProductView from './components/Product/Product';

import WelcomePage from './components/WelcomePage/WelcomePage';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path=":category/products/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
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

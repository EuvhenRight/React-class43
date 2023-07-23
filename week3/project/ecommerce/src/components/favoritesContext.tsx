import React from 'react';
import { ProductType } from './Product/product';

type ChangesContextType = {
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
  favorites: boolean; // Add the favorites property
  setFavorites: React.Dispatch<React.SetStateAction<boolean>>; // Add the setFavorites property
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangesContext = React.createContext<ChangesContextType>({
  categoryValue: '',
  setCategoryValue: () => {},
  favorites: true,
  setFavorites: () => {},
  products: [],
  setProducts: () => {},
  error: '',
  setError: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  const [favorites, setFavorites] = React.useState<boolean>(true);
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [error, setError] = React.useState<string>('');
  const productsData = async (category: string) => {
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : `https://fakestoreapi.com/products`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch products.');
      }
      let products;
      products = await res.json();

      // Add new property into objects
      products = products.map((product: ProductType) => {
        return { ...product, favorite: favorites };
      });

      setProducts(products);
      setError('');
    } catch (err) {
      setError('Check your internet connection');
    }
  };

  React.useEffect(() => {
    productsData(categoryValue);
  }, [categoryValue]);
  return (
    <ChangesContext.Provider
      value={{
        categoryValue,
        setCategoryValue,
        favorites,
        setFavorites,
        products,
        setProducts,
        error,
        setError,
      }}
    >
      {children}
    </ChangesContext.Provider>
  );
};

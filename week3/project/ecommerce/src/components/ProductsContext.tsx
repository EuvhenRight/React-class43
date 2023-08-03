import React, { useContext, useReducer } from 'react';
import {
  ChangesContextType,
  ProductData,
  ProductReducer,
  Product,
} from './Types/Types';

const productReducer: ProductReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS':
      return { ...state, products: action.products };

    case 'FAVORITES':
      let favorite = state.favorite;

      if (state.favorite.includes(action.favorite)) {
        favorite = state.favorite.filter((item) => item !== action.favorite);
      } else {
        favorite = [...state.favorite, action.favorite];
      }

      return { ...state, favorite };

    default:
      return state;
  }
};

const defaultValues: ProductData = {
  products: [],
  favorite: [],
};

export const ChangesContext = React.createContext<ChangesContextType>({
  categoryValue: '',
  setCategoryValue: () => {},
  worksProduct: defaultValues,
  setWorksProduct: () => {},
  error: '',
  setError: () => {},
  isLoading: true,
  newArray: false,
  setNewArray: () => {},
  allDataProducts: [],
  setAllDataProducts: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  const [worksProduct, setWorksProduct] = useReducer(productReducer, {
    products: [],
    favorite: [],
  } as ProductData); // Use the ProductData type here
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [newArray, setNewArray] = React.useState<boolean>(false);
  const [allDataProducts, setAllDataProducts] = React.useState<Product[]>([]);

  const fetchAllDataProducts = async () => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch products.');
      }
      const products = await res.json();
      setAllDataProducts(products);
    } catch (err) {
      setIsLoading(false);
      setError('Check your internet connection');
    }
  };

  const productsData = async (category: string) => {
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : `https://fakestoreapi.com/products`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch products.');
      }
      const products = await res.json();

      setWorksProduct({ type: 'PRODUCTS', products }); // Use action object
      setIsLoading(false);
      setError('');
    } catch (err) {
      setIsLoading(false);
      setError('Check your internet connection');
    }
  };

  React.useEffect(() => {
    fetchAllDataProducts();
    productsData(categoryValue);
    setIsLoading(true);
  }, [categoryValue]);

  return (
    <ChangesContext.Provider
      value={{
        categoryValue,
        setCategoryValue,
        worksProduct,
        setWorksProduct,
        error,
        setError,
        isLoading,
        newArray,
        setNewArray,
        allDataProducts,
        setAllDataProducts,
      }}
    >
      {children}
    </ChangesContext.Provider>
  );
};

export const useError = () => useContext(ChangesContext);
export const useProduct = () => useContext(ChangesContext);
export const useLoadingInfo = () => useContext(ChangesContext);
export const useData = () => useContext(ChangesContext);

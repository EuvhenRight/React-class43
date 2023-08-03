import React, { useReducer } from 'react';
import { Product } from './Product/Product';

type ProductData = {
  products: Product[];
  favor: number[];
};

type ProductAction =
  | {
      type: 'PRODUCTS';
      products: Product[];
    }
  | {
      type: 'FAVORITES';
      favor: number;
    };

type ProductReducer = (
  state: ProductData,
  action: ProductAction
) => ProductData;

type ChangesContext = {
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
  product: ProductData;
  setProduct: (action: ProductAction) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  newArray: boolean;
  setNewArray: React.Dispatch<React.SetStateAction<boolean>>;
  myFavorites: Product[];
  setMyFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
};

const productReducer: ProductReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS':
      return { ...state, products: action.products };

    case 'FAVORITES':
      let favor = state.favor;

      if (state.favor.includes(action.favor)) {
        favor = state.favor.filter((item) => item !== action.favor);
      } else {
        favor = [...state.favor, action.favor];
      }

      return { ...state, favor };

    default:
      return state;
  }
};

const defaultValues: ProductData = {
  products: [],
  favor: [],
};

export const ChangesContext = React.createContext<ChangesContext>({
  categoryValue: '',
  setCategoryValue: () => {},
  product: defaultValues,
  setProduct: () => {},
  error: '',
  setError: () => {},
  isLoading: true,
  newArray: false,
  setNewArray: () => {},
  myFavorites: [],
  setMyFavorites: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [categoryValue, setCategoryValue] = React.useState<string>('');
  const [product, setProduct] = useReducer(productReducer, {
    products: [],
    favor: [],
  } as ProductData); // Use the ProductData type here
  const [error, setError] = React.useState<string>('');
  const [myFavorites, setMyFavorites] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [newArray, setNewArray] = React.useState<boolean>(false);

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

      setProduct({ type: 'PRODUCTS', products }); // Use action object
      setIsLoading(false);
      setError('');
    } catch (err) {
      setIsLoading(false);
      setError('Check your internet connection');
    }
  };

  React.useEffect(() => {
    productsData(categoryValue);
    setIsLoading(true);
  }, [categoryValue]);
  return (
    <ChangesContext.Provider
      value={{
        categoryValue,
        setCategoryValue,
        product,
        setProduct,
        error,
        setError,
        isLoading,
        newArray,
        setNewArray,
        myFavorites,
        setMyFavorites,
      }}
    >
      {children}
    </ChangesContext.Provider>
  );
};

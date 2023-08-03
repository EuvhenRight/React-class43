export type ProductData = {
  products: Product[];
  favorite: number[];
};

type ProductAction =
  | {
      type: 'PRODUCTS';
      products: Product[];
    }
  | {
      type: 'FAVORITES';
      favorite: number;
    };

export type ProductReducer = (
  state: ProductData,
  action: ProductAction
) => ProductData;

export type ChangesContextType = {
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
  worksProduct: ProductData;
  setWorksProduct: (action: ProductAction) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  newArray: boolean;
  setNewArray: React.Dispatch<React.SetStateAction<boolean>>;
  allDataProducts: Product[];
  setAllDataProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

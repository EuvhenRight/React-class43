import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './productsPage.module.css';

type ProductType = {
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

interface ProductViewProps {}

const ProductView: React.FC<ProductViewProps> = () => {
  const [product, setProduct] = React.useState<ProductType | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>('');

  const ProductViewFetch = async (id: string) => {
    try {
      const url = `https://fakestoreapi.com/products/${id}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch products.');
      }
      const product = await res.json();
      setProduct(product);
      setError('');
    } catch (err) {
      setError('Check your internet connection');
    }
  };

  React.useEffect(() => {
    if (id) {
      ProductViewFetch(id);
    }
  }, [id]);

  if (!product) {
    return null; // or render a loading state
  }

  return (
    <>
      <div className={style.product}>
        {error && <p className={style.error}>{error}</p>}
        <h1 className={style.productTitle}>{product.title}</h1>
        <img
          className={style.productImage}
          src={product.image}
          alt={product.title}
        />
        <span className={style.productTitle}>{product.description}</span>
        <button
          onClick={() => {
            navigate(`/${product.category}/products`);
          }}
        >
          back
        </button>
      </div>
    </>
  );
};

export default ProductView;

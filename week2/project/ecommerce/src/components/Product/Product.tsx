import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './Product.module.css';

type Product = {
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
  const [product, setProduct] = React.useState<Product | null>(null);
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>('');
  console.log(category);
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
      <div className={style.productDetails}>
        {error && <p className={style.error}>{error}</p>}
        <h1 className={style.productDetailsTitle}>{product.title}</h1>
        <div className={style.productDetailsInfo}>
          <div className={style.productDetailsImageContainer}>
            <img
              className={style.productDetailsImage}
              src={product.image}
              alt={product.title}
            />
          </div>
          <p className={style.productDetailsDescription}>
            {product.description}
          </p>
        </div>
        <button
          className={style.productDetailsButton}
          onClick={() => {
            navigate(`/${category}/products`);
          }}
        >
          back
        </button>
      </div>
    </>
  );
};

export default ProductView;

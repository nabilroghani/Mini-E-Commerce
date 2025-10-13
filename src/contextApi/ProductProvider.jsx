import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

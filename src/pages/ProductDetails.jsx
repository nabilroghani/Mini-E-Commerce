import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./ProductDetails.css";
import CartContext from "../contextApi/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <h2 className="loading">Loading product details...</h2>;
  if (!product) return <h2 className="error">Product not found.</h2>;

  const handleAddToCart = () => {
    dispatch({ type: "Add", payload: product });
  };

  return (
    <div className="details-container">
      <div className="image-section">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="info-section">
        <h1 className="product-title">{product.title}</h1>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>
        <h3 className="price">${product.price.toFixed(2)}</h3>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./ProductDetails.css";
import CartContext from "../../contextApi/CartContext";
import ProductContext from "../../contextApi/ProductContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 className="error">Product not found.</h2>;

  const handleAddToCart = () => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
      return;
    }
    dispatch({ type: "Add", payload: product });
    alert("✅ Product added to cart!");
  };

  return (
    <div className="details-container">
      <div className="image-section">
        <img
          src={product.image || product.thumbnail || product.img}
          alt={product.title || product.name}
        />
      </div>

      <div className="info-section">
        <h1 className="product-title">{product.title || product.name}</h1>
        <p className="category">Category: {product.category || "N/A"}</p>
        <p className="description">{product.description || "No description"}</p>
        <h3 className="price">${product.price.toFixed(2)}</h3>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

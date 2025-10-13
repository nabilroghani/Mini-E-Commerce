import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contextApi/ProductContext";
import CartContext from "../contextApi/CartContext";
import "./Products.css";

export default function Product() {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (p) => {
    dispatch({ type: "Add", payload: p });
  };

  return (
    <div className="products-section">
      <h2 className="page-title">🛍️ Explore Our Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <Link to={`/ProductDetails/${p.id}`} className="img-link">
              <img src={p.image} alt={p.title} className="product-img" />
            </Link>

            <div className="product-info">
              <h3 className="product-title">
                {p.title.length > 40 ? p.title.slice(0, 40) + "..." : p.title}
              </h3>
              <p className="product-price">${p.price.toFixed(2)}</p>
              <button className="add-btn" onClick={() => handleAddToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

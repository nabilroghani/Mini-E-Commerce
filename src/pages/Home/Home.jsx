import "./Home.css";
import { useContext, useState } from "react";
import ProductContext from "../../contextApi/ProductContext";
import CartContext from "../../contextApi/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import NewArrivalContext from "../../contextApi/NewArrivalContext";

export default function Home() {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  const [page, setPage] = useState(1);
  const { newArrival } = useContext(NewArrivalContext);
  const navigate = useNavigate();

  // ✅ Corrected function placement
  const handleAddToCart = (p) => {
    const user = localStorage.getItem("currentUser");

    if (!user) {
      alert("Please log in to add items to your cart!");
      navigate("/login");
      return;
    }

    dispatch({ type: "Add", payload: p });
  };

  const productsPerPage = 4;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src="/img/hero4.png" alt="hero" className="hero-img" />
        <div className="hero-text">
          <h1>
            Fashion <span>Fusion</span>
          </h1>
          <p>New Article</p>
          <NavLink to="/product">
            <button className="hero-btn">Shop Now</button>
          </NavLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        {[
          { img: "/img/features/f1.png", title: "Free Shipping" },
          { img: "/img/features/f2.png", title: "Online Order" },
          { img: "/img/features/f3.png", title: "Save Money" },
          { img: "/img/features/f4.png", title: "Promotions" },
          { img: "/img/features/f5.png", title: "Happy Sell" },
          { img: "/img/features/f6.png", title: "24/7 Support" },
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        <h1>Featured Products</h1>
        <p>New Modern Design</p>

        <div className="filter-btns">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={page === num ? "active" : ""}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {visibleProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.thumbnail} alt={p.title} />
              <h3>
                {p.title.length > 30 ? p.title.slice(0, 30) + "..." : p.title}
              </h3>
              <p className="price">${p.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        <img src="/img/banner/b2.jpg" alt="banner" className="banner-img" />
        <div className="banner-text">
          <p>Repair Services</p>
          <h1>Up to 70% Off - All T-Shirt & Accessories</h1>
          <button className="banner-btn">Explore More</button>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="new-arrival-section">
        <h1 className="section-title">New Arrivals</h1>
        <p className="section-subtitle">
          Summer Collection • New Modern Design
        </p>

        <div className="new-arrival-grid">
          {newArrival.map((p) => (
            <div key={p.id} className="new-arrival-card">
              <img src={p.img} alt={p.name} />
              <div className="new-arrival-info">
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
                <button className="buy-btn" onClick={() => handleAddToCart(p)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

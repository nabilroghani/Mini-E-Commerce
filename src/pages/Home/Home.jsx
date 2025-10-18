import "./Home.css";
import { useContext, useState } from "react";
import ProductContext from "../../contextApi/ProductContext";
import CartContext from "../../contextApi/CartContext";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);
  const [page, setPage] = useState(1);

  const handleAddToCart = (p) => {
    dispatch({ type: "Add", payload: p });
  };

  const productsPerPage = 4;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const newArrival = [
    {
      id: 101,
      img: "./img/products/f1.jpg",
      thumbnail: "./img/products/f1.jpg",
      price: 45,
      name: "Shirt",
    },
    {
      id: 102,
      img: "./img/products/n3.jpg",
      thumbnail: "./img/products/n3.jpg",
      price: 50,
      name: "Classic White Oxford",
    },
    {
      id: 103,
      img: "./img/products/f5.jpg",
      thumbnail: "./img/products/f5.jpg",
      price: 66,
      name: "Midnight Black Polo",
    },
    {
      id: 104,
      img: "./img/products/n1.jpg",
      thumbnail: "./img/products/n1.jpg",
      price: 43,
      name: "Sky Blue Denim Shirt",
    },
    {
      id: 105,
      img: "./img/products/n5.jpg",
      thumbnail: "./img/products/n5.jpg",
      price: 78,
      name: "Navy Blue Linen Shirt",
    },
    {
      id: 106,
      img: "./img/products/f6.jpg",
      thumbnail: "./img/products/f6.jpg",
      price: 34,
      name: "Sand Beige Half Sleeve",
    },
    {
      id: 107,
      img: "./img/products/n8.jpg",
      thumbnail: "./img/products/n8.jpg",
      price: 56,
      name: "Charcoal Grey Formal Shirt",
    },
    {
      id: 108,
      img: "./img/products/f7.jpg",
      thumbnail: "./img/products/f7.jpg",
      price: 23,
      name: "Midnight Black Polo",
    },
  ];

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

      {/* Banner Boxes */}
      <div className="banner-box">
        <div className="banner">
          <img src="./img/banner/b17.jpg" alt="deal-banner" />
          <div className="banner-text">
            <p>Crazy Deals</p>
            <h1>Buy 1 Get One Free</h1>
            <p>The best classic dress is on sale at Cara</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="banner">
          <img src="./img/banner/b10.jpg" alt="season-banner" />
          <div className="banner-text">
            <p>Spring / Summer</p>
            <h1>Upcoming Season</h1>
            <p>The best classic dress is on sale at Cara</p>
            <button>Collection</button>
          </div>
        </div>
      </div>

      {/* Small Banners */}
      <div className="small-banner">
        {[
          {
            img: "img/banner/b4.jpg",
            title: "Seasonal Sale",
            subtitle: "New Trendy Prints",
          },
          {
            img: "img/banner/b18.jpg",
            title: "Seasonal Sale",
            subtitle: "Spring / Summer 2022",
          },
          {
            img: "img/banner/b7.jpg",
            title: "Seasonal Sale",
            subtitle: "Winter Collection -50% OFF",
          },
        ].map((item, i) => (
          <div key={i} className="small-banner-card">
            <img src={item.img} alt={item.title} />
            <div className="small-banner-text">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <img
          src="./img/about/banner.png"
          alt="newsletter-banner"
          className="newsletter-bg"
        />
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h1>Sign Up For Newsletters</h1>
            <p>
              Get E-mail updates about our latest shop and{" "}
              <span>special offers.</span>
            </p>
          </div>
          <div className="newsletter-form">
            <input type="text" placeholder="Your Email Address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./Home.css";
import { useContext } from "react";
import ProductContext from "../../contextApi/ProductContext";

export default function Home() {
  const { products } = useContext(ProductContext);

  const newArrival = [
    { img: "./img/products/f1.jpg", price: 45, name: "shirt" },
    { img: "./img/products/n3.jpg", price: 50, name: "Classic White Oxford" },
    { img: "./img/products/f5.jpg", price: 66, name: "Midnight Black Polo" },
    { img: "./img/products/n1.jpg", price: 43, name: "Sky Blue Denim Shirt" },
    { img: "./img/products/n5.jpg", price: 78, name: "Navy Blue Linen Shirt" },
    { img: "./img/products/f6.jpg", price: 34, name: "Sand Beige Half Sleeve" },
    {
      img: "./img/products/n8.jpg",
      price: 56,
      name: "Charcoal Grey Formal Shirt",
    },
    { img: "./img/products/f7.jpg", price: 23, name: "Midnight Black Polo" },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src="/img/hero4.png" alt="hero" className="hero-img" />
        <div className="hero-text">
          <h1>Shop Fusion</h1>
          <p>New Article</p>
          <button className="hero-btn">Shop Now</button>
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
        <p>Summer Collection | New Modern Design</p>
        <div className="products-grid">
          {products.map((p, index) => (
            <div key={index} className="product-card">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="price">${p.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="banner">
        <img src="/img/banner/b2.jpg" alt="banner" className="banner-img" />

        <div className="banner-text">
          <p>Repair Services</p>
          <h1>Up to 70% Off - All T-Shirt & Assessories</h1>
          <button className="banner-btn">Explore More</button>
        </div>
      </div>

      <div className="new-arrival-section">
        <h1 className="section-title">New Arrivals</h1>
        <p className="section-subtitle">
          Summer Collection • New Modern Design
        </p>

        <div className="new-arrival-grid">
          {newArrival.map((p, index) => (
            <div key={index} className="new-arrival-card">
              <img src={p.img} alt={p.name} />
              <div className="new-arrival-info">
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
                <button className="buy-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <div className="small-banner">
        <div className="small-banner-card">
          <img src="img/banner/b4.jpg" alt="sale-1" />
          <div className="small-banner-text">
            <h2>Seasonal Sale</h2>
            <p>New Trendy Prints</p>
          </div>
        </div>

        <div className="small-banner-card">
          <img src="img/banner/b18.jpg" alt="sale-2" />
          <div className="small-banner-text">
            <h2>Seasonal Sale</h2>
            <p>Spring / Summer 2022</p>
          </div>
        </div>

        <div className="small-banner-card">
          <img src="img/banner/b7.jpg" alt="sale-3" />
          <div className="small-banner-text">
            <h2>Seasonal Sale</h2>
            <p>Winter Collection -50% OFF</p>
          </div>
        </div>
      </div>

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

import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <img
          src="./img/about/banner.png"
          alt="About Banner"
          className="about-hero-img"
        />
        <div className="about-hero-text">
          <h1>
            About <span>Fashion Fusion</span>
          </h1>
          <p>Style • Quality • Confidence</p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>Fashion Fusion</strong> — your ultimate
            destination for the latest fashion trends and timeless styles. We
            believe fashion is not just about clothes; it’s about expressing who
            you are. Our mission is to provide you with high-quality, stylish,
            and affordable apparel that fits your lifestyle.
          </p>

          <p>
            Since our journey began, we’ve focused on combining comfort with
            elegance — ensuring you look and feel confident every day. Whether
            it’s casual wear or formal attire, our collection is designed with
            attention to detail and passion for perfection.
          </p>

          <button className="about-btn">Explore Collection</button>
        </div>

        <div className="about-image">
          <img src="./img/about/a6.jpg" alt="About Us" />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            To inspire confidence through fashion, promote sustainable choices,
            and make stylish clothing accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

import "./Home.css";

export default function Home() {
  const img = "./img/hero4.png"; // direct path
  return (
    <div className="hero">
      <img src={img} alt="hero" />
      <div className="hero-text">
        <h1>Shop Fusion</h1>
        <p>New Article</p>
      </div>
    </div>
  );
}

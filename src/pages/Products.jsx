import Provider from "../contextApi/Provider";
import { useContext } from "react";
import "./Products.css";

export default function Product() {
  const { products } = useContext(Provider);

  return (
    <div className="main-container">
      {products.map((p, index) => (
        <div key={index} className="card">
          <img src={p.img} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

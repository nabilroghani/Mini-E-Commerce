import { useContext } from "react";
import CartContext from "../contextApi/CartContext";
import "./Cart.css";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const total = state.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (state.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛍️ Your Shopping Cart</h2>

      <div className="cart-items">
        {state.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-img" />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch({ type: "Decrease", payload: item.id })
                  }
                  className="qty-btn"
                >
                  −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "Increase", payload: item.id })
                  }
                  className="qty-btn"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch({ type: "Remove", payload: item.id })}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button
          className="clear-cart"
          onClick={() => dispatch({ type: "Clear" })}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

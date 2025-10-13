import { createContext, useReducer, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userKey = currentUser ? `cart_${currentUser.email}` : "cart_guest";
  const storedCart = JSON.parse(localStorage.getItem(userKey)) || [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        const existing = state.find((item) => item.id === action.payload.id);
        if (existing) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }

      case "Increase":
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      case "Decrease":
        return state
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

      case "Remove":
        return state.filter((item) => item.id !== action.payload);

      case "Clear":
        return [];

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, storedCart);

  useEffect(() => {
    localStorage.setItem(userKey, JSON.stringify(state));
  }, [state, userKey]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

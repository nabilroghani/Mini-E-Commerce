import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./contextApi/ProductProvider.jsx";
import { CartProvider } from "./contextApi/CartContext.jsx";
import NewArrivalProvider from "./contextApi/NewArrivalProvider.jsx";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <NewArrivalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NewArrivalProvider>
      </CartProvider>
    </ProductProvider>
  </StrictMode>
);

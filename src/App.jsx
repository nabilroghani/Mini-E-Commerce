import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./Layout";
import Product from "./pages/Products/Products";
import Private from "./ProtectedRoute/Private";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetail/ProductDetails";
import NotFound from "./pages/NotFound/NotFound";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path={"*"} element={<NotFound />} />
          <Route element={<Private />}>
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

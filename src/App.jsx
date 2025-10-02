import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Product from "./pages/Products";
import Private from "./ProtectedRoute/Private";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Level from "./contextApi/Level";

export default function App() {
  return (
    <>
      <Level>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Private />}>
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Route>
        </Routes>
      </Level>
    </>
  );
}

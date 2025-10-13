import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../contextApi/CartContext";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const CurrentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { state } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      localStorage.removeItem(`cart_${currentUser.email}`);
    }
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">Mini</div>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i
            className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>

        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/"
                className="link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="link"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="link"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="link"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>

            <NavLink
              to="/cart"
              className="cart-icon"
              data-count={state.length}
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>

            {CurrentUser ? (
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            ) : (
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                <i>Login</i>
              </NavLink>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

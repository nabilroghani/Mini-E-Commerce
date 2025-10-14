import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CartContext from "../contextApi/CartContext";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { state } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // 🔁 Update header whenever login/logout happens
  useEffect(() => {
    const handleAuthChange = () => {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    };

    window.addEventListener("storage", handleAuthChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleAuthChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  // 🚪 Logout user
  const handleLogout = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      localStorage.removeItem(`cart_${user.email}`);
    }
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("authChange")); // 👈 trigger update instantly
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        Mini<span>Shop</span>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen((p) => !p)}>
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="link" onClick={() => setMenuOpen(false)}>
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

          {/* Show only when logged in */}
          {currentUser && (
            <li>
              <NavLink
                to="/product"
                className="link"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
          )}

          {/* Cart visible only if logged in */}
          {currentUser && (
            <NavLink
              to="/cart"
              className="cart-icon"
              data-count={state.length}
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          )}

          {/* Auth Buttons */}
          {currentUser ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <i className="login-btn">Login</i>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
}

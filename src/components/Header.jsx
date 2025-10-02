import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const CurrentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">Mini</div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="link">
                Products
              </NavLink>
            </li>

            <NavLink to="/cart" className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>

            {CurrentUser ? (
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            ) : (
              <NavLink to="/login">
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

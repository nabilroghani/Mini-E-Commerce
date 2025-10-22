import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find(
      (u) => u.email === input.email && u.password === input.password
    );

    if (loggedInUser) {
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

      window.dispatchEvent(new Event("authChange"));

      navigate("/");
    } else {
      setMessage("Invalid credentials");
    }

    setInput({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={handleChange}
          required
        />
        <p style={{ color: "red", textAlign: "center" }}>{message}</p>
        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account? <NavLink to="/register">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
}

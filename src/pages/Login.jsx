import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = user.find(
      (u) => u.email === input.email && u.password === input.password
    );
    if (loggedInUser) {
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      navigate("/");
    } else {
      alert("Invalid cradential");
    }
    console.log(input);
    setInput({
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
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
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <p className="signup-text">
          Don’t have an account? <NavLink to="/register">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
}

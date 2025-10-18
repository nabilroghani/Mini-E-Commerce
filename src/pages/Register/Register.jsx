import { NavLink } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(input);

    localStorage.setItem("users", JSON.stringify(users));
    console.log(input);
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={input.name}
          onChange={handleChnage}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={handleChnage}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChnage}
          id="password"
          placeholder="Enter Password"
        />

        <button type="submit">Register</button>
        <p className="login-text">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </div>
  );
}

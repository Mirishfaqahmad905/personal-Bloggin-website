import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./adminCss/AdminLogin.css"; // Import CSS for styling
import Dashboard from "./adminCss/Dashboard";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reduxt-toolkit/authSlice";


const Admin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "superadmin", // Default role
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
 const dispatch=useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:3000/api/login/admin", formData);
      const { token, message } = response.data;

      // Save token to localStorage
      localStorage.setItem("adminToken", token);
      // Show success message
      setSuccess(message);
      dispatch(loginSuccess(formData));
 
      alert("login successfully")
      // Redirect to admin dashboard after a short delay
      setTimeout(() => {
          location.href='/dashboard';
        navigate("dashboard");
      
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };
  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="superadmin">Superadmin</option>
            <option value="moderator">Moderator</option>
            <option value="editor">Editor</option>
          </select>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
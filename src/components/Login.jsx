import React, { useState } from 'react';
import '../CompCss/Login.css'; // Import the CSS file
const Url=import.meta.env.VITE_API_URL;
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // ✅ Check if response body is empty before parsing JSON
      if (!response.ok) {
        const errorText = await response.text(); // Get raw response text
        throw new Error(errorText || 'Login failed');
      }
      // ✅ Check if response has a valid JSON body
      const responseText = await response.text();
      const data = responseText ? JSON.parse(responseText) : null;
  
      alert('Login successful!');
      console.log('User data:', data);
      // Redirect user or save token
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert(`An error occurred: ${error.message}`);
    }
  };
  

  return (
    <div className="login-page">
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
          alt="Login Illustration"
        />
      </div>

      <div className="form-section">
        <div className="login-container">
          <h2>Welcome Back!</h2>
          <p>Please log in to continue.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-btn">Login</button>

            <div className="additional-links">
              <a href="/forgot-password">Forgot Password?</a>
              <a href="/signup">Don't have an account? Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

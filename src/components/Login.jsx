import React from 'react';
import '../CompCss/Login.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="login-page">
      {/* Left Side: Image */}
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1738643327~exp=1738646927~hmac=01a409e615dcfd4964da0a9dba96aa9abb42bafc75cda6ee08a2d46d68e88d10&w=740"
          alt="Login Illustration"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="form-section">
        <div className="login-container">
          <h2>Welcome Back!</h2>
          <p>Please log in to continue.</p>
          <form className="login-form">
            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-btn">Login</button>

            {/* Additional Links */}
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
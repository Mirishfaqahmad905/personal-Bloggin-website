import React, { useState } from 'react';
import '../CompCss/Signup.css'; // Import the CSS file
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);

const Signup = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  console.log(URL);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Send data to the backend API
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert('Account created successfully!');
        // Clear form after successful submission
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while creating your account.');
    }
  };

  return (
    <div className="signup-page">
      {/* Left Side: Image */}
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1738645040~exp=1738648640~hmac=5f0d35377f9a75e4ff96e0ec3cfb1fe1f99e0ce9591e214bad683fa1854f7e5d&w=740"
          alt="Signup Illustration"
        />
      </div>

      {/* Right Side: Signup Form */}
      <div className="form-section">
        <div className="signup-container">
          <h2>Create an Account</h2>
          <p>Sign up to get started with our platform.</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                minLength="6"
                autoComplete="off"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength="6"
                autoComplete="off"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            {/* Additional Links */}
            <div className="additional-links">
              <a href="/login">Already have an account? Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

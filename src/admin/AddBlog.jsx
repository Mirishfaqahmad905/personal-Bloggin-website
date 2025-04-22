import React, { useState } from 'react';
import '../CompCss/AddBlog.css'; // Import CSS for styling

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Technology', // Default value
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/bloge/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Blog post added successfully!');
        setFormData({
          title: '',
          category: 'Technology',
          image: '',
          description: '',
        });
      } else {
        alert('Failed to add blog post.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the blog post.');
    }
  };

  return (
    <div className="add-blog-container">
      <h1>Add a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="add-blog-form">
        {/* Title Field */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category Field */}
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Finance">Finance</option>
            <option value="AI & Machine Learning">AI & Machine Learning</option>
            <option value="Health & Fitness">Health & Fitness</option>
            <option value="Marketing & Branding">Marketing & Branding</option>
            <option value="Crypto & Blockchain">Crypto & Blockchain</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Brand">Brands</option>
            <option value="Other">Other</option>

          </select>
        </div>

        {/* Image URL Field */}
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Blog Post
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

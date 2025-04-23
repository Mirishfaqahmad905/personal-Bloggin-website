import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CompCss/Food.css';
const Food = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);
  // Fetch food blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://bloge-3yc3-68bihfv1r-mir-ishfaq-ahmads-projects.vercel.app/api/bloge');
        // Filter only food-related blogs
        const foodBlogs = response.data.filter(
          (blog) => blog.category.toLowerCase() === 'food'
        );
        setBlogs(foodBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);
  // Toggle expand/collapse
  const toggleExpand = (index) => {
    setExpandedBlogIndex(expandedBlogIndex === index ? null : index);
  };
  return (
    <div className="food-page">
      <h1 className="food-title">Food Blogs</h1>
      <div className="food-grid-container">
        {blogs.map((blog, index) => (
          <div key={index} className="food-card-item">
            <img
              src={blog.image}
              alt={blog.title}
              className="food-card-image"
            />
            <h3 className="food-card-title">{blog.title}</h3>
            <p className="food-card-description">
              {expandedBlogIndex === index
                ? blog.description
                : `${blog.description.substring(0, 100)}...`}
            </p>
            <button
              className="food-card-button"
              onClick={() => toggleExpand(index)}
            >
              {expandedBlogIndex === index ? 'Collapse' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

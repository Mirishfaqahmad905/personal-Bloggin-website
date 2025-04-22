
import '../../CompCss/lifeStyle.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LifeStyle = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bloge');
        const lifestyleBlogs = response.data.filter(
          (blog) => blog.category.toLowerCase() === 'lifestyle'
        );
        setBlogs(lifestyleBlogs);
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
    <div className="lifestyle-page">
      <h1 className="lifestyle-title">Lifestyle Blogs</h1>
      <div className="lifestyle-grid-container">
        {blogs.map((blog, index) => (
          <div key={index} className="lifestyle-card-item">
            <img src={blog.image} alt={blog.title} className="lifestyle-card-image" />
            <h3 className="lifestyle-card-title">{blog.title}</h3>
            <p className="lifestyle-card-description">
              {expandedBlogIndex === index
                ? blog.description
                : `${blog.description.substring(0, 100)}...`}
            </p>
            <button
              className="lifestyle-card-button"
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

export default LifeStyle;
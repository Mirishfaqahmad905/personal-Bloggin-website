import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../CompCss/technology.css'; // Import the CSS file
const Technology = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bloge');
        const techBlogs = response.data.filter(
          (blog) => blog.category.toLowerCase() === 'technology'
        );
        setBlogs(techBlogs);
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
    <div className="technology-page">
      <h1 className="technology-title">Technology Blogs</h1>
      <div className="blog-grid-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card-item">
            <img src={blog.image} alt={blog.title} className="blog-card-image" />
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-card-description">
              {expandedBlogIndex === index
                ? blog.description
                : `${blog.description.substring(0, 100)}...`}
            </p>
            <button
              className="blog-card-button"
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

export default Technology;
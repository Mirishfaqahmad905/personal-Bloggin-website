import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../CompCss/travel.css';
const Travel = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bloge');
        const travelBlogs = response.data.filter(
          (blog) => blog.category.toLowerCase() === 'travel'
        );
        setBlogs(travelBlogs);
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
    <div className="travel-page">
      <h1 className="travel-title">Travel Blogs</h1>
      <div className="travel-grid-container">
        {blogs.map((blog, index) => (
          <div key={index} className="travel-card-item">
            <img src={blog.image} alt={blog.title} className="travel-card-image" />
            <h3 className="travel-card-title">{blog.title}</h3>
            <p className="travel-card-description">
              {expandedBlogIndex === index
                ? blog.description
                : `${blog.description.substring(0, 100)}...`}
            </p>
            <button
              className="travel-card-button"
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
export default Travel;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../CompCss/Ai_machine_.css';

const AiandmachineLearning = () => {
  const [data, setGetdata] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which blog is expanded

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bloge');
        const aiData = response.data.filter(
          (blog) => blog.category.toLowerCase() === 'ai & machine learning'
        );
        setGetdata(aiData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  // Function to toggle expand/collapse
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle between expanded and collapsed states
  };

  return (
    <div className="container_ai_machine_learning" style={{ marginTop: 100 }}>
      {/* Header Section */}
      <div className="header_machine_learning">
        <h1>AI & Machine Learning</h1>
        <div className="image_url_">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1unDZ20yEi60-9xX2TVC8eKgEpuAl7pG7w&s"
            alt="AI Header"
          />
        </div>
        <div className="description_goes_here">
          <p>
            Artificial Intelligence and Machine Learning are transforming industries and shaping the future of technology.
          </p>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="blog_cards_container">
        {data.map((blog, index) => (
          <div key={index} className="blog_card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            {/* Show only a short description initially */}
            <p>
              {expandedIndex === index
                ? blog.description // Full description when expanded
                : `${blog.description.substring(0, 100)}...`}{' '}
              {/* Truncated description when collapsed */}
            </p>
            {/* Button to toggle expand/collapse */}
            <button onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? 'Collapse' : 'Read More'}
            </button>
          </div>
        ))}
      </div>

      {/* Ad Space */}
      <div className="ad_space">
        <h2>Sponsored Content</h2>
        <div className="ad_placeholder">Ad Placeholder</div>
      </div>

      {/* Collage Section */}
      <div className="collage_section">
        <div className="collage_item">
          <img src="/path-to-collage-image-1.jpg" alt="Collage Item 1" />
          <p>Caption for Collage Image 1</p>
        </div>
        <div className="collage_item">
          <img src="/path-to-collage-image-2.jpg" alt="Collage Item 2" />
          <p>Caption for Collage Image 2</p>
        </div>
        <div className="collage_item">
          <img src="/path-to-collage-image-3.jpg" alt="Collage Item 3" />
          <p>Caption for Collage Image 3</p>
        </div>
      </div>
    </div>
  );
};

export default AiandmachineLearning;
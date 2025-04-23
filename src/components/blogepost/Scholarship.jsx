import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../CompCss/Scholarship.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Scholarship = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('personal-blogging-website-2gir.vercel.app
/get_scholarship_post')
      .then((res) => {
        setData(res.data.data); // Adjust according to API response structure
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []); // ✅ Added dependency array to prevent infinite API calls

  return (
    <div className="scholarship-container">
      {/* Header Section */}
      <header className="scholarship-header">
        <h1>Explore Scholarships</h1>
        <p>Find the perfect opportunity to fund your education!</p>
      </header>

      {/* Scholarship List Section */}
      <section className="scholarship-list">
        {data.length > 0 ? (
          data.map((scholarship, index) => (
            <div key={index} className="scholarship-item">
              {/* Image Section */}
              <div className="scholarship-image">
                <img src={scholarship.image || "default-image.jpg"} alt={scholarship.title} />
              </div>

              {/* Content Section */}
              <div className="scholarship-details">
                <h2>{scholarship.title}</h2>
                <p className="description">{scholarship.description}</p>

                <ul className="details-list">
                  <li><strong>Country:</strong> {scholarship.country}</li>
                  <li><strong>Eligibility:</strong> {scholarship.eligibilityCriteria}</li>
                  <li><strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}</li>
                  <li><strong>Benefits:</strong> {Array.isArray(scholarship.benefits) ? scholarship.benefits.join(', ') : ''}</li>
                  <li><strong>Application Process:</strong> {scholarship.applicationProcess}</li>
                </ul>

                <div className="action-buttons">
                  <a href={scholarship.officialLink} target="_blank" rel="noopener noreferrer" className="apply-button">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="loading-message">Loading scholarships...</p>
        )}
      </section>
    </div>
  );
};

export default Scholarship;

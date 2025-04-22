import { useEffect, useState } from "react";
import '../../CompCss/Crypto.css';

const Crypto = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // State to track expand/collapse
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/bloge");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        let data = await response.json();
        // Filter blogs by category "Crypto"
        data = data.filter(blog => blog.category === "Crypto");
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
 <div className="container_crypto__body">
     <div className="crypto-container">
      {/* Header Section */}
      <header className="crypto-header">
        <h1>Crypto Blogs</h1>
         <br />
        <button
          className="expand-collapse-btn"
          onClick={() => setIsExpanded(prevState => !prevState)} // Toggle expand/collapse state
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </header>

      {/* Blog List Section */}
      <div className={`blog-container ${isExpanded ? "expanded" : "collapsed"}`}>
        {isExpanded && blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2 className="blog-title">{blog.title}</h2>
            {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>

      {/* Advertisement Section */}
      <div className="ad-section">Ad Space (Coming Soon)</div>
    </div>
 </div>
  );
};

export default Crypto;

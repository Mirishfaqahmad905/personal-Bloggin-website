import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../adminCss/dashboard.css"; // Import the CSS file
import AddBlog from "../AddBlog";
import Scholarship from "../ScholarshipPost";
import Logout from "../Logout";
import { useSelector } from "react-redux";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state
  const [activeComponent, setActiveComponent] = useState(null); // Active component state
  const [token, setToken] = useState(null); // Token state
  const navigate = useNavigate(); // Navigation hook
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log("authentication state"+isLoggedIn);
  useEffect(() => {
    const storedToken = localStorage.getItem("token"); // Retrieve token from localStorage
//   this is the code i have writtern for storetokken 
    if (!storedToken) {
      // navigate("/login"); // Redirect to login if token is missing
    } else {
      setToken(storedToken); // Store token in state
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
    {isLoggedIn ? (<>
    

  <div className="dashboard" style={{ marginTop: 45 }}>
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button
                onClick={() => handleNavigation("blog")}
                className={activeComponent === "blog" ? "active" : ""}
              >
                Add Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("scholarship")}
                className={activeComponent === "scholarship" ? "active" : ""}
              >
                Add Scholarship
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("editBlog")}
                className={activeComponent === "editBlog" ? "active" : ""}
              >
                Edit Blogs
              </button>
            </li>
            <li>
              <button onClick={''}
              >
             <Logout/>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <section className="content">
          <div className="container">
            {/* Conditional Rendering */}
            {activeComponent === "blog" && <AddBlog token={token} />}
            {activeComponent === "scholarship" && <Scholarship token={token} />}
            {!activeComponent && (
              <>
                <h3>Welcome to Your Dashboard</h3>
                <p>
                  This is the main content area where you can manage your posts,
                  blogs, and scholarships.
                </p>
              </>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        {/* <p>&copy; {new Date().getFullYear()} The Writing Desk. All rights reserved.</p> */}
      </footer>
    </div>

    </>
    ):
     <>
       <p>plesae login first</p>
      </>
    }

  
        </>
  );
};

export default Dashboard;
// dashboard 
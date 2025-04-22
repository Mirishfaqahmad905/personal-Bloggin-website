import React from 'react';
import '../CompCss/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm Mir Ishfaq Ahmad, a passionate web developer dedicated to creating meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who Am I?</h2>
          <p>
            My name is Mir Ishfaq Ahmad, and I am a web developer with a love for technology and storytelling. I have always been fascinated by the power of the internet to connect people and share knowledge across the globe. This passion led me to create this platform—a space where I can provide valuable information about news, events, and topics that matter.
          </p>
          <p>
            Through this website, I aim to bring you the latest updates on global events, lifestyle tips, technological advancements, and much more. My goal is to make this platform a reliable source of information for people all over the world.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://via.placeholder.com/400x400?text=Profile+Image"
            alt="Mir Ishfaq Ahmad"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>My Mission</h2>
        <p>
          My mission is simple: to inform, inspire, and engage. Whether it's breaking news, insightful articles, or practical guides, I want to ensure that my content adds value to your life. I believe that knowledge empowers individuals, and I strive to contribute to that empowerment through this platform.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <ul className="skills-list">
          <li>Web Development</li>
          <li>Frontend Design</li>
          <li>Content Creation</li>
          <li>SEO Optimization</li>
          <li>User Experience (UX)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions, suggestions, or just want to say hello, feel free to reach out! You can contact me via email or connect with me on social media.
        </p>
        <div className="social-icons">
          <a href="mailto:mirishfaq@example.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com/in/mirishfaq" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/mirishfaq" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/mirishfaq" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
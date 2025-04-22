import React, { useState, useEffect } from 'react';
import '../CompCss/Carousel.css'; // Import the CSS file

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://activebrainacademy.ch/wp-content/uploads/2022/07/blog-1.png',
    'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1683535508596-9216de2ad64b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/2023556247/photo/celebrate-pickleball-point.webp?s=1024x1024&w=is&k=20&c=G-21JaowH-ykcVrQREePzRnTbU-rjMdc2WWx4J7ccr8=',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev-btn" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-btn next-btn" onClick={goToNext}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
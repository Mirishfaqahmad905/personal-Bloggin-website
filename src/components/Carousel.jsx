import React, { useState, useEffect } from 'react';
import '../CompCss/Carousel.css'; // Import the CSS file

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://i.guim.co.uk/img/media/d059b58efe8ce50d15639f76448becdeec69bc9b/0_184_7200_4320/master/7200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8a521e0177e2a9aa0e9a1cdde2d5d6cc',
    'https://via.placeholder.com/800x400?text=Slide+3',
    'https://via.placeholder.com/800x400?text=Slide+4',
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
import React, { useState } from 'react';
import '../components/styles/Carousel.css';
import flch from '../assets/img/flch.svg';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev-btn" onClick={handlePrev}><img src={flch}/></button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="artBan" />
      <button className="carousel-btn next-btn" onClick={handleNext}><img src={flch}/></button>
    </div>
  );
};

export default Carousel;

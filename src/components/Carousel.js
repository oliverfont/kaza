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

  // Compteur de photos
  const photoCounter = `${currentIndex + 1}/${images.length}`;

  // Condition pour afficher ou masquer les boutons de navigation
  const showNavigationButtons = images.length > 1;

  return (
    <div className="carousel-container">
      {showNavigationButtons && (
        <button className="carousel-btn prev-btn" onClick={handlePrev}><img className='flch' src={flch} alt="Previous"/></button>
      )}
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="artBan" />
      {showNavigationButtons && (
        <button className="carousel-btn next-btn" onClick={handleNext}><img className='flch' src={flch} alt="Next"/></button>
      )}
      <p className="photo-counter">{photoCounter}</p>
    </div>
  );
};

export default Carousel;

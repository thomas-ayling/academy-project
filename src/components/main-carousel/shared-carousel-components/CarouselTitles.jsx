import React from 'react';
import './CarouselTitles.css';

const CarouselTitles = ({ slides, current, classNames }) => {
  return (
    <div className='title-wrapper'>
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-title ${index === current && 'active-carousel-title'} ${classNames}`}>
          {slide.title}
        </div>
      ))}
    </div>
  );
};

export default CarouselTitles;

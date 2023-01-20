import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarouselTitles.css';

const CarouselTitles = ({ slides, current, isLink, type }) => {
  const navigate = useNavigate();

  const handleClickLink = (id) => {
    navigate(`/case-study/${id}`);
  };

  const wrapperClassNames =`${type.includes('header-single') && 'title-wrapper-header-single'} 
                            ${type.includes('header-single-description') && 'title-wrapper-header-single'} 
                            ${type.includes('header-multi') && 'title-wrapper-header-multi'} `;

  return (
    <div className={`title-wrapper ${wrapperClassNames}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-title ${isLink && 'carousel-title-link'} ${index === current && 'active-carousel-title'}`}
          onClick={() => {
            isLink && handleClickLink(slides[current].id);
          }}
        >
          {slide.title}
        </div>
      ))}
    </div>
  );
};

export default CarouselTitles;
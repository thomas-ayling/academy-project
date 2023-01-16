import React from 'react';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';
import '../shared-carousel-components/CarouselTextbox.css';

const CarouselTextbox = ({ slides, current }) => {


  return (
    <div className='textbox-wrapper'>
      {slides.map((slide, index) => (
        <div details={index} key={index} className={index === current ? 'carousel-textbox active-carousel-textbox' : 'carousel-textbox'}>
          <MarkdownComponent markdownText={slide.text} classNames={'card-text'} />
        </div>
      ))}
    </div>
  );
};

export default CarouselTextbox;

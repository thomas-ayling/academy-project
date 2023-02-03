import './CaseStudyCarousel.css';
import { useState } from 'react';

import TitleSlider from './sub-components/TitleSlider';
import ImageSlider from './sub-components/ImageSlider';
import DescriptionSlider from './sub-components/DescriptionSlider';
import ButtonSlider from './sub-components/ButtonSlider';
import { StyledHr } from '../../../styles/styles';

const CaseStudyCarousel = ({pageData }) => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const length = pageData.length;

  const resizeObserver = new ResizeObserver((entries) => {
    setWindowWidth(entries[0].contentRect.width);
  });

  resizeObserver.observe(document.body);

  const clickLeft = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent((prevCurrent) => prevCurrent - 1);
  };

  const clickRight = () => {
    current === length - 1 ? setCurrent(0) : setCurrent((prevCurrent) => prevCurrent + 1);
  };

  return (
    <div className='case-study-carousel-wrapper'>
      <div className='case-study-carousel-inner-wrapper'>
        <TitleSlider current={current} titles={pageData.map((page) => page.title)} />
        <StyledHr />
        <div className='case-study-carousel-container'>
          <div className='case-study-carousel-image-slider-container'>
            <ImageSlider current={current} windowWidth={windowWidth} pageData={pageData} />
          </div>
          <div className='case-study-carousel-content'>
            <DescriptionSlider current={current} overviews={pageData.map((page) => page.overview)} />
            <ButtonSlider current={current} pageData={pageData} />
          </div>
        </div>
        <div className='case-study-carousel-arrows'>
          <div className='case-study-carousel-arrow-left' onClick={clickLeft}></div>
          <div className='case-study-carousel-page'>
            {current + 1} / {length}
          </div>
          <div className='case-study-carousel-arrow-right' onClick={clickRight}></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarousel;

import './CaseStudyCarousel.css';
import bodyCarouselData from '../../service/CaseStudyCarouselMockService';
import { useState } from 'react';

import ImageSlider from './sub-components/ImageSlider';
import TitleSlider from './sub-components/TitleSlider';
import DescriptionSlider from './sub-components/DescriptionSlider';
import ButtonSlider from './sub-components/ButtonSlider';

const CaseStudyCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const currentUrl = `case-studies/${bodyCarouselData[current].id}`;
  const length = bodyCarouselData.length;

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
    <div className='body-carousel-wrapper'>
      <h1 className='body-carousel-page-title'>Case Studies</h1>
      <div className='body-carousel-case-study-container'>
        <div className='body-carousel-image-slider-container'>
          <ImageSlider current={current} currentUrl={currentUrl} windowWidth={windowWidth} dataArray={bodyCarouselData} />
        </div>
        <div className='body-carousel-case-study-content'>
          <TitleSlider current={current} dataArray={bodyCarouselData} />
          <div className='case-study-scrollable-description'>
            <DescriptionSlider current={current} dataArray={bodyCarouselData} />
            <div className='body-carousel-case-study-scroll-arrows'>
              <div className='body-carousel-case-study-scroll-up'></div>
              <div className='body-carousel-case-study-scroll-down'></div>
            </div>
          </div>
          <ButtonSlider current={current} currentUrl={currentUrl} dataArray={bodyCarouselData} />
        </div>
      </div>
      <div className='body-carousel-arrows'>
        <div className='body-carousel-arrow-left' onClick={clickLeft}></div>
        <div className='body-carousel-case-study-page'>
          {current + 1} / {length}
        </div>
        <div className='body-carousel-arrow-right' onClick={clickRight}></div>
      </div>
    </div>
  );
};

export default CaseStudyCarousel;
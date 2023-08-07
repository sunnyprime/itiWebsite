import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 80vw;
  max-width: 400px;
  height: 60vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover; /* Fix image coverage issue */
  background-position: center;
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform: translateX(${({ active, slideWidth }) => (active ? '0' : slideWidth)});
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
`;

const NextArrow = styled(Arrow)`
  right: 0;
`;

const PrevArrow = styled(Arrow)`
  left: 0;
`;

const Closure = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const images = [
    'http://www.spateliti.com/images/banner1.jpg',
    'http://www.spateliti.com/images/banner2.jpg',
    'http://www.spateliti.com/images/banner3.jpg',
    'http://www.spateliti.com/images/banner4.jpg',
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    setSlideWidth(`-${currentIndex * 100}%`);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide
          key={index}
          active={currentIndex === index}
          slideWidth={slideWidth}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <NextArrow onClick={goToNextSlide}>›</NextArrow>
      <PrevArrow onClick={goToPrevSlide}>‹</PrevArrow>
    </SliderContainer>
  );
};

export default Closure;

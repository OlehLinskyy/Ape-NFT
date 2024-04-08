import css from './Arts.module.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from 'helpers/useWindowDimensions';
import sliderOne from '../../assets/jpg/Slider-1.jpg';
import sliderOne2x from '../../assets/jpg/Slider-1-2x.jpg';
import sliderTwo from '../../assets/jpg/Slider-2.jpg';
import sliderTwo2x from '../../assets/jpg/Slider-2-2x.jpg';
import sliderThree from '../../assets/jpg/Slider-3.jpg';
import sliderThree2x from '../../assets/jpg/Slider-3-2x.jpg';
import sliderFour from '../../assets/jpg/Slider-4.jpg';
import sliderFour2x from '../../assets/jpg/Slider-4-2x.jpg';
import sliderFive from '../../assets/jpg/Slider-5.jpg';
import sliderFive2x from '../../assets/jpg/Slider-5-2x.jpg';
import sliderSix from '../../assets/jpg/Slider-6.jpg';
import sliderSix2x from '../../assets/jpg/Slider-6-2x.jpg';
import useMediaQuery from 'helpers/useMediaQuery';

function Arts() {
  const [swiperRef, setSwiperRef] = useState(null);
  const { width } = useWindowDimensions();
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(max-width:1279px)');
  const slidesPerView = isMobile ? (width / 100) * 0.44 : isTablet ? 2 : 4;
  function handlePrev() {
    swiperRef.slidePrev();
  }
  function handleNext() {
    swiperRef.slideNext();
  }
  const data = [
    {
      slider: sliderOne,
      slider2x: sliderOne2x,
    },
    {
      slider: sliderTwo,
      slider2x: sliderTwo2x,
    },
    {
      slider: sliderThree,
      slider2x: sliderThree2x,
    },
    {
      slider: sliderFour,
      slider2x: sliderFour2x,
    },
    {
      slider: sliderFive,
      slider2x: sliderFive2x,
    },
    {
      slider: sliderSix,
      slider2x: sliderSix2x,
    },
  ];
  return (
    <section id="arts" className={isMobile ? 'container_helper' : 'container'}>
      <h3>collection</h3>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={isMobile}
        freeMode={isMobile}
        spaceBetween={24}
        onSwiper={setSwiperRef}
      >
        <ul className={css.card_list}>
          {data.map((data, id) => (
            <SwiperSlide key={id} className={css.swiper_card}>
              <li>
                <img
                  className={css.slide}
                  src={data.slider}
                  srcSet={`${data.slider} 1x, ${data.slider2x} 2x`}
                  alt={`nft ${id}`}
                />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
      <div className={css.controllers}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
}

export default Arts;

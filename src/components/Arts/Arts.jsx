import css from './Arts.module.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from 'helpers/useWindowDimensions';
import sliderOne from '../../assets/Slider-1.png';
import sliderTwo from '../../assets/Slider-2.png';
import sliderThree from '../../assets/Slider-3.png';
import sliderFour from '../../assets/Slider-4.png';
import sliderFive from '../../assets/Slider-5.png';
import sliderSix from '../../assets/Slider-6.png';
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
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderFour,
    sliderFive,
    sliderSix,
  ];
  return (
    <section className={isMobile ? 'container_helper' : 'container'}>
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
                <img className={css.slide} src={data} alt={`nft ${id}`} />
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

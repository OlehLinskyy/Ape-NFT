import css from './Cards.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useMediaQuery from 'helpers/useMediaQuery';
import useWindowDimensions from 'helpers/useWindowDimensions';
import Card from './Card/Card';
import React, { useState } from 'react';


function Cards({ data }) {
  const isMobile = useMediaQuery('(max-width:767px)');
  const { width } = useWindowDimensions();
  const slidesPerView = (width / 100) * 0.44;

  const [swiperRef, setSwiperRef] = useState(null);

  function handlePrev() {
    swiperRef.slidePrev()
  }
  function handleNext() {
    swiperRef.slideNext()
  }

  return (
    <>
      {isMobile ? (
        <div>
          <Swiper
            slidesPerView={slidesPerView}
            centeredSlides={true}
            freeMode={true}
            spaceBetween={24}
            onSwiper={setSwiperRef}
          >
            <ul className={css.card_list}>
              {data.map((data, id) => (
                <SwiperSlide key={id} className={css.swiper_card}>
                  <Card data={data} />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
          <div className={css.controllers}>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : (
        <ul className={css.card_list}>
          {data.map((data, id) => (
            <Card key={id} data={data} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Cards;

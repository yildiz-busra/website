import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlidingHeroSection = () => {
  const slides = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
      },
      {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
      },
      {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
      },
  ];

  return (
    <div className="container my-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <img src={slide.src} alt={`Slide ${index + 1}`} className="img-fluid w-100" />
              <h3 className="mt-3">{slide.caption}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingHeroSection;

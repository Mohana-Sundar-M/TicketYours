import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerCarousel: React.FC = () => {
  const swiperRef = useRef<any>(null); // Create a ref to store the swiper instance

  const banners = [
    { id: 1, image: 'https://assetscdn1.paytm.com/images/catalog/view_item/2952472/7323695253721.jpg?format=webp&imwidth=500', alt: 'Banner 1' },
    { id: 2, image: 'https://assetscdn1.paytm.com/images/catalog/view_item/2915529/1730200474608.jpg?format=webp&imwidth=500', alt: 'Banner 2' },
    { id: 3, image: 'https://assetscdn1.paytm.com/images/catalog/view_item/2919837/1730444062619.jpg?format=webp&imwidth=500', alt: 'Banner 3' },
  ];

  // Navigate to the previous slide
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev(); // Use Swiper's API to go to the previous slide
  };

  // Navigate to the next slide
  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext(); // Use Swiper's API to go to the next slide
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '30vh' }}>
      {/* Swiper Component */}
      <Swiper
        ref={swiperRef} // Attach the swiperRef to the Swiper component
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
        modules={[Pagination]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={banner.image}
              alt={banner.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the image covers the slide without leaving spaces
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        onClick={handlePrevClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          width: '40px', // Increased size
          height: '40px', // Increased size
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: '20px', height: '20px' }}>
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          width: '40px', // Increased size
          height: '40px', // Increased size
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: '20px', height: '20px' }}>
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default BannerCarousel;

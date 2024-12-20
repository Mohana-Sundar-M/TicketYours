import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../css/BannerCarousel.css';

const BannerCarousel: React.FC = () => {
  const swiperRef = useRef<any>(null); // Create a ref to store the swiper instance

  const banners = [
    { id: 1, image: 'https://assetscdn1.paytm.com/images/catalog/view_item/2952472/7323695253721.jpg?format=webp&imwidth=500', alt: 'Banner 1' },
    { id: 2, image: 'https://assetscdn1.paytm.com/images/catalog/view_item/2915529/1730200474608.jpg?format=webp&imwidth=500', alt: 'Banner 2' },
    { id: 3, image: 'https://assetscdn1.paytm.com/images/catalog/view_item/2919837/1730444062619.jpg?format=webp&imwidth=500', alt: 'Banner 3' },
  ];

  // Navigate to the previous slide
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Navigate to the next slide
  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Autoplay functionality using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current.swiper.slideNext();
    }, 3000); // Change this interval value to control the autoplay speed

    // Cleanup interval on component unmount to prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '30vh' }}>
      {/* Swiper Component */}
      <Swiper
        ref={swiperRef} // Attach the swiperRef to the Swiper component
        pagination={{ clickable: true }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
        modules={[Pagination]}
        speed={800} // Set speed of the transition (in ms)
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3 seconds interval
        effect="slide" // Add smooth transition effect
        onSlideChange={() => console.log('Slide changed!')} // Optional: logging slide changes
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
                transition: 'transform 0.8s ease-in-out', // Smooth transition on the image as well
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
          width: '40px',
          height: '40px',
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
          width: '40px',
          height: '40px',
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

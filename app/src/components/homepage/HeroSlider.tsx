import React from 'react';

const HeroSlider: React.FC = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          <div className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/slide1.jpg')" }}></div>
          <div className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/slide2.jpg')" }}></div>
          <div className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/slide3.jpg')" }}></div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
        Welcome to TheaterBooking
      </div>
    </div>
  );
};

export default HeroSlider;

import React from 'react';

import HeroSlider from '../components/homepage/HeroSlider';
import BannerSection from '../components/homepage/BannerSection';
import PopularMovies from '../components/homepage/PopularMovies';
import Footer from '../components/homepage/Footer';
import Nav from '../components/public/NavBar';

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav/>
      <HeroSlider />
      <BannerSection />
      <PopularMovies />
      <Footer />
    </div>
  );
};

export default HomePage;

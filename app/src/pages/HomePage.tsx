import React, { useEffect, useState } from 'react';  
import Navbar from '../components/homepage/NavBar';  
import MovieList from '../components/homepage/MovieList';  
import Footer from '../components/homepage/Footer';  
import LocationChanger from '../components/homepage/LocationChanger';  
import { Modal } from '@mui/material';
import Header from '../components/public/Banner';

const HomePage: React.FC = () => {
  const [showLocationChanger, setShowLocationChanger] = useState(false);

  useEffect(() => {
    const firstVisit = localStorage.getItem('firstVisit');

    if (!firstVisit) {
      console.log('First visit detected. Showing LocationChanger.');  
      setShowLocationChanger(true);
      localStorage.setItem('firstVisit', 'true');  
    } else {
      console.log('Returning visit detected. Not showing LocationChanger.');  
    }
  }, []);

  const handleLocationClose = () => {
    console.log('LocationChanger closed.');  
    setShowLocationChanger(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <div className="flex-grow">
        <MovieList />
      </div>
      <Footer />
      <Modal
        open={showLocationChanger}
        onClose={handleLocationClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LocationChanger onClose={handleLocationClose} />
      </Modal>
    </div>
  );
};

export default HomePage;

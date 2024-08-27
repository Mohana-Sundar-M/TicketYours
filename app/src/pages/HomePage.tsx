import React, { useEffect, useState } from 'react';  // Importing React library and hooks
import Navbar from '../components/homepage/NavBar';  // Importing Navbar component
import MovieList from '../components/homepage/MovieList';  // Importing MovieList component
import Footer from '../components/homepage/Footer';  // Importing Footer component
import LocationChanger from '../components/homepage/LocationChanger';  // Importing LocationChanger component
import { Modal } from '@mui/material';
import Header from '../components/public/Banner';

const HomePage: React.FC = () => {
  const [showLocationChanger, setShowLocationChanger] = useState(false);

  useEffect(() => {
    const firstVisit = localStorage.getItem('firstVisit');

    if (!firstVisit) {
      console.log('First visit detected. Showing LocationChanger.');  // Log to confirm first visit
      setShowLocationChanger(true);
      localStorage.setItem('firstVisit', 'true');  // Set the flag to indicate the first visit
    } else {
      console.log('Returning visit detected. Not showing LocationChanger.');  // Log for returning visits
    }
  }, []);

  const handleLocationClose = () => {
    console.log('LocationChanger closed.');  // Log to confirm modal close
    setShowLocationChanger(false);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <MovieList />
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
          <LocationChanger
            
            onClose={handleLocationClose}
          />
</Modal>

    </div>
  );
};

export default HomePage;

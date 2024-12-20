import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MoviesPage from './pages/MoviesPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import PaymentPage from './pages/PaymentPage';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Theater from './pages/Theater';
import TheaterSearch from './pages/TheaterSearch';
import SeatBooking from './pages/SeatBooking';
import Dashboard from './pages/Admin/Dashboard';
import { useAuth } from './context/AuthContext'; // Import the useAuth hook
import MainHomePage from './pages/MainHomePage';

const AppRoutes: React.FC = () => {
  const { isLoggedIn } = useAuth(); // Get the login status from the context
  const location = useLocation(); // Get the current location

  return (
    <AnimatePresence mode="wait"> {/* Ensure the exit of previous component finishes before entry */}
      <motion.div
        key={location.pathname} // Unique key for each page for transition
        initial={{ opacity: 0 }} // Fade in effect
        animate={{ opacity: 1 }} // Fade in to full opacity
        exit={{ opacity: 0 }} // Fade out effect on exit
        transition={{ 
          type: 'tween', // Using tween for quicker, linear transitions
          duration: 0.3,  // Short duration for a faster transition
        }}
        style={{ position: 'absolute', width: '100%' }} // Ensure each route takes full width
      >
        <Routes location={location}>
          <Route index element={<MainHomePage />} />  {/* Default route */}
          <Route path="/v3/movies/city/:cityId" element={<MoviesPage />} />
          <Route path="booking" element={<SeatBooking />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Only show /login if the user is not logged in */}
          <Route path="login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="movie/:id" element={<Movie />} />
          {/* Redirect to login if user is not logged in */}
          <Route path="profile/*" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="theater/:id" element={<Theater />} />
          <Route path="theater-search" element={<TheaterSearch />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppRoutes;

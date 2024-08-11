import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import PaymentPage from './pages/PaymentPage';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Theater from './pages/Theater';
import TheaterSearch from './pages/TheaterSearch';
import HomePage from './pages/HomePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />  {/* Default route */}
      <Route path="movies" element={<MoviesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<Login />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="profile/*" element={<Profile />} />
      <Route path="theater/:id" element={<Theater />} />
      <Route path="theater-search" element={<TheaterSearch />} />
    </Routes>
  );
};

export default AppRoutes;

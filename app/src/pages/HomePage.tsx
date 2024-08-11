import React from 'react';  // Importing React library for building UI components
import Navbar from '../components/homepage/NavBar';  // Importing Navbar component
import Banner from '../components/homepage/Banner';  // Importing Banner component
import MovieList from '../components/homepage/MovieList';  // Importing MovieList component
import Footer from '../components/homepage/Footer';  // Importing Footer component

/**
 * HomePage component is the main page that aggregates several UI components
 * to create the homepage view of the application.
 *
 * - Navbar: Displays the navigation bar at the top of the page.
 * - Banner: Shows a promotional banner or featured content.
 * - MovieList: Renders a list of movies or related content.
 * - Footer: Displays the footer at the bottom of the page.
 */
const HomePage: React.FC = () => {
  return (
    <div>
      {/* Navbar component for top navigation */}
      <Navbar />
      {/* Banner component for showcasing featured content */}
      <Banner />
      {/* MovieList component to display a list of movies */}
      <MovieList />
      {/* Footer component for bottom navigation and additional links */}
      <Footer />
    </div>
  );
};

export default HomePage;  // Exporting HomePage component for use in other parts of the application

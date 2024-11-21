import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/movie/Header'; 
import DateAndFilters from '../components/theater/DateNavigation';
import Filters from '../components/movie/DateAndFilters';
import NavBar from '../components/public/NavBar2';
import { useGetMovieDetailsQuery } from '../services/moviesApi';
import type { Movie } from '../types/moviesTypes'; 
import LoadingSpinner from '../components/public/LoadingSpinner';
import TheaterCard from '../components/movie/TheaterCard';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch movie details
  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(id || '');

  if (isLoading) {
    console.log("Loading movie details...");
    return <LoadingSpinner />;
  }

  if (error || !movie) {
    console.log("Error fetching movie details:", error);
    return <div>Error fetching movie details</div>;
  }

  console.log("Movie details:", movie);

  return (
    <div className="app mx-auto bg-gray-100">
      <NavBar />
      <Header movie={movie as unknown as Movie} /> {/* Ensure correct typing */}
      <DateAndFilters />
      <Filters/>
      <TheaterCard selectedMovieId={movie.id.toString()} /> {/* Pass the ID as string */}
    </div>
  );
};

export default Movie;

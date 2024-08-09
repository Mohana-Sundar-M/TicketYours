//Theater Search Page
import React from 'react';
import '../index.css';

import Header from '../components/theaterSearch/Header';
import SearchBar from '../components/theaterSearch/SearchBar';
import TheaterList from '../components/theaterSearch/TheaterList'; 

const TheaterSearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar />
      <TheaterList />
    </div>
  );
};

export default TheaterSearch;

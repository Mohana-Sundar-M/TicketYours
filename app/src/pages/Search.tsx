//Theater Page
import React from 'react';
import '../index.css';

import Header from '../components/search/Header';
import SearchBar from '../components/search/SearchBar';
import TheaterList from '../components/search/TheaterList'; 

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar />
      <TheaterList />
    </div>
  );
};

export default App;

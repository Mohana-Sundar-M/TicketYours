// The Page To Show When a Theater Clicked from Search
import React from 'react';
import Header from '../components/theater/Header';
import DateNavigation from '../components/theater/DateNavigation';
import TheaterCard from '../components/theater/TheaterCard';
import { theaters } from '../data/dummyData';
import NavBar from '../components/theater/NavBar';

const App: React.FC = () => {
  const theater = theaters[0]; // Assuming you want to display the first theater

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <Header
            name={theater.name}
            images={theater.images}
            address={theater.address}
            directionsLink={theater.directionsLink}
          />
      <DateNavigation />
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white ">
        <TheaterCard theater={theater} />
      </div>
    </div>
  );
};

export default App;
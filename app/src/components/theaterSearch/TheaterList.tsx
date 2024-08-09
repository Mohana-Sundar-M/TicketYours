import React from 'react';
import TheaterCard from './TheaterCard';
import { theaters } from '../../data/dummyData'; // Adjust the path as necessary Dummy Data

const TheaterList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {theaters.map(theater => (
        <TheaterCard key={theater.id} theater={theater} />
      ))}
    </div>
  );
};

export default TheaterList;

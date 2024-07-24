import React from 'react';
import { dummyData } from '../../data/dummyData';
import { TheaterCard } from './TheaterCard';

export const TheaterList: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {dummyData.map(theater => (
        <TheaterCard key={theater.id} theater={theater} />
      ))}
    </div>
  );
};

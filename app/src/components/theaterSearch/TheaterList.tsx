import React, { useState } from 'react';
import TheaterCard from './TheaterCard';
import SearchBar from '../public/SearchBar';
import { useGetCinemahallsByCityQuery } from '../../services/cinemahallsApi'; 
import { useActiveCity } from '../../context/ActiveCityContext'; 
import LoadingSpinner from '../public/LoadingSpinner';
import { CinemaHall } from '../../types/cinemahallsTypes'; // Import CinemaHall type

const TheaterList: React.FC = () => {
  const { activeCityId } = useActiveCity(); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  const { data, isLoading, error } = useGetCinemahallsByCityQuery(activeCityId.toString());

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredCinemahalls = data?.data?.filter((cinemahall: CinemaHall) =>
    cinemahall.name.toLowerCase().includes(searchQuery)
  ) || [];

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearchChange={handleSearchChange} />
      <div className="mt-4">
        {isLoading ? (
           <LoadingSpinner/>
        ) : error ? (
          <p>Error fetching cinema halls.</p>
        ) : filteredCinemahalls.length > 0 ? (
          filteredCinemahalls.map((cinemahall: CinemaHall) => (
            <TheaterCard key={cinemahall.id} theater={cinemahall} />
          ))
        ) : (
          <p>No cinema halls found</p>
        )}
      </div>
    </div>
  );
};

export default TheaterList;

import React from 'react';
import { useParams } from 'react-router-dom'; // Hook for extracting URL parameters
import Header from '../components/theater/Header'; // Component for displaying theater header information
import DateNavigation from '../components/theater/DateNavigation'; // Component for date navigation
import TheaterCard from '../components/theater/TheaterCard'; // Component for displaying detailed theater information
import { theaters } from '../data/dummyData'; // Import the theater data from a dummy data file
import NavBar from '../components/public/NavBar2'; // Navigation bar component

//this Page Shows the More detail about the theaters and also shows the movies running on that theater with details

const TheaterPage: React.FC = () => {
  // Extract the 'id' parameter from the URL using useParams hook
  const { id } = useParams<{ id: string }>();

  // Convert the extracted ID to a number and ensure it is valid
  const theaterId = id ? parseInt(id, 10) : null;

  // Find the theater from the data array using the ID
  const theater = theaterId ? theaters.find(t => t.id === theaterId) : null;

  // Handle case where the theater is not found
  if (!theater) {
    return <div>Theater not found</div>; // Display a message if the theater is not in the data
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar /> {/* Navigation bar at the top of the page */}
      
      {/* Header component with theater's name, images, address, and directions link */}
      <Header
        name={theater.name}
        images={theater.images}
        address={theater.address}
        directionsLink={theater.directionsLink}
      />

      {/* Component for navigating through different dates */}
      <DateNavigation />

      {/* Main content area with theater details */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white">
        {/* TheaterCard component displaying detailed information about the theater */}
        <TheaterCard theater={theater} />
      </div>
    </div>
  );
};

export default TheaterPage;

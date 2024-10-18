import { useLocation } from 'react-router-dom';
import Header from '../components/theater/Header'; // Component for displaying theater header information
import DateNavigation from '../components/theater/DateNavigation'; // Component for date navigation
import TheaterCard from '../components/theater/TheaterCard'; // Component for displaying detailed theater information
import NavBar from '../components/public/NavBar2'; // Navigation bar component

const Theater = () => {
 
  const location = useLocation();
  const theater = location.state?.theater; // Getting the theater data from the state

  console.log(location.state); // Debugging: Checking the state object

  // Check if theater exists in the state or render a fallback message
  if (!theater) {
    return <div>No theater data found.</div>; // Fallback if theater data is not available
  }

  // Rendering the theater details with Header and TheaterCard
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar /> 
      <Header
        name={theater.name}                // Pass theater name
        images={theater.images}            // Pass theater images
        address={theater.location}         // Pass theater address
        directionsLink={theater.directionsLink} // Pass directions link
      />
      <DateNavigation />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white">
        <TheaterCard cinemaHallId={theater.id.toString()} /> {/* Pass cinemaHallId to TheaterCard */}
      </div>
    </div>
  );
};

export default Theater;

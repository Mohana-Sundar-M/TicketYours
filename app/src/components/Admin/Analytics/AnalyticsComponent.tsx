// At the top of the AnalyticsComponent file
import {
 LineController,   
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
} from 'chart.js';

// Register the required chart components
ChartJS.register(
  CategoryScale, // Register the CategoryScale
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  LineController
);

import React from 'react';
import RevenueTrends from './RevenueTrends';
import TicketsSold from './TicketsSold';
import TopTheaters from './TopTheaters';
import TopMovies from './TopMovies';
import PendingSupportTickets from './PendingTickets';
import UpcomingMovieReleases from './UpcomingMovies';
import TopPerformingMovies from './TopPerformingMovies';
import TopPerformingTheaters from './TopPerformingTheaters';
import Header from './Header';

const AnalyticsComponent: React.FC = () => {
  return (
    <div className="ml-64 p-6">
      <Header/>
      {/* Grid for charts */}
      <div className="grid grid-cols-2 gap-6">
        <RevenueTrends />
        <TicketsSold />
        <TopTheaters />
        <TopMovies />
      </div>

      {/* Grid for other components */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        
        <div className="space-y-6">
          <TopPerformingMovies/>
          <TopPerformingTheaters/>
          <PendingSupportTickets />
          <UpcomingMovieReleases />
         
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;

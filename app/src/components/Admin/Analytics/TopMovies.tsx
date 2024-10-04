import React from 'react';
import ChartComponent from './ChartComponnet';

const TopMovies: React.FC = () => {
  const data = {
    labels: ['Avengers: Endgame', 'Joker'],
    datasets: [
      {
        label: 'Tickets Sold',
        data: [10000, 8000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Revenue',
        data: [100000, 80000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Use 'as const' for type safety
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Top Movies</h3>
      <ChartComponent type="bar" data={data} options={options} />
    </div>
  );
};

export default TopMovies;

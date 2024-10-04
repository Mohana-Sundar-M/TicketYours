import React from 'react';
import ChartComponent from './ChartComponnet';

const TopTheaters: React.FC = () => {
  const data = {
    labels: ['Cineplex Downtown', 'AMC Northshore'],
    datasets: [
      {
        label: 'Tickets Sold',
        data: [5000, 4500],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Revenue',
        data: [50000, 45000],
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
      <h3 className="text-xl font-semibold mb-2">Top Theaters</h3>
      <ChartComponent type="bar" data={data} options={options} />
    </div>
  );
};

export default TopTheaters;

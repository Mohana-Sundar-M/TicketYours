import React from 'react';
import ChartComponent from './ChartComponnet';

const TicketsSold: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tickets Sold',
        data: [100, 120, 130, 140, 150, 110],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
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
      <h3 className="text-xl font-semibold mb-2">Tickets Sold</h3>
      <ChartComponent type="bar" data={data} options={options} />
    </div>
  );
};

export default TicketsSold;

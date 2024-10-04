import React from 'react';
import ChartComponent from './ChartComponnet';

const RevenueTrends: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [50, 100, 150, 100, 200, 150],
        borderColor: 'rgb(255, 99, 132)',
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
      tooltip: {
        callbacks: {
          label: (tooltipItem: { raw: any; }) => {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Revenue Trends</h3>
      <ChartComponent type="line" data={data} options={options} />
    </div>
  );
};

export default RevenueTrends;

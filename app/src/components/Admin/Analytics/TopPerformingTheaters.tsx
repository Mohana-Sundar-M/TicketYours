import React from 'react';

const TopPerformingTheaters: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Top Performing Theaters</h3>
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Theater</th>
            <th className="px-4 py-2">Tickets</th>
            <th className="px-4 py-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">Cineplex Downtown</td>
            <td className="px-4 py-2">5,000</td>
            <td className="px-4 py-2">$50,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">AMC Northshore</td>
            <td className="px-4 py-2">4,500</td>
            <td className="px-4 py-2">$45,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Regal Cinemas</td>
            <td className="px-4 py-2">4,000</td>
            <td className="px-4 py-2">$40,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Landmark Theatres</td>
            <td className="px-4 py-2">3,500</td>
            <td className="px-4 py-2">$35,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Alamo Drafthouse</td>
            <td className="px-4 py-2">3,000</td>
            <td className="px-4 py-2">$30,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformingTheaters;

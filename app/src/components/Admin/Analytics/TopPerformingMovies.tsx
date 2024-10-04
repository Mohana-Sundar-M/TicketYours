import React from 'react';

const TopPerformingMovies: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Top Performing Movies</h3>
      <table className="min-w-full table-auto text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Movie</th>
            <th className="px-4 py-2">Tickets</th>
            <th className="px-4 py-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">Avengers: Endgame</td>
            <td className="px-4 py-2">10,000</td>
            <td className="px-4 py-2">$100,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Joker</td>
            <td className="px-4 py-2">8,000</td>
            <td className="px-4 py-2">$80,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Parasite</td>
            <td className="px-4 py-2">7,000</td>
            <td className="px-4 py-2">$70,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Knives Out</td>
            <td className="px-4 py-2">6,000</td>
            <td className="px-4 py-2">$60,000</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Ford v Ferrari</td>
            <td className="px-4 py-2">5,000</td>
            <td className="px-4 py-2">$50,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformingMovies;

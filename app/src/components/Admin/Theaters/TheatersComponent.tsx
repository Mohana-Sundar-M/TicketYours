import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faSearch, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface Theater {
  name: string;
  location: string;
  status: string;
  seats: number;
  screens: number;
  contact: string;
  revenue: string;
  lastShow: string;
}

const theatersData: Theater[] = [
  { name: 'AMC Theatres', location: 'Los Angeles, CA', status: 'active', seats: 800, screens: 8, contact: '(213) 555-5678', revenue: '$3,500,000', lastShow: '2023-08-15' },
  { name: 'Alamo Drafthouse', location: 'Austin, TX', status: 'active', seats: 600, screens: 6, contact: '(512) 555-3456', revenue: '$1,900,000', lastShow: '2023-09-05' },
  { name: 'Cinemark Theatres', location: 'Chicago, IL', status: 'pending', seats: 1000, screens: 10, contact: '(312) 555-9012', revenue: '$2,800,000', lastShow: '2023-07-30' },
  { name: 'Marcus Theatres', location: 'Milwaukee, WI', status: 'inactive', seats: 900, screens: 9, contact: '(414) 555-7890', revenue: '$1,500,000', lastShow: '2023-06-20' },
  { name: 'Regal Cinemas', location: 'New York, NY', status: 'active', seats: 1200, screens: 12, contact: '(212) 555-1234', revenue: '$5,000,000', lastShow: '2023-09-01' },
];

const pendingTheaters: Theater[] = [
  { name: 'Landmark Theatres', location: 'San Francisco, CA', status: 'pending', seats: 700, screens: 7, contact: '(415) 555-2222', revenue: '', lastShow: '' },
  { name: 'Bow Tie Cinemas', location: 'Washington, DC', status: 'pending', seats: 800, screens: 8, contact: '(202) 555-3333', revenue: '', lastShow: '' },
];

const TheatersComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [theaters, setTheaters] = useState(theatersData);
  const [sortAsc, setSortAsc] = useState(true);

  // Search Functionality for Main Theaters
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTheaters = theatersData.filter((theater) =>
      theater.name.toLowerCase().includes(query) ||
      theater.location.toLowerCase().includes(query) ||
      theater.status.toLowerCase().includes(query) ||
      theater.contact.includes(query)
    );
    setTheaters(filteredTheaters);
  };

  // Sorting Functionality
  const handleSort = () => {
    const sortedTheaters = [...theaters].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setSortAsc(!sortAsc);
    setTheaters(sortedTheaters);
  };

  return (
    <div className="flex-grow bg-white ml-64  p-10">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-2/3">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search theaters..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded-md p-3 pl-10 w-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-base hover:bg-blue-700">
          Add Theater
        </button>
      </div>

      {/* Theaters Table */}
      <table className="w-full text-left table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-5 text-base text-gray-600 cursor-pointer flex items-center" onClick={handleSort}>
              Theater Name
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`ml-2 transform transition-transform ${sortAsc ? '' : 'rotate-180'}`}
              />
            </th>
            <th className="p-5 text-base text-gray-600">Location</th>
            <th className="p-5 text-base text-gray-600">Status</th>
            <th className="p-5 text-base text-gray-600">Seats</th>
            <th className="p-5 text-base text-gray-600">Screens</th>
            <th className="p-5 text-base text-gray-600">Contact</th>
            <th className="p-5 text-base text-gray-600">Revenue</th>
            <th className="p-5 text-base text-gray-600">Last Show</th>
            <th className="p-5 text-base text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="text-base">
          {theaters.map((theater, index) => (
            <tr key={theater.name} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="p-5">{theater.name}</td>
              <td className="p-5">{theater.location}</td>
              <td className="p-5">
                <span
                  className={`px-2 py-1 rounded-full text-sm text-white ${
                    theater.status === 'active'
                      ? 'bg-green-500'
                      : theater.status === 'inactive'
                      ? 'bg-gray-500'
                      : 'bg-yellow-500'
                  }`}
                >
                  {theater.status}
                </span>
              </td>
              <td className="p-5">{theater.seats}</td>
              <td className="p-5">{theater.screens}</td>
              <td className="p-5">{theater.contact}</td>
              <td className="p-5">{theater.revenue}</td>
              <td className="p-5">{theater.lastShow}</td>
              <td className="p-5 flex space-x-3">
                <FontAwesomeIcon icon={faEye} className="text-blue-500 cursor-pointer" />
                <FontAwesomeIcon icon={faEdit} className="text-yellow-500 cursor-pointer" />
                <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pending Theaters Section */}
      <h3 className="mt-12 mb-4 text-xl font-semibold">Pending Theaters</h3>
      <table className="w-full text-left table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-5 text-base text-gray-600">Theater Name</th>
            <th className="p-5 text-base text-gray-600">Location</th>
            <th className="p-5 text-base text-gray-600">Seats</th>
            <th className="p-5 text-base text-gray-600">Screens</th>
            <th className="p-5 text-base text-gray-600">Contact</th>
            <th className="p-5 text-base text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="text-base">
          {pendingTheaters.map((theater, index) => (
            <tr key={theater.name} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="p-5">{theater.name}</td>
              <td className="p-5">{theater.location}</td>
              <td className="p-5">{theater.seats}</td>
              <td className="p-5">{theater.screens}</td>
              <td className="p-5">{theater.contact}</td>
              <td className="p-5 flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs hover:bg-green-600">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TheatersComponent;

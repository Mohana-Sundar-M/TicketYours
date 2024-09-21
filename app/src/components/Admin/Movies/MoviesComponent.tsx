import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Dummy movie data (you can replace this with your actual data)
const moviesData = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    genre: 'Action',
    image: 'https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    id: 2,
    title: 'WandaVision',
    genre: 'Drama',
    image: 'https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    id: 3,
    title: 'Star Wars',
    genre: 'Sci-Fi',
    image: 'https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    id: 4,
    title: 'Oppenheimer',
    genre: 'Biography',
    image: 'https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    id: 5,
    title: 'Archer',
    genre: 'Animation',
    image: 'https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    id: 6,
    title: 'Bholaa',
    genre: 'Action',
    image: 'https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2',
  },
];

const MoviesComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filter movies based on the search term
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:ml-64 p-4">
      {/* Search and Add New Movie */}
      <div className="flex flex-col lg:flex-row justify-start items-center mb-4 space-y-4 lg:space-y-0">
        <div className="flex items-center bg-gray-100 p-2 rounded-lg w-full lg:w-1/2">
          {/* Search Icon */}
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
            className="bg-gray-100 focus:outline-none w-full"
          />
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out w-full lg:w-auto">
          Add New Movie
        </button>
      </div>

      {/* Movie grid with reduced spacing */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="flex flex-col items-center">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-2 text-center font-semibold">{movie.title}</p>
              <p className="text-gray-600 text-sm">{movie.genre}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No movies found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default MoviesComponent;

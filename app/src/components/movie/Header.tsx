import React, { useState } from 'react';
import { FiHeart, FiMapPin, FiPlay, FiX, FiThumbsUp } from 'react-icons/fi'; // Import icons for like, location, play, close, and thumbs up
import { FaHeart } from 'react-icons/fa'; // Import filled heart icon
import YouTube from 'react-youtube'; // Import YouTube component for embedded video
import { Theater } from '../../data/movie/types'; // Import Theater type for movie props

// Define the props interface for the Header component
interface HeaderProps {
  movie: {
    id: number;
    title: string;
    duration: string;
    genre: string;
    language: string;
    image: string;
    theaters: Theater[];
  };
}

// Header component for displaying movie details, a video thumbnail, and filters
const Header: React.FC<HeaderProps> = ({ movie }) => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage whether the movie is liked
  const [isLiked, setIsLiked] = useState(false);

  // Toggle modal open state
  const openModal = () => setIsModalOpen(true);
  
  // Toggle modal close state
  const closeModal = () => setIsModalOpen(false);
  
  // Toggle like state
  const toggleLike = () => setIsLiked(!isLiked);

  // Hardcoded like percentage for demo
  const likePercentage = 88;
  
  // Hardcoded YouTube video ID for demo
  const videoId = 'qQJJWhh-XRo';
  
  // Options for location dropdown
  const locationOptions = ['Chennai', 'Bangalore'];

  return (
    <div className="w-full bg-white text-gray-900 p-4 flex flex-col justify-between items-center space-y-6 md:space-y-0">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full justify-between items-center space-y-6 md:space-y-0">
        {/* Movie details section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2 md:ml-12">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <div className="text-gray-700 mt-1">
            <span className="block">{`A • ${movie.duration}`}</span>
            <span className="block">{movie.genre}</span>
            <span className="block">{movie.language}</span>
          </div>
        </div>

        {/* Video thumbnail section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4 items-center">
          <div className="relative w-full md:h-48 flex justify-center items-center">
            <button
              onClick={openModal}
              className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300"
            >
              <FiPlay size={48} />
            </button>
            <div className="w-full h-full">
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`${movie.title} thumbnail`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Separate the like section from the video player */}
      <div className="hidden md:flex w-full justify-between items-center mt-4 space-y-6 md:space-y-0">
        <div className="flex flex-col w-full md:w-1/2 space-y-2 md:ml-12"></div>
        <div className="flex flex-col w-full md:w-1/2 space-y-4 items-center">
          <div className="flex items-center space-x-8 mt-2"> {/* Adjusted spacing */}
            {/* Like percentage */}
            <div className="flex items-center">
              <FaHeart className="text-red-500" /> {/* Filled heart icon */}
              <span className='pl-2'>{likePercentage}%</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Like button */}
              <button
                onClick={toggleLike}
                className="flex items-center space-x-1 p-2 bg-gray-100 rounded text-gray-500"
              >
                <FiThumbsUp className={isLiked ? 'text-red-500' : ''} />
                <span>Like</span>
              </button>
              {/* Location dropdown */}
              <div className="relative flex items-center">
                <FiMapPin className="absolute left-3 text-gray-500" />
                <select className="pl-10 pr-4 py-2 bg-gray-100 rounded text-gray-700">
                  {locationOptions.map((location, index) => (
                    <option key={index}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col w-full md:hidden bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={`${movie.title} thumbnail`}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={openModal}
            className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full"
          >
            <FiPlay size={24} />
          </button>
          <div className="absolute bottom-2 left-2 text-white">
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p>{`A • ${movie.duration} • ${movie.genre}`}</p>
          </div>
        </div>
      </div>

      {/* Modal for playing the video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white p-4 rounded-lg flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-gray-500 bg-white rounded-full p-2"
            >
              <FiX size={24} />
            </button>
            <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <YouTube
                videoId={videoId}
                opts={{
                  height: '100%',
                  width: '100%',
                  playerVars: {
                    autoplay: 1, // Automatically play the video
                  },
                }}
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

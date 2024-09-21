import React, { useState } from 'react';
import { FiMapPin, FiPlay, FiX, FiThumbsUp } from 'react-icons/fi'; // Import icons
import YouTube from 'react-youtube'; // Import YouTube component for embedded video
import type { Movie } from '../../types/moviesTypes'; // Ensure correct import for Movie type
import { useActiveCity } from '../../context/ActiveCityContext'; // Import the ActiveCity context
import { Modal } from '@mui/material';
import LocationChanger from '../homepage/LocationChanger';

interface HeaderProps {
  movie: Movie; // Ensure HeaderProps expects the correct Movie type
}

const Header: React.FC<HeaderProps> = ({ movie }) => {
  const [isLocationChangerOpen, setIsLocationChangerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const { activeCity } = useActiveCity(); // Get the active city from the context

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleLike = () => setIsLiked(!isLiked);

  // Calculate like percentage from votes data
  const totalVotes = movie.votes.length;
  const likePercentage = totalVotes > 0 ? (movie.votes.filter(vote => vote.value > 0).length / totalVotes) * 100 : 0;

  // Hardcoded YouTube video ID for demo
  const videoId = 'qQJJWhh-XRo'; // Replace with actual video ID if available

  return (
    <div className="w-full bg-white text-gray-900 p-4 flex flex-col justify-between items-center space-y-6 md:space-y-0">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full justify-between items-center space-y-6 md:space-y-0">
        {/* Movie details section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2 md:ml-12">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <div className="text-gray-700 mt-1">
            <span className="block">{`A • ${movie.duration} mins`}</span>
            <span className="block">{movie.genre}</span>
            <div className="block mt-2">
              {movie.movielanguage.map((language, index) => (
                <span key={index} className="inline-block mr-2 bg-gray-200 rounded px-2 py-1 text-sm">
                  {language.language}
                </span>
              ))}
            </div>
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
                src={movie.posterUrl}
                alt={`${movie.title} thumbnail`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Like and location selection section */}
      <div className="hidden md:flex w-full justify-between items-center mt-4 space-y-6 md:space-y-0">
        <div className="flex flex-col w-full md:w-1/2 space-y-2 md:ml-12"></div>
        <div className="flex flex-col w-full md:w-1/2 space-y-4 items-center">
          <div className="flex items-center space-x-8 mt-2">
            {/* Like percentage */}
            <div className="flex items-center">
              <FiThumbsUp className="text-red-500" />
              <span className='pl-2'>{Math.round(likePercentage)}%</span>
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
              {/* City dropdown */}
              <div className="relative flex items-center">
                {/* City display acting like a dropdown button */}
                  <div
                    onClick={() => setIsLocationChangerOpen(true)}
                    className="pl-10 pr-4 py-2 bg-gray-100 rounded text-gray-700 cursor-pointer flex items-center relative"
                  >
                    <FiMapPin className="absolute left-3 text-gray-500" />
                    <span>{activeCity}</span> {/* Display active city */}
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isLocationChangerOpen}
        onClose={() => setIsLocationChangerOpen(false)}
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100vw', 
          height: '100vh' 
        }}
      >
        <LocationChanger onClose={() => setIsLocationChangerOpen(false)} />
      </Modal>
      {/* Mobile Layout */}
      <div className="flex flex-col w-full md:hidden bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={movie.posterUrl}
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
            <p>{`A • ${movie.duration} mins • ${movie.genre}`}</p>
          </div>
        </div>
      </div>

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

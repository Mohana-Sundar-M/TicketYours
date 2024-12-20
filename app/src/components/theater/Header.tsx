import React, { useState } from 'react';
import image from '../../assets/theater-no.jpg'
interface HeaderProps {
  name: string;             // Name of the theater
  images: string[];         // Array of image URLs
  address: string;          // Address of the theater
  directionsLink: string;   // URL for directions to the theater
}

const Header: React.FC<HeaderProps> = ({ name, images, address, directionsLink }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [, setPopupImage] = useState<string | null>(null);

  return (
    <div className="bg-teal-100 bg-opacity-30 p-4 md:p-8 rounded-lg shadow-lg">
      {/* Theater Images and Name */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0">
          <img
            src={images[0]||image}
            alt={name}
            className="w-full md:w-96 h-48 md:h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => setPopupImage(images[0])}
          />
        </div>
        {/* Additional Images */}
        <div className="flex flex-col mt-4 md:mt-0 md:ml-6 space-y-2">
          <div className="hidden md:flex flex-col space-y-2">
            {images.slice(1, 3).map((image, index) => (
              <div className="relative" key={index}>
                <img
                  src={image}
                  alt={`Theater image ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setPopupImage(image)}
                />
                {index === 1 && images.length > 3 && (
                  <button
                    onClick={() => setShowAllImages(!showAllImages)}
                    className="absolute inset-0 bg-gray-800 bg-opacity-50 text-white text-sm flex items-center justify-center rounded-lg"
                  >
                    See all
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Theater Name and Address */}
      <h2 className="text-lg md:text-xl font-semibold mt-4">{name}</h2>
      <p className="text-sm md:text-base text-gray-600">{address}</p>
      {/* Directions Link */}
      <a
        href={directionsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 flex items-center"
      >
        Get direction
      </a>
    </div>
  );
};

export default Header;

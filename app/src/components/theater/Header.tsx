import React, { useState } from 'react';

// Define the props that the Header component will accept
interface HeaderProps {
  name: string;             // Name of the theater
  images: string[];         // Array of image URLs
  address: string;          // Address of the theater
  directionsLink: string;   // URL for directions to the theater
}

const Header: React.FC<HeaderProps> = ({ name, images, address, directionsLink }) => {
  // State to toggle the display of all images in a modal
  const [showAllImages, setShowAllImages] = useState(false);
  // State to manage the currently displayed image in a popup
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
    <div className="bg-teal-100 bg-opacity-30 p-4 md:p-8 rounded-lg shadow-lg">
      {/* Container for the header section */}
      <div className="flex flex-col md:flex-row">
        {/* Main image */}
        <div className="flex-shrink-0">
          <img
            src={images[0]}
            alt={name}
            className="w-full md:w-96 h-48 md:h-64 object-cover rounded-lg cursor-pointer"
            onClick={() => setPopupImage(images[0])} // Open the main image in a popup on click
          />
        </div>
        {/* Additional images */}
        <div className="flex flex-col mt-4 md:mt-0 md:ml-6 space-y-2">
          {/* Images displayed in larger view (desktop) */}
          <div className="hidden md:flex flex-col space-y-2">
            {images.slice(1, 3).map((image, index) => (
              <div className="relative" key={index}>
                <img
                  src={image}
                  alt={`Theater image ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setPopupImage(image)} // Open the clicked image in a popup on click
                />
                {/* Show "See all" button if there are more than 3 images */}
                {index === 1 && images.length > 3 && (
                  <button
                    onClick={() => setShowAllImages(!showAllImages)} // Toggle the modal to show all images
                    className="absolute inset-0 bg-gray-800 bg-opacity-50 text-white text-sm flex items-center justify-center rounded-lg"
                  >
                    See all
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Images displayed in smaller view (mobile) */}
          <div className="flex flex-row md:hidden space-x-2">
            {images.slice(1, 3).map((image, index) => (
              <div className="relative" key={index}>
                <img
                  src={image}
                  alt={`Theater image ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                  onClick={() => setPopupImage(image)} // Open the clicked image in a popup on click
                />
                {/* Show "See all" button if there are more than 3 images */}
                {index === 1 && images.length > 3 && (
                  <button
                    onClick={() => setShowAllImages(!showAllImages)} // Toggle the modal to show all images
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
      {/* Theater name */}
      <h2 className="text-lg md:text-xl font-semibold mt-4">{name}</h2>
      {/* Theater address */}
      <p className="text-sm md:text-base text-gray-600">{address}</p>
      {/* Link to get directions */}
      <a
        href={directionsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 flex items-center"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 9.293a1 1 0 011.414 0L17 12.586V3a1 1 0 10-2 0v5.586l-2.293-2.293a1 1 0 00-1.414 1.414L15.586 11H10a1 1 0 100 2h5.586l-2.293 2.293a1 1 0 001.414 1.414L17 13.414V19a1 1 0 102 0v-9.586l-3.293 3.293a1 1 0 01-1.414 0L12.293 9.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Get direction
      </a>

      {/* Modal for showing all images */}
      {showAllImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded-lg max-w-screen-lg w-full">
            <button
              onClick={() => setShowAllImages(false)} // Close the modal
              className="absolute top-2 right-2 text-black p-1 rounded-full bg-white shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Additional image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setPopupImage(image)} // Open the clicked image in a popup on click
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal for displaying a single image */}
      {popupImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button
              onClick={() => setPopupImage(null)} // Close the popup
              className="absolute top-2 right-2 text-black p-1 rounded-full bg-white shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <img src={popupImage} alt="Popup" className="max-w-full max-h-screen p-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';  // Importing React and hooks for state and side effects
import { Box, IconButton } from '@mui/material';  // Importing MUI components for layout and interactive buttons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';  // Importing icon for previous button
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';  // Importing icon for next button

// Array of image URLs to be used in the banner
const images = [
  'https://assets-in.bmscdn.com/promotions/cms/creatives/1722429978310_keyvisual1240x300wocta.jpg',  
  'https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg',
  'https://assets-in.bmscdn.com/promotions/cms/creatives/1722429978310_keyvisual1240x300wocta.jpg',
];

const Banner: React.FC = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to automatically change the banner image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handler for the previous button click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handler for the next button click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Banner image displaying the current image */}
      <Box
        component="img"
        src={images[currentIndex]}  // Source of the banner image based on current index
        alt="Banner"  // Alt text for accessibility
        sx={{
          width: '100%',  // Full width of the parent container
          height: { xs: '200px', md: '400px' },  // Responsive height based on screen size
          objectFit: 'cover',  // Ensures the image covers the box without distortion
          transition: 'opacity 1s ease-in-out',  // Smooth transition effect when image changes
        }}
      />
      {/* Previous button to navigate to the previous image */}
      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
        }}
      >
        <ArrowBackIosIcon />  {/* Icon for previous navigation */}
      </IconButton>
      {/* Next button to navigate to the next image */}
      <IconButton
        onClick={handleNextClick}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
        }}
      >
        <ArrowForwardIosIcon />  {/* Icon for next navigation */}
      </IconButton>
    </Box>
  );
};

export default Banner;  // Exporting Banner component for use in other parts of the application

import React from 'react';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import back arrow icon
import logo from '../../assets/logo.png'; // Path to logo image
import { useNavigate } from 'react-router-dom'; // Hook for navigation

const NavBar: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // Back button click handler to always navigate to the home page
  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page (or default page)
  };

  return (
    <Box sx={{ borderBottomWidth: 1 }}>
      {/* AppBar with a logo and back button */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Back Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={handleBackClick} // Call back click handler
          >
            <ArrowBackIcon sx={{ fontSize: 32, color: 'black' }} />
          </IconButton>
          {/* Logo centered in the Toolbar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={logo} alt="TY Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

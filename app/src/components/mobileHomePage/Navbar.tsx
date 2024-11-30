import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Modal, Button, useMediaQuery, useTheme } from '@mui/material';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import LocationChanger from '../homepage/LocationChanger';
import Search from '../homepage/Search'; // Import the Search component
import { useActiveCity } from '../../context/ActiveCityContext'; // Import the context hook
import { useAuth } from '../../context/AuthContext'; // Import the AuthContext

const NavBar: React.FC = () => {

  const [isLocationChangerOpen, setIsLocationChangerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const {  activeCity } = useActiveCity(); // Get active city state from context
  const { isLoggedIn } = useAuth(); // Get login status from AuthContext
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


 

 
  const handleLocationClick = () => {
    setIsLocationChangerOpen(true);
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

 

  return (
    <Box>
  <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3, height: '80px', position: 'relative' }}>
    <Toolbar sx={{ justifyContent: 'space-between', padding: isSmallScreen ? '8px 16px' : '8px 24px', display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
      
    <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
  <Box
    component="img"
    src={logo}
    alt="TY Logo"
    sx={{
      width: '180px', // Set width to 120px (or any size you prefer)
      height: 'auto', // Keep the height automatically adjusted to maintain aspect ratio
    }}
  />
</Box>


      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Mobile View Layout */}
        {isSmallScreen && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', height: '100%' }}>
            <IconButton
              onClick={handleSearchClick}
              sx={{
                color: 'black',
                marginRight: '16px',
                fontSize: '30px', // Adjusting font size for Search Icon
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <SearchIcon />
            </IconButton>

            {!isLoggedIn && (
              <Button
                variant="contained"
                onClick={handleSignInClick}
                sx={{
                  backgroundColor: '#48cfae',
                  color: 'white',
                  textTransform: 'none',
                  padding: '6px 12px',  // Reduced padding for a smaller button
                  fontSize: '14px',  // Increased font size for better readability
                  minWidth: 'auto',  // Removes default minWidth constraint
                  height: '40px',  // Same height as the Search button
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'darkcyan',
                  },
                }}
              >
                Sign In
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Toolbar>

    {/* Mobile View Enhancements */}
    {isSmallScreen && (
      <Box sx={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', alignItems: 'center', zIndex: 1200 }}>
        <Button
          endIcon={<ChevronRightIcon />}
          onClick={handleLocationClick}
          sx={{
            color: 'teal',
            textTransform: 'none',
            padding: '1px 8px',
            fontSize: '14px',
            border: 'none',
            background: 'none',
            marginLeft: '0.4rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {activeCity || 'Select Location'}
        </Button>
      </Box>
    )}
  </AppBar>

  {/* Modal for Location Changer */}
  <Modal
    open={isLocationChangerOpen}
    onClose={() => setIsLocationChangerOpen(false)}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <LocationChanger onClose={() => setIsLocationChangerOpen(false)} />
  </Modal>

  {/* Search Component */}
  <Search open={searchOpen} handleModal={handleSearchClose} />
</Box>

  

  );
};

export default NavBar;

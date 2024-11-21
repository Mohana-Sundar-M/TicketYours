import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button, Modal, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import LocationChanger from './LocationChanger';
import Search from './Search'; // Import the Search component
import { useActiveCity } from '../../context/ActiveCityContext'; // Import the context hook
import { useAuth } from '../../context/AuthContext'; // Import the AuthContext

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLocationChangerOpen, setIsLocationChangerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { activeCityId, activeCity } = useActiveCity(); // Get active city state from context
  const { isLoggedIn } = useAuth(); // Get login status from AuthContext
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const cityId = activeCityId ? activeCityId.toString() : '';
  console.log('IsLoggedIn :',isLoggedIn)
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

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

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Movies', icon: <MovieIcon />, path: `/v3/movies/city/${cityId}` },
    { text: 'Theater', icon: <TheatersIcon />, path: '/theater-search' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3, height: '80px', position: 'relative' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: isSmallScreen ? '8px 16px' : '8px 24px', display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="TY Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isSmallScreen && (
              <IconButton onClick={handleSearchClick} sx={{ color: 'black', marginRight: '16px' }}>
                <SearchIcon />
              </IconButton>
            )}

            {!isSmallScreen && (
              <Button
                startIcon={<LocationOnIcon />}
                onClick={handleLocationClick}
                sx={{
                  color: 'black',
                  textTransform: 'none',
                  marginRight: '32px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  border: 'none', // Remove border
                  background: 'none', // Remove background

                  '&:hover': {
                    backgroundColor: 'transparent', // Ensure hover background is transparent
                  }
                }}
              >
                {activeCity || 'Select Location'} {/* Use activeCity from context */}
              </Button>
            )}
          
            {/* Conditionally render the Sign In button based on login status */}
            {!isLoggedIn && !isSmallScreen && (
              <Button
                variant="contained"
                onClick={handleSignInClick}
                sx={{
                  backgroundColor: '#48cfae',
                  color: 'white',
                  textTransform: 'none',
                  marginRight: '24px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: 'darkcyan',
                  }
                }}
              >
                Sign In
              </Button>
            )}

            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: 32, color: 'black' }} />
            </IconButton>
          </Box>
        </Toolbar>

        {isSmallScreen && (
          <>
            <Box sx={{ position: 'absolute', top: '12.5px', right: '56px', display: 'flex', alignItems: 'center', zIndex: 1200 }}>
              <IconButton onClick={handleSearchClick} sx={{ color: 'black' }}>
                <SearchIcon />
              </IconButton>
            </Box>

            <Box sx={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', alignItems: 'center', zIndex: 1200 }}>
              <Button
                endIcon={<ChevronRightIcon />} // Right arrow icon
                onClick={handleLocationClick}
                sx={{
                  color: 'teal', // Text color
                  textTransform: 'none',
                  padding: '1px 8px',
                  fontSize: '14px',
                  border: 'none', // Remove border
                  background: 'none', // Remove background
                  marginLeft: '0.4rem',
                  '&:hover': {
                    backgroundColor: 'transparent', // Ensure hover background is transparent
                  }
                }}
              >
                {activeCity || 'Select Location'} {/* Use activeCity from context */}
              </Button>
            </Box>
          </>
        )}
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            backgroundColor: 'white',
          },
        }}
      >
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '16px' }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: 'auto', color: 'black' }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ width: '100%' }}>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
                <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: 'black' }} />
                <ChevronRightIcon sx={{ color: 'black' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

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

      {/* Search Component */}
      <Search open={searchOpen} handleModal={handleSearchClose} />
    </Box>
  );
};

export default NavBar;

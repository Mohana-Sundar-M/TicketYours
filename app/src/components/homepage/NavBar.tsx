import React, { useState } from 'react';  // Import React for component functionality
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button, Modal, useMediaQuery, useTheme } from '@mui/material';  // Import MUI components for layout and styling
import MenuIcon from '@mui/icons-material/Menu';  // Import menu icon for drawer toggle
import HomeIcon from '@mui/icons-material/Home';  // Import icons for menu items
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';  // Import ChevronRight icon for menu items
import CloseIcon from '@mui/icons-material/Close';  // Import close icon for drawer
import LocationOnIcon from '@mui/icons-material/LocationOn';  // Import location icon
import logo from '../../assets/logo.png';  // Import logo image
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for routing
import LocationChanger from './LocationChanger';  // Import LocationChanger component

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);  // State for drawer open/close
  const [isLocationChangerOpen, setIsLocationChangerOpen] = useState(false);  // State for location changer modal open/close
  const [selectedLocation, setSelectedLocation] = useState('Bengaluru');  // State for selected location
  const navigate = useNavigate();  // Hook for navigation
  const theme = useTheme();  // Hook for theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  // Check if screen size is small

  /**
   * Toggle drawer open/close based on user action.
   * @param open - Boolean indicating whether to open or close the drawer.
   */
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  /**
   * Navigate to a specific path and close the drawer.
   * @param path - The path to navigate to.
   */
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  /**
   * Open the location changer modal.
   */
  const handleLocationClick = () => {
    setIsLocationChangerOpen(true);
  };

  /**
   * Handle the location selection or modal close.
   * @param location - Selected location or empty string to close.
   */
  const handleLocationClose = (location: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsLocationChangerOpen(false);
  };

  /**
   * Navigate to the login page.
   */
  const handleSignInClick = () => {
    navigate('/login');
  };

  // Menu items for the drawer
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Movies', icon: <MovieIcon />, path: '/movies' },
    { text: 'Theater', icon: <TheatersIcon />, path: '/theater-search' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: isSmallScreen ? '8px 16px' : '8px 24px' }}>
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="TY Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              startIcon={<LocationOnIcon />}
              onClick={handleLocationClick}
              sx={{ 
                color: 'black', 
                textTransform: 'none', 
                marginRight: isSmallScreen ? '8px' : '32px',
                padding: isSmallScreen ? '8px' : '12px 24px',
                fontSize: isSmallScreen ? '14px' : '16px',
              }}
            >
              {selectedLocation}
            </Button>
            <Button
              variant="contained"
              onClick={handleSignInClick}
              sx={{ 
                backgroundColor: 'aquamarine', 
                color: 'black', 
                textTransform: 'none', 
                marginRight: isSmallScreen ? '8px' : '24px',
                padding: isSmallScreen ? '8px' : '12px 24px',
                fontSize: isSmallScreen ? '14px' : '16px',
                '&:hover': {
                  backgroundColor: 'darkcyan',
                }
              }}
            >
              Sign In
            </Button>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: 32, color: 'black' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for menu items */}
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
        <Box
          sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            padding: '16px',
          }}
          role="presentation"
        >
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

      {/* LocationChanger Modal */}
      <Modal
        open={isLocationChangerOpen}
        onClose={() => handleLocationClose('')}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LocationChanger onSelectLocation={handleLocationClose} onClose={() => setIsLocationChangerOpen(false)} />
      </Modal>
    </Box>
  );
};

export default NavBar;  // Exporting NavBar component for use in other parts of the application

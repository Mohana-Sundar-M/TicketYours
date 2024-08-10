import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png'; // Path to logo image
import { useNavigate } from 'react-router-dom';  // Hook for navigation

const Nav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const navigate = useNavigate();  // Initialize useNavigate for routing

  // Toggle the drawer open/close state
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return; // Ignore keyboard tab or shift key events
    }
    setIsDrawerOpen(open);
  };

  // Array of menu items with their corresponding paths
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },  // Navigates to the home route
    { text: 'Movies', icon: <MovieIcon />, path: '/movies' },
    { text: 'Theater', icon: <TheatersIcon />, path: '/theater-search' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  // Handle navigation and close the drawer
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsDrawerOpen(false);  // Close the drawer after navigation
  };

  return (
    <Box>
      {/* AppBar with a logo and menu icon */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="TY Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: 32, color: 'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer component for the side menu */}
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
          {/* Close Icon and Menu Heading */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: 'auto', color: 'black' }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* List of Menu Items */}
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
    </Box>
  );
};

export default Nav;

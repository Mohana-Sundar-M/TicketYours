import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button, Modal,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import LocationChanger from '../homepage/LocationChanger';

const Nav: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLocationChangerOpen, setIsLocationChangerOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bengaluru');
  const navigate = useNavigate();
  


  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
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

  const handleLocationClose = (location: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsLocationChangerOpen(false);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Movies', icon: <MovieIcon />, path: '/movies' },
    { text: 'Theater', icon: <TheatersIcon />, path: '/theater-search' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>

          {/* Location button for all screens */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              startIcon={<LocationOnIcon />}
              onClick={handleLocationClick}
              sx={{
                color: 'black',
                textTransform: 'none',
                marginRight: '16px', // Adjust margin as needed
                padding: '8px 16px',
                fontSize: '14px',
                border: 'none',
                background: 'none',

                '&:hover': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              {selectedLocation}
            </Button>

            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: 32, color: 'black' }} />
            </IconButton>
          </Box>
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
        onClose={() => setIsLocationChangerOpen(false)}
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100vw', 
          height: '100vh' 
        }}
      >
        <LocationChanger onSelectLocation={handleLocationClose} onClose={() => setIsLocationChangerOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Nav;

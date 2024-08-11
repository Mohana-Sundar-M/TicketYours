import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button, Modal, useMediaQuery, useTheme, InputBase, Paper } from '@mui/material';
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

const NavBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLocationChangerOpen, setIsLocationChangerOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bengaluru');
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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

  const handleLocationClose = (location: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsLocationChangerOpen(false);
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
    { text: 'Movies', icon: <MovieIcon />, path: '/movies' },
    { text: 'Theater', icon: <TheatersIcon />, path: '/theater-search' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3, height: '80px', position: 'relative' }}>
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          padding: isSmallScreen ? '8px 16px' : '8px 24px',
          display: 'flex', 
          alignItems: 'center',
          flexWrap: 'nowrap' // Prevent wrapping of items
        }}>
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="TY Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>

          {!searchOpen && !isSmallScreen && (
            <Paper
              component="form"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: '720px', // Increased width of the search bar
                borderRadius: '24px', 
                border: '2px solid #ddd', 
                boxShadow: 'none',
                height: '55px',
                ml: 2 // Margin left for spacing
              }}
            >
              <InputBase
                placeholder="Search for movies and theaters"
                startAdornment={<SearchIcon sx={{ mx: 1 }} />}
                sx={{ 
                  flexGrow: 1, 
                  ml: 1, 
                  py: 2, // Increased padding for height
                  px: 2, 
                  fontSize: '20px' // Increased font size
                }}
              />
            </Paper>
          )}

          {isSmallScreen && !searchOpen && (
            <IconButton onClick={handleSearchClick} sx={{ color: 'black', marginLeft: 'auto', marginRight: 2 }}>
              <SearchIcon />
            </IconButton>
          )}

          {searchOpen && (
            <Paper
              component="form"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: '100%', 
                maxWidth: '720px', // Increased width of the search bar when open
                borderRadius: '15px', 
                border: '1px solid #ddd', 
                boxShadow: 'none',
                height: '44px',
                ml: 2 // Margin left for spacing
              }}
            >
              <InputBase
                placeholder="Search..."
                startAdornment={<SearchIcon sx={{ mx: 1 }} />}
                autoFocus
                sx={{ 
                  flexGrow: 1, 
                  ml: 1, 
                  py: 2, // Increased padding for height
                  px: 2, 
                  fontSize: '16px' // Increased font size
                }}
              />
              <IconButton onClick={handleSearchClose} sx={{ color: 'black' }}>
                <CloseIcon />
              </IconButton>
            </Paper>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                {selectedLocation}
              </Button>
            )}
            {!isSmallScreen && (
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
          <Box sx={{ 
            position: 'absolute', 
            top: '8px', 
            left: '0', // Place the button on the left side
            display: 'flex', 
            alignItems: 'center',
            marginTop:'2.4rem',
            marginLeft:'0.9rem',
            zIndex: 1200 
          }}>
            <Button
              endIcon={<ChevronRightIcon />} // Right arrow icon
              onClick={handleLocationClick}
              sx={{
                color: 'teal', // Text color
                textTransform: 'none',
                padding: '4px 8px',
                fontSize: '14px',
                border: 'none', // Remove border
                background: 'none', // Remove background

                '&:hover': {
                  backgroundColor: 'transparent', // Ensure hover background is transparent
                }
              }}
            >
              {selectedLocation}
            </Button>
          </Box>
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
        <LocationChanger onSelectLocation={handleLocationClose} onClose={()=>{setIsLocationChangerOpen(false);}} />
      </Modal>
    </Box>
  );
};

export default NavBar;

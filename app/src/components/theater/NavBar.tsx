import React from 'react';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back arrow icon
import logo from '../../assets/logo.png';

const NavBar: React.FC = () => {
  return (
    <Box sx={{borderBottomWidth:1}}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon sx={{ fontSize: 32, color: 'black' }} />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={logo} alt="TY Logo" sx={{ height: 48, width: 'auto' }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

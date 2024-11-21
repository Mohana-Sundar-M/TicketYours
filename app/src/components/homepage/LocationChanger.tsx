import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, TextField, Button, Divider, IconButton, useMediaQuery, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import { useGetCitiesQuery } from '../../services/citiesApi'; // Import the query hook
import LoadingSpinner from '../public/LoadingSpinner'; // Import the loading spinner component
import { useActiveCity } from '../../context/ActiveCityContext'; // Import the context hook

interface LocationChangerProps {
  onClose: () => void;
}

const LocationChanger: React.FC<LocationChangerProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { activeCity, activeCityId, setActiveCity } = useActiveCity(); // Get active city state from context

  const { data, error, isLoading } = useGetCitiesQuery();

  const filteredCities = data ? data.data.filter(city => city.name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  const handleCitySelect = (city: { name: string, id: number }) => {
    setActiveCity(city.name, city.id); // Set the selected city and ID as active
    onClose(); // Close the location changer
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Typography variant="h6" color="error">Error fetching cities:</Typography>;
  }

  return (
    <Box
      sx={{
        padding: '16px',
        width: isSmallScreen ? '100%' : '600px',
        maxWidth: '100%',
        height: 'auto',
        backgroundColor: 'white',
        position: 'relative',
        borderRadius: '8px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          flexDirection: isSmallScreen ? 'column' : 'row',
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search for your city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginBottom: isSmallScreen ? '8px' : '0' }}
        />
        {!isSmallScreen && (
          <IconButton onClick={onClose} sx={{ color: 'black' }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Button
        startIcon={<LocationOnIcon />}
        onClick={() => handleCitySelect({ name: activeCity || '', id: activeCityId })}
        sx={{ color: '#48cfae', textTransform: 'none', marginBottom: '16px', width: '100%' }}
      >
        Detect My Location
      </Button>
      <Divider />
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', margin: '16px 0', color: 'black' }}
      >
        Cities
      </Typography>
      <List sx={{ maxHeight: '300px', overflowY: 'auto' }}>
        {filteredCities.map((city) => (
          <ListItem button key={city.id} onClick={() => handleCitySelect({ name: city.name, id: city.id })}>
            <ListItemText primary={city.name} sx={{ color: 'black' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LocationChanger;
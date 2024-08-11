import React, { useState } from 'react';  // Import React and useState hook for managing component state
import { Box, Typography, List, ListItem, ListItemText, TextField, Button, Divider, IconButton, useMediaQuery, useTheme } from '@mui/material';  // Import MUI components for layout and UI elements
import LocationOnIcon from '@mui/icons-material/LocationOn';  // Import location icon
import CloseIcon from '@mui/icons-material/Close';  // Import close icon

// Interface for component props to ensure correct prop types
interface LocationChangerProps {
  onSelectLocation: (location: string) => void;  // Callback function to handle location selection
  onClose: () => void;  // Callback function to handle modal close
}

// Functional component with props for location selection and closing
const LocationChanger: React.FC<LocationChangerProps> = ({ onSelectLocation, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');  // State for search input value
  const [detectedLocation, setDetectedLocation] = useState<string | null>(null);  // State for detected location

  // List of cities for the location selection
  const otherCities = [
    'Aalo', 'Adilabad', 'Agartala', 'Ajmer', 'Aligarh', 'Alappuzha', 'Amritsar', 'Aurangabad',
    'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune',
    'Kochi', 'Jaipur', 'Lucknow', 'Patna', 'Bhopal', 'Indore', 'Nagpur', 'Vadodara', 'Thane',
    'Nashik', 'Faridabad', 'Ghaziabad', 'Rajkot', 'Varanasi', 'Srinagar', 'Ranchi', 'Agra',
    'Meerut', 'Ludhiana', 'Visakhapatnam', 'Vijayawada', 'Madurai', 'Jodhpur', 'Guwahati',
    'Gwalior', 'Jabalpur', 'Coimbatore', 'Tiruchirappalli', 'Kozhikode', 'Thrissur',
    'Mysore', 'Bhavnagar', 'Salem', 'Bhubaneswar', 'Chandigarh', 'Dehradun',
    'Shimla', 'Panaji', 'Surat', 'Jammu', 'Shillong',
    // Add more cities as needed
  ];

  // Filter cities based on search term
  const filteredCities = otherCities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()));

  // Function to simulate location detection
  const handleDetectLocation = () => {
    const location = "Your Location";  // Simulated location detection
    setDetectedLocation(location);  // Update detected location state
    onSelectLocation(location);  // Call the callback function with detected location
  };

  // MUI theme and media query for responsive design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  // Check if screen size is small

  return (
    <Box
      sx={{
        padding: '16px',  // Padding inside the component
        width: isSmallScreen ? '100%' : '600px',  // Responsive width
        maxWidth: '100%',  // Ensure max width does not exceed screen
        height: 'auto',  // Auto height based on content
        backgroundColor: 'white',  // Background color
        position: 'relative',  // Relative positioning for overlay elements
        borderRadius: '8px',  // Rounded corners
        boxSizing: 'border-box',  // Include padding and border in element's total width and height
      }}
    >
      <Box
        sx={{
          display: 'flex',  // Flexbox layout
          justifyContent: 'space-between',  // Space between child elements
          alignItems: 'center',  // Center align items vertically
          marginBottom: '16px',  // Margin at the bottom
          flexDirection: isSmallScreen ? 'column' : 'row',  // Stack elements vertically on small screens
        }}
      >
        <TextField
          variant="outlined"  // Outlined style for the text field
          fullWidth  // Full width of the container
          placeholder="Search for your city"  // Placeholder text
          value={searchTerm}  // Value of the search input
          onChange={(e) => setSearchTerm(e.target.value)}  // Update search term state on change
          sx={{ marginBottom: isSmallScreen ? '8px' : '0' }}  // Margin bottom on small screens
        />
        {!isSmallScreen && (
          <IconButton onClick={onClose} sx={{ color: 'black' }}>
            <CloseIcon />  {/* Close icon button */}
          </IconButton>
        )}
      </Box>
      <Button
        startIcon={<LocationOnIcon />}  // Start icon for the button
        onClick={handleDetectLocation}  // Handle location detection on click
        sx={{ color: 'red', textTransform: 'none', marginBottom: '16px', width: '100%' }}  // Button styling
      >
        {detectedLocation ? detectedLocation : 'Detect my location'}  {/* Button text based on detected location */}
      </Button>
      <Divider />  {/* Divider line */}
      <Typography
        variant="h6"  // Typography variant for heading
        sx={{ fontWeight: 'bold', margin: '16px 0', color: 'black' }}  // Styling for the heading
      >
        Cities
      </Typography>
      <List sx={{ maxHeight: '300px', overflowY: 'auto' }}>
        {filteredCities.map((city, index) => (
          <ListItem button key={index} onClick={() => onSelectLocation(city)}>
            <ListItemText primary={city} sx={{ color: 'black' }} />  {/* List item for each city */}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LocationChanger;  // Exporting LocationChanger component for use in other parts of the application

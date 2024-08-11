import React from 'react';  // Importing React library for creating the component
import { Box, Typography, Grid, IconButton, Link } from '@mui/material';  // Importing MUI components for layout, text, and icons
import InstagramIcon from '@mui/icons-material/Instagram';  // Importing Instagram icon
import TwitterIcon from '@mui/icons-material/Twitter';  // Importing Twitter icon
import FacebookIcon from '@mui/icons-material/Facebook';  // Importing Facebook icon

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#C5E4E7', // Light teal background color for the footer
        color: '#000', // Black text color for contrast
        padding: '20px', // Padding around the content inside the footer
        marginTop: '30px', // Margin at the top of the footer
      }}
    >
      <Grid container justifyContent="space-around" alignItems="center">
        {/* About section */}
        <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
            About
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            Terms and conditions
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Privacy policy
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Purchase policy
          </Link>
        </Grid>

        {/* Follow section with social media icons */}
        <Grid item xs={12} md={4} textAlign="center" sx={{ mt: { xs: '20px', md: '0' } }}>
          <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
            Follow
          </Typography>
          <IconButton color="inherit" aria-label="instagram" href="#" target="_blank">
            <InstagramIcon sx={{ fontSize: '40px' }} />  {/* Instagram icon */}
          </IconButton>
          <IconButton color="inherit" aria-label="twitter" href="#" target="_blank">
            <TwitterIcon sx={{ fontSize: '40px' }} />  {/* Twitter icon */}
          </IconButton>
          <IconButton color="inherit" aria-label="facebook" href="#" target="_blank">
            <FacebookIcon sx={{ fontSize: '40px' }} />  {/* Facebook icon */}
          </IconButton>
        </Grid>

        {/* Contact us section */}
        <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'right' }} sx={{ mt: { xs: '20px', md: '0' } }}>
          <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
            Contact us
          </Typography>
          <Typography variant="body2">Email id</Typography>  {/* Placeholder for email id */}
          <Typography variant="body2">Contact number</Typography>  {/* Placeholder for contact number */}
        </Grid>
      </Grid>
      {/* Copyright notice */}
      <Box sx={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        &copy; All rights are received
      </Box>
    </Box>
  );
};

export default Footer;  // Exporting Footer component for use in other parts of the application

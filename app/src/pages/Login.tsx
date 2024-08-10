import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Nav from '../components/public/NavBar';

/**
 * Login component allows users to enter their mobile number, request an OTP, and log in with the OTP.
 * It uses MUI components for styling and layout.
 */
const Login: React.FC = () => {
  // State to manage the mobile number and OTP input values
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  /**
   * Handles the click event for the 'Get OTP' button.
   * Logs the mobile number for OTP request (you would typically call an API here).
   */
  const handleGetOtp = (): void => {
    console.log('Get OTP for', mobileNumber);
  };

  /**
   * Handles the form submission event for logging in.
   * Prevents default form submission behavior and logs the mobile number and OTP.
   * @param e - The form submission event.
   */
  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log('Login with', mobileNumber, otp);
  };

  return (
    <Box>
      {/* Navigation bar component */}
      <Nav />
      
      {/* Main content area with flexbox layout */}
      <Box display="flex" justifyContent="center" alignItems="flex-start" minHeight="100vh" bgcolor="gray.100" pt={4}>
        {/* Login form container */}
        <Box
          sx={{
            width: { xs: '94%', sm: '70%', md: '50%', lg: '40%' },
            borderRadius: 2,
            mt: { xs: 4, sm: 6 },
            mb: 6,
            py: 4,
            px: { xs: 2, lg: 6 },
            border: '2px solid #B2DFDB',
            backgroundColor: 'white',
            boxShadow: 3,
          }}
        >
          {/* Page title */}
          <Typography variant="h4" align="center" mb={4} fontWeight="fontWeightBold">
            Login
          </Typography>
          
          {/* Login form */}
          <form onSubmit={handleLogin}>
            {/* Mobile number input field */}
            <Box mb={2}>
              <Typography component="label" color="textPrimary" mb={0} display="block" htmlFor="mobileNumber">
                Mobile Number
              </Typography>
              <Box position="relative">
                <TextField
                  id="mobileNumber"
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 40,
                    },
                  }}
                />
                <Button
                  onClick={handleGetOtp}
                  disabled={mobileNumber.length !== 10}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '56%',
                    transform: 'translateY(-50%)',
                    padding: '4px 8px', // Reduced padding
                    borderRadius: 2,
                    textTransform: 'none',
                    ...(mobileNumber.length === 10
                      ? {
                          bgcolor: '#26a69a',
                          color: 'white',
                          '&:hover': { bgcolor: '#1e857b' },
                        }
                      : {
                          bgcolor: '#e0e0e0',
                          color: '#9e9e9e',
                          cursor: 'not-allowed',
                        }),
                  }}
                >
                  Get OTP
                </Button>
              </Box>
            </Box>
            
            {/* OTP input field */}
            <Box mb={4}>
              <Typography component="label" color="textPrimary" mb={0} display="block" htmlFor="otp">
                Enter OTP
              </Typography>
              <TextField
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                variant="outlined"
                margin="normal"
                
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    height: 40,
                  },
                }}
              />
            </Box>
            
            {/* Submit button */}
            <Button
              type="submit"
              disabled={mobileNumber.length !== 10 || otp === ''}
              fullWidth
              sx={{
                padding: '8px 12px', // Reduced padding
                borderRadius: 1,
                textTransform: 'none',
                ...(mobileNumber.length === 10 && otp !== ''
                  ? {
                      bgcolor: '#26a69a',
                      color: 'white',
                      '&:hover': { bgcolor: '#1e857b' },
                    }
                  : {
                      bgcolor: '#e0e0e0',
                      color: '#9e9e9e',
                      cursor: 'not-allowed',
                    }),
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

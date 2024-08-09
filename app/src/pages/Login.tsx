import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Nav from '../components/login/NavBar';

const Login: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOtp = () => {
    console.log('Get OTP for', mobileNumber);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with', mobileNumber, otp);
  };

  return (
    <Box>
      <Nav />
      <Box display="flex" justifyContent="center" alignItems="flex-start" minHeight="100vh" bgcolor="gray.100" pt={4}>
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
          <Typography variant="h4" align="center" mb={4} fontWeight="fontWeightBold">
            Login
          </Typography>
          <form onSubmit={handleLogin}>
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

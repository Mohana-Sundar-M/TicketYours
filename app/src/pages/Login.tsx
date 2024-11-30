import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRequestOtpMutation, useVerifyOtpMutation } from '../services/otpApi';
import LoadingSpinner from '../components/public/LoadingSpinner';
import Nav from '../components/public/NavBar2';

const Login: React.FC = () => {
  const { setUser, setToken } = useAuth(); // Destructure from AuthContext
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // To control loading state
  const [mobileDisabled, setMobileDisabled] = useState<boolean>(false); // Control mobile field disable state
  const [requestOtp] = useRequestOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  const [tk , setTk] = useState('')

  const handleGetOtp = async (): Promise<void> => {
    setError(null); // Reset error message
    setOtpSent(false); // Reset OTP sent status
    setLoading(true); // Start loading
    setMobileDisabled(true); // Disable mobile number field when OTP is requested

    try {
      const response = await requestOtp({ mobile: mobileNumber }).unwrap();
      console.log('OTP requested:', response);
      setTk(response.data);
      setOtpSent(true); // Set OTP sent status to true
    } catch (error: any) {
      console.error('Error requesting OTP:', error.message || error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false); // Stop loading
      setMobileDisabled(false); // Enable mobile number field after OTP request (successful or failed)
    }
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset error message

    try {
      const response = await verifyOtp({ token: tk, otp }).unwrap();
      console.log('Received token:', response.token); // Log token received
      setUser('Logged-in User'); // Replace with actual user data if available
      setToken(tk);
      
      navigate('/'); // Redirect after successful login
    } catch (error: any) {
      console.error('Error verifying OTP:', error.message || error);
      if (error?.data?.message === 'otp/invalid-token') {
        setError('Invalid OTP. Please try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false); // Stop loading
      setMobileDisabled(false); // Enable mobile number field again after verification attempt (success or error)
    }
  };

  return (
    <Box>
      <Nav />
      <Box display="flex" justifyContent="center" alignItems="flex-start" minHeight="100vh" pt={4}>
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
            position: 'relative', // Allow positioning of the spinner inside this container
          }}
        >
          {/* Show Loading Spinner if the request is being processed */}
          {loading && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10, // Ensure spinner is above the content
              }}
            >
              <LoadingSpinner />
            </Box>
          )}

          <Typography variant="h4" align="center" mb={4} fontWeight="fontWeightBold">
            Login
          </Typography>

          {/* Show OTP sent success message */}
          {otpSent && (
            <Box
              mb={3}
              p={2}
              bgcolor="#e8f5e9"
              borderRadius={1}
              border="1px solid #4caf50"
              display="flex"
              justifyContent="center"
            >
              <Typography color="#388e3c" variant="body1">
                OTP sent successfully! Please check your phone.
              </Typography>
            </Box>
          )}

          {/* Show error message */}
          {error && (
            <Box
              mb={3}
              p={2}
              bgcolor="#ffebee"
              borderRadius={1}
              border="1px solid #f44336"
              display="flex"
              justifyContent="center"
            >
              <Typography color="#d32f2f" variant="body1">
                {error}
              </Typography>
            </Box>
          )}

          <form onSubmit={handleLogin}>
            <Box mb={2}>
              <Typography component="label" mb={0} display="block" htmlFor="mobileNumber">
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
                    '& .MuiOutlinedInput-root.Mui-focused': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#26a69a',
                      },
                    },
                  }}
                  disabled={mobileDisabled} // Disable the field if mobileDisabled is true
                />
                <Button
                  onClick={handleGetOtp}
                  disabled={mobileNumber.length !== 10 || mobileDisabled}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '56%',
                    transform: 'translateY(-50%)',
                    padding: '4px 8px',
                    borderRadius: 2,
                    textTransform: 'none',
                    ...(mobileNumber.length === 10 && !mobileDisabled
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
              <Typography component="label" mb={0} display="block" htmlFor="otp">
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
                  '& .MuiOutlinedInput-root.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#26a69a',
                    },
                  },
                }}
              />
            </Box>
            <Button
              type="submit"
              disabled={mobileNumber.length !== 10 || otp === ''}
              fullWidth
              sx={{
                padding: '8px 12px',
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

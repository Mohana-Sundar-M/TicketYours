
import React from 'react';
import { useState } from 'react';


const Login: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOtp = () => {
    // Your OTP handling logic
    console.log('Get OTP for', mobileNumber);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Your login handling logic
    console.log('Login with', mobileNumber, otp);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-8">
      <div className="login-box w-[94%] sm:w-[70%] md:w-[50%] lg:w-[40%] rounded-xl mx-auto mt-0 sm:mt-8 mb-10 py-8 px-3 lg:px-8 border-2 border-teal-100 bg-white shadow-lg ">
        <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="relative">
              <input
                id="mobileNumber"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
              <button
                type="button"
                onClick={handleGetOtp}
                disabled={mobileNumber.length !== 10}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  mobileNumber.length === 10
                    ? 'bg-teal-400 text-white hover:bg-teal-500'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Get OTP
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="otp">
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
          </div>
          <button
            type="submit"
            disabled={mobileNumber.length !== 10 || otp === ''}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              mobileNumber.length === 10 && otp !== ''
                ? 'bg-teal-400 text-white hover:bg-teal-500'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


import React from 'react';
import { useState } from 'react';


const Login: React.FC = () => {
  const [mobile, setmobile] = useState('');
  const [Otp, setOtp] = useState('');

  const handlemobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmobile(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="h-85vh flex items-center justify-center bg-white p-12">
       
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
            <input
              type="mobile"
              id="mobile"
              value={mobile}
              onChange={handlemobileChange}
              className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="mb-0 text-right">
            <a href="#" className="text-teal-500 hover:underline">Get Otp</a>
          </div>
          <div className="mb-4">
            <label htmlFor="Otp" className="block text-gray-700">Enter OTP</label>
            <input
              type="Otp"
              id="Otp"
              value={Otp}
              onChange={handleOtpChange}
              className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          
          <button type="submit" className="w-full bg-teal-400 text-white p-2 rounded hover:bg-teal-500 transition duration-200">Login</button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;

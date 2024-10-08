import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaArrowLeft } from 'react-icons/fa';

/**
 * ContactPage component allows users to input their email and mobile number.
 * It performs validation to ensure the email and mobile number are correctly formatted.
 */
const ContactPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; mobile: string }>({ email: '', mobile: '' });

  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobile = (mobile: string): boolean => {
    const re = /^\d{10}$/;
    return re.test(String(mobile));
  };

  const handleNextClick = (): void => {
    let emailError = '';
    let mobileError = '';

    if (!validateEmail(email)) {
      emailError = 'Invalid email address';
    }

    if (!validateMobile(mobile)) {
      mobileError = 'Invalid mobile number. Must be 10 digits.';
    }

    if (emailError || mobileError) {
      setErrors({ email: emailError, mobile: mobileError });
    } else {
      setErrors({ email: '', mobile: '' });
      // Navigate to Payment route on successful validation
      navigate('/payment');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white p-4 shadow-md flex items-center">
        {/* Back button with an icon */}
        <button className="mr-4">
          <FaArrowLeft className="w-6 h-6" />
        </button>
        {/* Page title */}
        <h1 className="text-xl font-bold">Contact details</h1>
      </div>

      {/* Form Content */}
      <div className="flex-grow p-6">
        {/* Email input field */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-medium">
            <span className="text-red-500">*</span> Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-teal-300 focus:ring-teal-500'
            }`}
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
          <p className="text-sm text-teal-500 mt-2">Enter a valid email address.</p>
        </div>
        
        {/* Mobile number input field */}
        <div className="mb-6">
          <label htmlFor="mobile" className="block mb-2 font-medium">
            <span className="text-red-500">*</span> Mobile number
          </label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className={`w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-teal-300 focus:ring-teal-500'
            }`}
          />
          {errors.mobile && <p className="text-red-500 mt-2">{errors.mobile}</p>}
          <p className="text-sm text-teal-500 mt-2">To access tickets on other devices, login with this number.</p>
        </div>

        {/* Next button */}
        <div className="flex justify-start">
          <button
            type="button"
            onClick={handleNextClick}
            className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

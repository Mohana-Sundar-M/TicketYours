import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

/**
 * ContactPage component allows users to input their email and mobile number.
 * It performs validation to ensure the email and mobile number are correctly formatted.
 */
const ContactPage: React.FC = () => {
  // State to manage email input and validation errors
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; mobile: string }>({ email: '', mobile: '' });

  /**
   * Validates the format of the provided email address.
   * @param email - The email address to validate.
   * @returns True if the email address is valid, false otherwise.
   */
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  /**
   * Validates the format of the provided mobile number.
   * @param mobile - The mobile number to validate.
   * @returns True if the mobile number is exactly 10 digits long, false otherwise.
   */
  const validateMobile = (mobile: string): boolean => {
    const re = /^\d{10}$/;
    return re.test(String(mobile));
  };

  /**
   * Handles the click event for the 'Next' button.
   * Validates the email and mobile number, sets errors if validation fails, or proceeds if valid.
   */
  const handleNextClick = (): void => {
    let emailError = '';
    let mobileError = '';

    // Validate email and mobile number
    if (!validateEmail(email)) {
      emailError = 'Invalid email address';
    }

    if (!validateMobile(mobile)) {
      mobileError = 'Invalid mobile number. Must be 10 digits.';
    }

    // Set validation errors or proceed with valid input
    if (emailError || mobileError) {
      setErrors({ email: emailError, mobile: mobileError });
    } else {
      setErrors({ email: '', mobile: '' });
      // Handle successful validation (e.g., navigate to the next page)
      console.log('Email and Mobile are valid');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white p-4 shadow-md flex items-center">
        {/* Back button with an icon */}
        <button className="mr-4">
          <FaArrowLeft className="w-6 h-6 " />
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

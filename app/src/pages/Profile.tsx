import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideMenu from "../components/profile/SideMenu"; // Component for the sidebar menu
import PersonalDetails from "../components/profile/PersonalDetails"; // Component for personal details
import ProfileHead from "../components/profile/ProfileHead"; // Component for profile header
import MyBookings from "../components/profile/MyBookings"; // Component for my bookings
import CustomerSupport from "../components/profile/CustomerSupport"; // Component for customer support
import TermsCondition from "../components/profile/TermsCondition"; // Component for terms and conditions
import Faq from "../components/profile/Faq"; // Component for frequently asked questions
import FeedBack from "../components/profile/FeedBack"; // Component for feedback

import "../css/Profile.css"; // Custom CSS for the profile page
import Nav from "../components/public/NavBar"; // Navigation bar component

//This Page is a Profile Page It shows all the deatils about the user

const Profile: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null); // State to track the active menu item
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle menu item clicks
  const handleMenuClick = (path: string) => {
    setActiveComponent(path);
    navigate(path);
  };

  // Function to handle back button clicks
  const handleBackClick = () => {
    setActiveComponent(null);
    navigate('/profile');  // Navigate back to the profile main page
  };

  return (
    <div className="min-w-full">
      <Nav /> {/* Navigation bar */}
      <ProfileHead /> {/* Profile header */}

      <div className="min-h-svh flex md:flex-row bg-gray-100 cu500:px-10 md:px-20 pt-4 pt-3 rounded-lg flex-col gap-4 py-4">
        {/* Sidebar menu - visible on larger screens */}
        <div className={`w-full md:w-1/4 ${activeComponent ? 'hidden md:block' : ''}`}>
          <SideMenu onMenuClick={(path) => handleMenuClick(`/profile${path}`)} />
        </div>

        {/* Main content area - visible on larger screens when no component is active */}
        <div className={`w-full md:w-3/4 ${activeComponent ? '' : 'hidden md:block'}`}>
          {activeComponent && (
            <button
              onClick={handleBackClick}
              className="mb-4 bg-gray-200 p-2 rounded md:hidden"
              style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold' }}
            >
              &larr; Back
            </button>
          )}
          
          {/* Routes to different profile sections */}
          <Routes>
            <Route path="/" element={<PersonalDetails />} />
            <Route path="bookings" element={<MyBookings />} />
            <Route path="support" element={<CustomerSupport />} />
            <Route path="terms" element={<TermsCondition />} />
            <Route path="faq" element={<Faq />} />
            <Route path="feedback" element={<FeedBack />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;

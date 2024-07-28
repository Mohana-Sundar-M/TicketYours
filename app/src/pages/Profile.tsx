/* <BrowserRouter>
      <Profile/>
      </BrowserRouter>
  use the profile with the above structure to work
*/ 


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import SideMenu from "../components/profile/SideMenu";
import PersonalDetails from "../components/profile/PersonalDetails";
import ProfileHead from "../components/profile/ProfileHead";
import MyBookings from "../components/profile/MyBookings";
import CustomerSupport from "../components/profile/CustomerSupport";
import TermsCondition from "../components/profile/TermsCondition";
import Faq from "../components/profile/Faq";
import FeedBack from "../components/profile/FeedBack";

import "../css/Profile.css";

const Profile: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    setActiveComponent(path);
    navigate(path);
  };

  const handleBackClick = () => {
    setActiveComponent(null);
    navigate('/');
  };

  return (
    <div className="min-w-full">
      <ProfileHead />
      <div className="min-h-svh flex md:flex-row bg-gray-100 cu500:px-10 md:px-20 pt-4 pt-3 rounded-lg flex-col gap-4 py-4">
        <div className={`w-full md:w-1/4 ${activeComponent ? 'hidden md:block' : ''}`}>
          <SideMenu onMenuClick={handleMenuClick} />
        </div>
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
          <Routes>
            <Route path="/" element={<PersonalDetails />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/terms" element={<TermsCondition />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/feedback" element={<FeedBack />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;

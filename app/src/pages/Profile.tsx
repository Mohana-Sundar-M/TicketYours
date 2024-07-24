// src/Profile.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "../components/profile/SideMenu";
import PersonalDetails from "../components/profile/PersonalDetails";

import "../css/Profile.css";
import ProfileHead from "../components/profile/ProfileHead";
import MyBookings from "../components/profile/MyBookings";
import CustomerSupport from "../components/profile/CustomerSupport";
import TermsCondition from "../components/profile/TermsCondition";
import Faq from "../components/profile/Faq";
import FeedBack from "../components/profile/FeedBack";

const Profile: React.FC = () => {
  return (
    <Router>
      <div className="min-w-full">
        <ProfileHead />
        <div className=" min-h-svh flex md:flex-row bg-gray-100 cu500:px-10 md-px-20 pt-4 pt-3 rounded-lg flex-col gap-4 py-4">
          <SideMenu />
          <div className="w-full h-fit">
            <Routes>
              <Route path="/" Component={PersonalDetails} />
              <Route path="/bookings" Component={MyBookings} />
              <Route path="/support" Component={CustomerSupport} />
              <Route path="/terms" Component={TermsCondition} />
              <Route path="/faq" Component={Faq} />
              <Route path="/feedback" Component={FeedBack} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Profile;

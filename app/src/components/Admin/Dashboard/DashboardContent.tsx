// src/components/MainContent.tsx
import {
  FaTicketAlt, FaMoneyBillWave, FaUser, FaBuilding, FaFilm, FaTheaterMasks,
  FaClock, FaCalendarAlt, FaInfoCircle, FaUserPlus, FaExclamationTriangle,
  FaCommentsDollar, FaCommentDots
} from 'react-icons/fa';

const DashboardContent = () => {
  return (
    <div className="lg:ml-64 w-full lg:w-3/4 p-6 lg:p-10">
      {/* Greeting Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Good Morning, Dileep</h1>
      <p className="text-gray-500 text-base md:text-lg">Here’s what’s been happening in your world</p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mt-6 lg:mt-8">
        {/* Total Users */}
        <div className="bg-blue-50 p-4 lg:p-6 rounded-lg border flex flex-col items-start">
          <FaUser className="text-xl lg:text-2xl text-blue-500 mb-2" />
          <h3 className="text-gray-700 text-sm lg:text-base">Total Users</h3>
          <p className="text-2xl lg:text-3xl font-bold">1,200</p>
          <span className="text-green-500 text-sm lg:text-lg mt-1">+5%</span>
        </div>

        {/* Theaters */}
        <div className="bg-yellow-50 p-4 lg:p-6 rounded-lg border flex flex-col items-start">
          <FaBuilding className="text-xl lg:text-2xl text-yellow-500 mb-2" />
          <h3 className="text-gray-700 text-sm lg:text-base">Theaters</h3>
          <p className="text-2xl lg:text-3xl font-bold">150</p>
          <span className="text-green-500 text-sm lg:text-lg mt-1">+5%</span>
        </div>

        {/* Movies */}
        <div className="bg-red-50 p-4 lg:p-6 rounded-lg border flex flex-col items-start">
          <FaFilm className="text-xl lg:text-2xl text-red-500 mb-2" />
          <h3 className="text-gray-700 text-sm lg:text-base">Movies</h3>
          <p className="text-2xl lg:text-3xl font-bold">300</p>
          <span className="text-green-500 text-sm lg:text-lg mt-1">+5%</span>
        </div>

        {/* Tickets Sold Today */}
        <div className="bg-green-50 p-4 lg:p-6 rounded-lg border flex flex-col items-start">
          <FaTicketAlt className="text-xl lg:text-2xl text-green-500 mb-2" />
          <h3 className="text-gray-700 text-sm lg:text-base">Tickets Sold Today</h3>
          <p className="text-2xl lg:text-3xl font-bold">5,000</p>
          <span className="text-green-500 text-sm lg:text-lg mt-1">+5%</span>
        </div>

        {/* Today's Revenue */}
        <div className="bg-teal-50 p-4 lg:p-6 rounded-lg border flex flex-col items-start">
          <FaMoneyBillWave className="text-xl lg:text-2xl text-teal-500 mb-2" />
          <h3 className="text-gray-700 text-sm lg:text-base">Today's Revenue</h3>
          <p className="text-2xl lg:text-3xl font-bold">$50,000</p>
          <span className="text-green-500 text-sm lg:text-lg mt-1">+5%</span>
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mt-8 lg:mt-12">
        {/* Add Theater */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaTheaterMasks className="text-2xl lg:text-3xl text-purple-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">Add Theater</h3>
          <p className="text-xs lg:text-sm text-gray-500">Add a new theater for ticket sales</p>
        </div>

        {/* Schedule Movie */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaClock className="text-2xl lg:text-3xl text-orange-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">Schedule Movie</h3>
          <p className="text-xs lg:text-sm text-gray-500">Schedule a movie for showtimes</p>
        </div>

        {/* View Bookings */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaCalendarAlt className="text-2xl lg:text-3xl text-cyan-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">View Bookings</h3>
          <p className="text-xs lg:text-sm text-gray-500">View all current and upcoming bookings</p>
        </div>

        {/* Support Tickets */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaInfoCircle className="text-2xl lg:text-3xl text-pink-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">Support Tickets</h3>
          <p className="text-xs lg:text-sm text-gray-500">View all user support tickets</p>
        </div>

        {/* View All Activity */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaUser className="text-2xl lg:text-3xl text-indigo-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">View All Activity</h3>
          <p className="text-xs lg:text-sm text-gray-500">View all recent activity in your account</p>
        </div>
      </div>

      {/* New Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 mt-8 lg:mt-12">
        {/* User Signups */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaUserPlus className="text-2xl lg:text-3xl text-green-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">User Signups</h3>
          <p className="text-xs lg:text-sm text-gray-500">See new user signups</p>
        </div>

        {/* Pending Payouts */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaCommentsDollar className="text-2xl lg:text-3xl text-yellow-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">Pending Payouts</h3>
          <p className="text-xs lg:text-sm text-gray-500">Manage pending payouts</p>
        </div>

        {/* Theater Issues */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaExclamationTriangle className="text-2xl lg:text-3xl text-red-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">Theater Issues</h3>
          <p className="text-xs lg:text-sm text-gray-500">Check for reported theater issues</p>
        </div>

        {/* User Feedback */}
        <div className="bg-white p-4 lg:p-6 rounded-lg border flex flex-col items-start h-40 lg:h-48">
          <FaCommentDots className="text-2xl lg:text-3xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-sm lg:text-lg">User Feedback</h3>
          <p className="text-xs lg:text-sm text-gray-500">View user feedback</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

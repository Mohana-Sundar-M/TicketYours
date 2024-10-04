import React, { useState } from 'react';
import { ChevronLeftIcon, CalendarIcon, MagnifyingGlassIcon, TicketIcon } from '@heroicons/react/24/outline'; // Using TicketIcon for the correct match
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Header: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Today' | 'This Month'>('Today');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDateRange([start, end]);
  };

  return (
    <div className="p-4 bg-white border-b flex flex-col space-y-2">
      {/* Top section: Ticket Icon and Search bar */}
      <div className="flex items-center space-x-4">
        {/* Theater Ticket Icon directly placed with no button */}
        <TicketIcon className="h-6 w-6 text-gray-600" /> {/* Ticket Icon for the theater look, no button */}

        {/* Search bar */}
        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Middle section: Back Arrow, Analytics text, Date Range Picker, and Tabs in the same line */}
      <div className="flex items-center space-x-4 w-full mt-2">
        {/* Back Arrow Icon and Analytics Text */}
        <div className="flex items-center space-x-2">
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          <span className="font-semibold text-lg">Analytics</span>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-full ${selectedTab === 'Today' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100'}`}
            onClick={() => setSelectedTab('Today')}
          >
            Today
          </button>
          <button
            className={`px-4 py-2 rounded-full ${selectedTab === 'This Month' ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100'}`}
            onClick={() => setSelectedTab('This Month')}
          >
            This Month
          </button>
        </div>

        {/* Date Range Picker */}
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-gray-600" />
          <DatePicker
            selected={dateRange[0] || undefined}
            onChange={handleDateChange}
            startDate={dateRange[0] || undefined}
            endDate={dateRange[1] || undefined}
            selectsRange
            dateFormat="MMM dd, yyyy"
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholderText="June 01, 2023 - June 30, 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

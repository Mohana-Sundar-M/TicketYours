import React, { useState, useEffect } from 'react';
import { FiX, FiChevronDown, FiFilter } from 'react-icons/fi';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DateNavigation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('3');
  const [isShowtimeOpen, setIsShowtimeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isFormatOpen, setIsFormatOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 24]);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.filter-popup') && !target.closest('.filter-button')) {
      setIsShowtimeOpen(false);
      setIsPriceOpen(false);
      setIsFormatOpen(false);
      setIsLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleShowtime = () => {
    setIsShowtimeOpen(!isShowtimeOpen);
    setIsPriceOpen(false);
    setIsFormatOpen(false);
    setIsLanguageOpen(false);
  };

  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
    setIsShowtimeOpen(false);
    setIsFormatOpen(false);
    setIsLanguageOpen(false);
  };

  const toggleFormat = () => {
    setIsFormatOpen(!isFormatOpen);
    setIsShowtimeOpen(false);
    setIsPriceOpen(false);
    setIsLanguageOpen(false);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
    setIsShowtimeOpen(false);
    setIsPriceOpen(false);
    setIsFormatOpen(false);
  };

  const handleSliderChange = (value: [number, number]) => {
    setSliderValue(value);
  };

  const formatTime = (hour: number) => {
    if (hour === 24) return '12:00 AM';
    if (hour >= 12) {
      return `${hour - 12 === 0 ? 12 : hour - 12}:00 PM`;
    }
    return `${hour === 0 ? 12 : hour}:00 AM`;
  };

  const getTimeRange = () => {
    const [start, end] = sliderValue;
    return `${formatTime(start)} - ${formatTime(end)}`;
  };

  const handleOptionClick = () => {
    // Close the Showtime popup when an option is clicked
    setIsShowtimeOpen(false);
  };

  return (
    <div className="date-navigation-and-filters flex flex-col md:flex-row bg-gray-100 p-4 rounded w-full mt-6 md:mt-0">
      <div className="flex items-center space-x-2 justify-start overflow-x-auto md:overflow-visible md:pl-32">
        <div className="flex flex-col items-center">
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm transform rotate-90">AUG</span>
        </div>
        {['3', '4', '5', '6', '7'].map((date, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(date)}
            className={`w-12 p-2 rounded ${date === selectedDate ? 'bg-teal-400 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 flex flex-col items-center`}
          >
            <span className="text-xs">{['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'][index]}</span>
            <span className="text-sm">{date}</span>
          </button>
        ))}
      </div>

      <div className="border-l-2 h-full mx-16 hidden md:block"></div>
      <div className="flex items-center space-x-4 w-full justify-start overflow-x-auto md:overflow-visible md:ml-4 md:mt-0 mt-6">
        <div className="relative flex items-center">
          <FiFilter className="text-gray-700 md:hidden mr-2" />
          <span className="hidden md:block text-base">Filter By</span>
        </div>
        <div className="relative">
          <button
            className="filter-button p-3 bg-white rounded text-base md:w-32 flex items-center justify-between"
            onClick={toggleLanguage}
          >
            Language
            <FiChevronDown className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
          </button>
          {isLanguageOpen && (
            <div className="filter-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto md:absolute md:top-full md:left-0 md:transform-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">Language</span>
                <button onClick={toggleLanguage}>
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col space-y-3">
                {['Tamil', 'Telugu', 'Hindi', 'English', 'Kannada', 'Malayalam', 'Marathi'].map((language, index) => (
                  <label key={index} className="flex items-center space-x-3 text-sm">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="filter-button p-3 bg-white rounded text-base md:w-32 w-24 flex items-center justify-between"
            onClick={toggleFormat}
          >
            Format
            <FiChevronDown className={`transition-transform duration-300 ${isFormatOpen ? 'rotate-180' : ''}`} />
          </button>
          {isFormatOpen && (
            <div className="filter-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto md:absolute md:top-full md:left-0 md:transform-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">Format</span>
                <button onClick={toggleFormat}>
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col space-y-3">
                {['2D', '3D', 'IMAX 2D', 'IMAX 3D', '4DX'].map((format, index) => (
                  <label key={index} className="flex items-center space-x-3 text-sm">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{format}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="filter-button p-3 bg-white rounded text-base md:w-32 w-24 flex items-center justify-between"
            onClick={togglePrice}
          >
            Price
            <FiChevronDown className={`transition-transform duration-300 ${isPriceOpen ? 'rotate-180' : ''}`} />
          </button>
          {isPriceOpen && (
            <div className="filter-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto md:absolute md:top-full md:left-0 md:transform-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">Price</span>
                <button onClick={togglePrice}>
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col space-y-3">
                {['Below Rs 100', 'Rs 100 - Rs 199', 'Rs 200 - Rs 299', 'Rs 300 - Rs 399', 'Above Rs 400'].map((range, index) => (
                  <label key={index} className="flex items-center space-x-3 text-sm">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="filter-button p-3 bg-white rounded text-base md:w-32 w-24 flex items-center justify-between"
            onClick={toggleShowtime}
          >
            <FiFilter className="text-gray-700 md:hidden" />
            Showtime
            <FiChevronDown className={`transition-transform duration-300 ${isShowtimeOpen ? 'rotate-180' : ''}`} />
          </button>
          {isShowtimeOpen && (
            <div className="filter-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto md:absolute md:top-full md:left-0 md:transform-none">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">Showtime</span>
                <button onClick={handleOptionClick}>
                  <FiX />
                </button>
              </div>
              <span className="text-gray-600 text-sm mb-2 block">{getTimeRange()}</span>
              <Slider
                range
                value={sliderValue}
                onChange={handleSliderChange}
                min={0}
                max={24}
                step={1}
                trackStyle={[{ backgroundColor: '#38b2ac' }]}
                handleStyle={[{ borderColor: '#38b2ac' }, { borderColor: '#38b2ac' }]}
                railStyle={{ backgroundColor: '#cbd5e0' }}
              />
              <div className="flex justify-between mt-4 text-gray-600 text-sm">
                <span>12:00 AM</span>
                <span>11:59 PM</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateNavigation;

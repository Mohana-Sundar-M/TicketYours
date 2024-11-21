import React from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface DesktopFilterProps {
  isShowtimeOpen: boolean;
  isPriceOpen: boolean;
  isFormatOpen: boolean;
  isLanguageOpen: boolean;
  toggleDropdown: (dropdown: string) => void;
  sliderValue: [number, number];
  handleSliderChange: (value: number | number[]) => void;
  getTimeRange: () => string;
}

const DesktopFilter: React.FC<DesktopFilterProps> = ({
  isShowtimeOpen,
  isPriceOpen,
  isFormatOpen,
  isLanguageOpen,
  toggleDropdown,
  sliderValue,
  handleSliderChange,
  getTimeRange,
}) => {
  return (
    <div className="flex items-center space-x-4 w-full justify-start overflow-x-auto md:overflow-visible md:ml-4 md:mt-8 mt-6">
      {/* Filter By (Hide on mobile view) */}
      <div className="relative hidden md:block mb-4">
        <span className="text-base">Filter By</span>
      </div>

      {/* Language Filter */}
      <div className="relative hidden md:block mb-4">
        <button
          className="filter-button p-3 bg-white rounded text-base w-32 flex items-center justify-between"
          onClick={() => toggleDropdown('language')}
        >
          Language
          <FiChevronDown className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
        </button>
        {isLanguageOpen && (
          <div className="filter-popup absolute top-full left-0 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Language</span>
              <button onClick={() => toggleDropdown('language')}>
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

      {/* Format Filter */}
      <div className="relative hidden md:block mb-4">
        <button
          className="filter-button p-3 bg-white rounded text-base w-32 flex items-center justify-between"
          onClick={() => toggleDropdown('format')}
        >
          Format
          <FiChevronDown className={`transition-transform duration-300 ${isFormatOpen ? 'rotate-180' : ''}`} />
        </button>
        {isFormatOpen && (
          <div className="filter-popup absolute top-full left-0 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Format</span>
              <button onClick={() => toggleDropdown('format')}>
                <FiX />
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              {['2D', '3D', 'IMAX'].map((format, index) => (
                <label key={index} className="flex items-center space-x-3 text-sm">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{format}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Showtime Filter */}
      <div className="relative hidden md:block mb-4">
        <button
          className="filter-button p-3 bg-white rounded text-base w-32 flex items-center justify-between"
          onClick={() => toggleDropdown('showtime')}
        >
          Showtime
          <FiChevronDown className={`transition-transform duration-300 ${isShowtimeOpen ? 'rotate-180' : ''}`} />
        </button>
        {isShowtimeOpen && (
          <div className="filter-popup absolute top-full left-0 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Showtime</span>
              <button onClick={() => toggleDropdown('showtime')}>
                <FiX />
              </button>
            </div>
            <Slider
              range
              min={0}
              max={24}
              step={1}
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <div className="mt-4 text-sm text-gray-700">{getTimeRange()}</div>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="relative hidden md:block mb-4">
        <button
          className="filter-button p-3 bg-white rounded text-base w-32 flex items-center justify-between"
          onClick={() => toggleDropdown('price')}
        >
          Price
          <FiChevronDown className={`transition-transform duration-300 ${isPriceOpen ? 'rotate-180' : ''}`} />
        </button>
        {isPriceOpen && (
          <div className="filter-popup absolute top-full left-0 w-64 bg-white p-6 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Price</span>
              <button onClick={() => toggleDropdown('price')}>
                <FiX />
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              {['₹100-₹500', '₹500-₹1000', '₹1000+'].map((price, index) => (
                <label key={index} className="flex items-center space-x-3 text-sm">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{price}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopFilter;

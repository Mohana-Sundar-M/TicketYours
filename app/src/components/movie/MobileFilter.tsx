import React from 'react';
import { FiChevronDown, FiFilter, FiX } from 'react-icons/fi';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface MobileFilterProps {
  isMobileFilterOpen: boolean;
  toggleMobileFilterDrawer: () => void;
  mobileDropdownState: {
    language: boolean;
    format: boolean;
    showtime: boolean;
    price: boolean;
  };
  toggleMobileDropdown: (filter: 'language' | 'format' | 'showtime' | 'price') => void; // Updated type here
  sliderValue: [number, number];
  handleSliderChange: (value: number | number[]) => void;
  getTimeRange: () => string;
}

const MobileFilter: React.FC<MobileFilterProps> = ({
  isMobileFilterOpen,
  toggleMobileFilterDrawer,
  mobileDropdownState,
  toggleMobileDropdown,
  sliderValue,
  handleSliderChange,
  getTimeRange,
}) => {
  return (
    <div>
      {/* Mobile filter button */}
      <button
        className="md:hidden fixed bottom-4 right-4 p-3 bg-teal-500 text-white rounded-full shadow-lg z-50"
        onClick={toggleMobileFilterDrawer}
      >
        <FiFilter className="text-xl" />
      </button>

      {/* Mobile filter drawer */}
      {isMobileFilterOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-40">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Filters</span>
              <button onClick={toggleMobileFilterDrawer}>
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Language Filter */}
            <div>
              <button
                className="w-full flex justify-between items-center text-left text-base"
                onClick={() => toggleMobileDropdown('language')}
              >
                <span className="font-semibold">Language</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${mobileDropdownState.language ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileDropdownState.language && (
                <div className="mt-2 space-y-3">
                  {['Tamil', 'Telugu', 'Hindi', 'English', 'Kannada', 'Malayalam', 'Marathi'].map((language) => (
                    <label key={language} className="flex items-center space-x-3 text-sm">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{language}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Format Filter */}
            <div className="mt-4">
              <button
                className="w-full flex justify-between items-center text-left text-base"
                onClick={() => toggleMobileDropdown('format')}
              >
                <span className="font-semibold">Format</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${mobileDropdownState.format ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileDropdownState.format && (
                <div className="mt-2 space-y-3">
                  {['2D', '3D', 'IMAX'].map((format) => (
                    <label key={format} className="flex items-center space-x-3 text-sm">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{format}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Showtime Filter */}
            <div className="mt-4">
              <button
                className="w-full flex justify-between items-center text-left text-base"
                onClick={() => toggleMobileDropdown('showtime')}
              >
                <span className="font-semibold">Showtime</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${mobileDropdownState.showtime ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileDropdownState.showtime && (
                <div className="mt-2">
                  <Slider
                    range
                    min={0}
                    max={24}
                    step={1}
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                  <div className="mt-2 text-sm text-gray-700">{getTimeRange()}</div>
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mt-4">
              <button
                className="w-full flex justify-between items-center text-left text-base"
                onClick={() => toggleMobileDropdown('price')}
              >
                <span className="font-semibold">Price</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${mobileDropdownState.price ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileDropdownState.price && (
                <div className="mt-2 space-y-3">
                  {['₹100-₹500', '₹500-₹1000', '₹1000+'].map((price) => (
                    <label key={price} className="flex items-center space-x-3 text-sm">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{price}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilter;

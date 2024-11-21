import React, { useState, useEffect } from 'react';
import DesktopFilter from './DesktopFilter';
import MobileFilter from './MobileFilter';

type FilterKeys = 'language' | 'format' | 'showtime' | 'price'; // Union of valid keys

const DateAndFilters: React.FC = () => {
  const [isShowtimeOpen, setIsShowtimeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isFormatOpen, setIsFormatOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 24]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Use the 'FilterKeys' type for mobileDropdownState
  const [mobileDropdownState, setMobileDropdownState] = useState<Record<FilterKeys, boolean>>({
    language: false,
    format: false,
    showtime: false,
    price: false,
  });

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.filter-popup') && !target.closest('.filter-button')) {
      setIsShowtimeOpen(false);
      setIsPriceOpen(false);
      setIsFormatOpen(false);
      setIsLanguageOpen(false);
    }
  };

  // Add and remove event listener for clicks outside of filter popups
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    switch (dropdown) {
      case 'showtime':
        setIsShowtimeOpen(!isShowtimeOpen);
        setIsPriceOpen(false);
        setIsFormatOpen(false);
        setIsLanguageOpen(false);
        break;
      case 'price':
        setIsPriceOpen(!isPriceOpen);
        setIsShowtimeOpen(false);
        setIsFormatOpen(false);
        setIsLanguageOpen(false);
        break;
      case 'format':
        setIsFormatOpen(!isFormatOpen);
        setIsShowtimeOpen(false);
        setIsPriceOpen(false);
        setIsLanguageOpen(false);
        break;
      case 'language':
        setIsLanguageOpen(!isLanguageOpen);
        setIsShowtimeOpen(false);
        setIsPriceOpen(false);
        setIsFormatOpen(false);
        break;
      default:
        break;
    }
  };

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValue([value[0], value[1]]);
    } else {
      setSliderValue([value, value]);
    }
  };

  const formatTime = (hour: number) => {
    if (hour === 24) return '12:00 AM';
    if (hour >= 12) return `${hour - 12}:00 PM`;
    return `${hour}:00 AM`;
  };

  const getTimeRange = () => {
    return `${formatTime(sliderValue[0])} - ${formatTime(sliderValue[1])}`;
  };

  const toggleMobileFilterDrawer = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const toggleMobileDropdown = (filter: FilterKeys) => {
    setMobileDropdownState((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter], // Safe to index now
    }));
  };

  return (
    <div>
      {/* Desktop View Filters */}
      <DesktopFilter
        isShowtimeOpen={isShowtimeOpen}
        isPriceOpen={isPriceOpen}
        isFormatOpen={isFormatOpen}
        isLanguageOpen={isLanguageOpen}
        toggleDropdown={toggleDropdown}
        sliderValue={sliderValue}
        handleSliderChange={handleSliderChange}
        getTimeRange={getTimeRange}
      />

      {/* Mobile View Filters */}
      <MobileFilter
        isMobileFilterOpen={isMobileFilterOpen}
        toggleMobileFilterDrawer={toggleMobileFilterDrawer}
        mobileDropdownState={mobileDropdownState}
        toggleMobileDropdown={toggleMobileDropdown}
        sliderValue={sliderValue}
        handleSliderChange={handleSliderChange}
        getTimeRange={getTimeRange}
      />

     
    </div>
  );
};

export default DateAndFilters;

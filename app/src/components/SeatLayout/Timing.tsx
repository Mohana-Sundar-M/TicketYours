import React, { useEffect, useState } from 'react';

interface TimingProps {
  onSelect: (time: string) => void;
  defaultTime: string | null;
}

interface Timing {
  id: number;
  time: string;
  label: string;
  isSelected: boolean;
  isHighlighted: boolean;
}

const timings: Timing[] = [
  { id: 1, time: '05:00 PM', label: '', isSelected: true, isHighlighted: false },
  { id: 2, time: '06:00 PM', label: '', isSelected: false, isHighlighted: false },
  { id: 3, time: '07:00 PM', label: '', isSelected: false, isHighlighted: true },
  { id: 4, time: '08:00 PM', label: '', isSelected: false, isHighlighted: false },
  { id: 5, time: '09:00 PM', label: '', isSelected: false, isHighlighted: false },
  { id: 6, time: '10:00 PM', label: '', isSelected: false, isHighlighted: true },
  { id: 7, time: '10:30 PM', label: '', isSelected: false, isHighlighted: false },
];

const Timing: React.FC<TimingProps> = ({ onSelect, defaultTime }) => {
  const [selectedTime, setSelectedTime] = useState<number>(timings[0].id);  // Default to the first timing
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the width on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const defaultTiming = timings.find(timing => timing.time === defaultTime) || timings[0];
    setSelectedTime(defaultTiming.id);
    onSelect(defaultTiming.time);  // Set default time to the first timing or passed defaultTime
  }, [defaultTime, onSelect]);

  const handleSelect = (id: number, time: string) => {
    setSelectedTime(id);
    onSelect(time);
  };

  // Define button styles with slightly reduced size and increased spacing
  const buttonStyles: React.CSSProperties = {
    width: windowWidth <= 640 ? '70px' : '100px',  // Slightly reduced width for mobile and desktop
    minHeight: '35px',  // Slightly reduced height
    padding: windowWidth <= 640 ? '4px' : '6px',  // Slightly reduced padding
    fontSize: windowWidth <= 640 ? '0.7rem' : '0.8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
    alignItems: 'center',
    boxSizing: 'border-box',  // Include padding and border in width/height
    transition: 'background-color 0.3s, border-color 0.3s',  // Smooth transition
    marginRight: windowWidth <= 640 ? '6px' : '10px',  // Reduced space between buttons
  };

  // Define label styles with adjusted size for mobile view and reduced space from time
  const labelStyles: React.CSSProperties = {
    fontSize: windowWidth <= 640 ? '0.65rem' : '0.75rem',  // Smaller font size for mobile view
    marginTop: windowWidth <= 640 ? '2px' : '4px',  // Reduced space between time and label
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  };

  return (
    <div className="flex overflow-x-auto whitespace-nowrap bg-gray-100 py-4">
      {timings.map(({ id, time, label, isHighlighted }) => (
        <div
          key={id}
          onClick={() => handleSelect(id, time)}
          className={`cursor-pointer border rounded-md shadow-md text-center font-semibold ${
            id === selectedTime
              ? 'bg-teal-500 text-white border-teal-500'
              : isHighlighted
              ? 'bg-white text-orange-500 border-orange-500'
              : 'bg-white text-teal-500 border-teal-500'
          }`}
          style={buttonStyles}
        >
          <div style={{ whiteSpace: 'nowrap' }}>{time}</div>
          {label && <div style={labelStyles}>{label}</div>}
        </div>
      ))}
    </div>
  );
};

export default Timing;

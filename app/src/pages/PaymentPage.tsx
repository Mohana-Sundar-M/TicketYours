import React, { useState, useEffect } from 'react';
import TopBar from '../components/payment/TopBar'; // Component displaying the top bar with the timer
import BookingDetails from '../components/payment/BookingDetails'; // Component displaying booking details
import BookingSummary from '../components/payment/BookingSummary'; // Component summarizing the booking
import Footer from '../components/payment/Footer'; // Component for the footer

//This the Payment Page for paying the money and show the details of amount and all

const PaymentPage: React.FC = () => {
  // State to keep track of the remaining time (in seconds) for the payment
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  // useEffect hook to handle the countdown timer
  useEffect(() => {
    // Set up an interval to decrement the timer every second
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        // If time reaches 0, clear the interval and return 0
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* TopBar component displaying the timer */}
      <TopBar timeLeft={timeLeft} />

      <div className="flex-grow px-4 pt-4 pb-20"> {/* Add padding-bottom to ensure Footer visibility */}
        {/* BookingDetails component displaying details of the booking */}
        <BookingDetails />
        
        {/* BookingSummary component displaying a summary of the booking */}
        <BookingSummary />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default PaymentPage;

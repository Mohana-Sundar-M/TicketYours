import React, { useState, useEffect } from 'react';
import TopBar from '../components/payment/TopBar';
import BookingDetails from '../components/payment/BookingDetails';
import BookingSummary from '../components/payment/BookingSummary';
import Footer from '../components/payment/Footer';

const PaymentPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <TopBar timeLeft={timeLeft} />
      <div className="flex-grow px-4 pt-4 pb-20"> {/* Add padding-bottom */}
        <BookingDetails />
        <BookingSummary />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;

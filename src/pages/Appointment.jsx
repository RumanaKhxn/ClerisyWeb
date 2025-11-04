import React from 'react';
import Booking from '../components/Appointment/Booking';

const Appointment = () => {
  return (
    <div className="pt-20"> {/* Add top padding so it’s visible under header */}
      <Booking />
    </div>
  );
};

export default Appointment;

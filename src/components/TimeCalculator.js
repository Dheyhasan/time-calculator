import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function TimeCalculator() {
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('18:00');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState('');
  const [duration, setDuration] = useState('');
  const [detailedDuration, setDetailedDuration] = useState('');

  const handleNowStart = () => {
    const now = new Date();
    setStartDate(now);
    setStartTime(now.toTimeString().slice(0, 5));
  };

  const handleNowEnd = () => {
    const now = new Date();
    setEndDate(now);
    setEndTime(now.toTimeString().slice(0, 5));
  };

  const calculateDuration = () => {
    if (startDate && endDate && startTime && endTime) {
      try {
        const startDateTime = new Date(`${startDate.toISOString().split('T')[0]}T${startTime}`);
        const endDateTime = new Date(`${endDate.toISOString().split('T')[0]}T${endTime}`);

        if (startDateTime > endDateTime) {
          setError('Start time must be before end time.');
          setDuration('');
          setDetailedDuration('');
          return;
        }

        const diffInMs = endDateTime - startDateTime;
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInWeeks = Math.floor(diffInDays / 7);
        const diffInMonths = Math.floor(diffInDays / 30.44);
        const diffInYears = Math.floor(diffInDays / 365.25);

        setDuration(`${diffInHours} hours`);
        setDetailedDuration(
          `${diffInYears} years, ${diffInMonths} months, ${diffInWeeks} weeks, ${diffInDays} days`
        );
        setError('');
      } catch (err) {
        console.error('Error calculating time:', err);
        setError('Failed to calculate time. Please try again later.');
        setDuration('');
        setDetailedDuration('');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-white mt-10">
    <h1 className="text-2xl font-bold text-center mb-4"> you can here calculate <br /> time between times!</h1>
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Time Between</h1>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm text-white">Start Time:</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 text-black bg-white rounded-lg text-left cursor-pointer"
            />
            <button
              type="button"
              onClick={handleNowStart}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-1 rounded-lg"
            >
              Now
            </button>
          </div>
          <div className="relative">
            <label className="block text-sm text-white">End Time:</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 text-black bg-white rounded-lg text-left cursor-pointer"
            />
            <button
              type="button"
              onClick={handleNowEnd}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-1 rounded-lg"
            >
              Now
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-white">Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
              dateFormat="yyyy-MM-dd"
              className="w-full p-2 text-black bg-white rounded-lg text-center shadow-md cursor-pointer"
              placeholderText="📅 Select start date"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-white">End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
              dateFormat="yyyy-MM-dd"
              className="w-full p-2 text-black bg-white rounded-lg text-center shadow-md cursor-pointer"
              placeholderText="📅 Select end date"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={calculateDuration}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Calculate Duration
          </button>
        </div>
      </div>
      {error && <p className="text-red-400 mt-4">Error: {error}</p>}
      <div className="mt-6">
        <label className="block text-sm font-medium text-white">Duration:</label>
        <output className="w-full p-2 bg-gray-200 text-black rounded-lg block text-center">
          {duration || 'No duration calculated yet'}
        </output>
        <div className="mt-4">
          <label className="block text-sm font-medium text-white">Detailed Duration:</label>
          <output className="w-full p-2 bg-gray-200 text-black rounded-lg block text-center">
            {detailedDuration || 'No details available'}
          </output>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TimeCalculator;

// AddOrSubTime Component with Responsive Scaling for Small Screens

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddOrSubTime() {
  const [startTime, setStartTime] = useState('09:00');
  const [startDate, setStartDate] = useState(null);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [week, setWeek] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [duration, setDuration] = useState('');
  const [operation, setOperation] = useState('add');

  // Define handleNow function
  const handleNow = () => {
    const now = new Date();
    setStartDate(now);
    setStartTime(now.toTimeString().slice(0, 5));
  };

  // Define handleClear function
  const handleClear = () => {
    setStartTime('09:00');
    setStartDate(null);
    setYear('');
    setMonth('');
    setWeek('');
    setDay('');
    setHour('');
    setMinute('');
    setDuration('');
  };

  useEffect(() => {
    if (!startDate) return;
    window.scrollTo({ top: 100, behavior: 'smooth' });
    
    const resultDate = new Date(startDate);
    const sign = operation === 'add' ? 1 : -1;
    
    resultDate.setFullYear(resultDate.getFullYear() + sign * parseInt(year || 0));
    resultDate.setMonth(resultDate.getMonth() + sign * parseInt(month || 0));
    resultDate.setDate(resultDate.getDate() + sign * (parseInt(day || 0) + parseInt(week || 0) * 7));
    resultDate.setHours(resultDate.getHours() + sign * parseInt(hour || 0));
    resultDate.setMinutes(resultDate.getMinutes() + sign * parseInt(minute || 0));

    setDuration(resultDate.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }));
  }, [startDate, year, month, week, day, hour, minute, operation]);

  return (
    <div className="flex flex-col items-center justify-center text-white mt-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <h1 className="text-2xl font-bold text-center mb-4"> You can here Add/Or <br/> sub Time!</h1>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Add Or Sub Time</h1>

        <div className="flex justify-center space-x-4 mb-4">
          <button onClick={() => setOperation('add')} className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full ${operation === 'add' ? 'opacity-100' : 'opacity-50'}`}>+</button>
          <button onClick={() => setOperation('subtract')} className={`bg-red-500 text-white font-bold py-2 px-4 rounded-full ${operation === 'subtract' ? 'opacity-100' : 'opacity-50'}`}>-</button>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <DatePicker selected={startDate} onChange={setStartDate} className="bg-gray-50 text-gray-900 border rounded-lg p-2 w-full" placeholderText="Select start date" />
          <button onClick={handleNow} className="bg-green-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Now</button>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="bg-gray-50 text-gray-900 border rounded-lg p-2 w-full" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[['Year', year, setYear], ['Month', month, setMonth], ['Week', week, setWeek], ['Day', day, setDay], ['Hour', hour, setHour], ['Minute', minute, setMinute]].map(([label, value, setter]) => (
            <div key={label}>
              <label className="block text-sm font-medium text-white">{label}:</label>
              <input type="number" value={value} onChange={(e) => setter(e.target.value)} className="bg-gray-50 text-gray-900 border rounded-lg p-2 w-full" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button onClick={handleClear} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Clear</button>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-white">Duration:</label>
          <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">
            {duration || 'No duration calculated yet'}
          </output>
        </div>
      </div>
    </div>
  );
}

export default AddOrSubTime;

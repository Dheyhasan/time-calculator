import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks, differenceInYears } from "date-fns";

function AgeCalculator() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState({ years: '', months: '', days: '', weeks: '', hours: '', minutes: '', seconds: '' });

  const calculateAge = (date) => {
    if (!date) return;

    const today = new Date();
    const dateObject = new Date(date);

    const ageYears = differenceInYears(today, dateObject);
    const ageMonths = differenceInMonths(today, dateObject);
    const ageDays = differenceInDays(today, dateObject);
    const ageWeeks = differenceInWeeks(today, dateObject);
    const ageHours = differenceInHours(today, dateObject);
    const ageMinutes = differenceInMinutes(today, dateObject);
    const ageSeconds = differenceInSeconds(today, dateObject);

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
      weeks: ageWeeks,
      hours: ageHours,
      minutes: ageMinutes,
      seconds: ageSeconds,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-white mt-10">
    <h1 className="text-2xl font-bold text-center mb-4"> Do you want to know your  <br /> age in years months weeks!</h1>
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Age Calculator</h1>
      
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <label className="block text-sm text-white mb-2">Date of berth</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => { setSelectedDate(date); calculateAge(date); }}
            dateFormat="yyyy-MM-dd"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 shadow-md focus:ring-blue-500 focus:border-blue-500"
            placeholderText="📅 Click to select a date"
          />
        </div>
        <div className="space-y-4 border p-4 rounded-md bg-gray-800 text-white">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Years</label>
              <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.years}</output>
            </div>
            <div>
              <label className="block text-sm">Months</label>
              <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.months}</output>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Weeks</label>
              <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.weeks}</output>
            </div>
            <div>
              <label className="block text-sm">Days</label>
              <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.days}</output>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Hours</label>
              <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.hours}</output>
            </div>
            <div>
              <label className="block text-sm">Minutes</label>
              <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.minutes}</output>
            </div>
          </div>
          <div>
            <label className="block text-sm">Seconds</label>
            <output className="w-full p-2 bg-gray-200 text-black rounded-lg block">{age.seconds}</output>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AgeCalculator;

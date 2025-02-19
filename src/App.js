// App.js with ScrollToTop and Header Offset Fix
// Implements scroll-to-top on route change and adds spacing to prevent header overlay.

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import TimeCalculator from './components/TimeCalculator';
import MatrixEffect from './components/MatrixEffect';
import Addorsubtime from './components/Addorsubtime';
import AgeCalculator from './components/AgeCalculator';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      
      {/* Offset below header to prevent overlay */}
      <div className="pt-40 min-h-screen flex flex-col bg-gray-900">
        <Routes>
          <Route path="/" element={
            <>
              <MatrixEffect />
            </>
          } />

          <Route path="/time-between" element={
            <>
              <TimeCalculator />
            </>
          } />

          <Route path="/add-or-sub-time" element={<Addorsubtime />} />
          <Route path="/age-calculator" element={
            <>
              <AgeCalculator />
            </>
          } />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Ensure correct import path

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure 'root' matches your HTML file
);

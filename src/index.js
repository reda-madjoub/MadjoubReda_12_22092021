import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.js';

// App is the paretn of all components and it is rendered here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
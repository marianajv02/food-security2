import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';

const deployment = process.env.REACT_APP_DEPLOYMENT;
const homepage =
  deployment === 'production'
    ? 'https://zeyu-c.github.io/food-security-project'
    : '/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

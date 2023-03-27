import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './templates/Home';
import './index.css';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './templates/Home';
import { About } from './templates/About';
import './index.css';
import { CounterContextProvider } from './contexts/CounterContext';
import { Menu } from './components/Menu';
import { Posts } from './templates/Posts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </CounterContextProvider>,
);

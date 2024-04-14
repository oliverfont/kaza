import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home/index.jsx';
import Apropos from './pages/Apropos/index.jsx';
import Article from './pages/Article/index.jsx';
import NotFound from './pages/NotFound/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/kaza"  element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();

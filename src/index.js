import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';  
import Article from './pages/Article';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
        
          <Route path="/article/:id" element={<Article />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

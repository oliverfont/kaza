import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index.jsx';
import Apropos from './pages/Apropos/index.jsx';
import Article from './pages/Article/index.jsx';
import NotFound from './pages/NotFound/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

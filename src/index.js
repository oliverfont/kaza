
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home'; 
import About from './pages/About';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      
      <Header />

      <Switch>
      
        <Route exact path="/" element={<Home />} />
      
        <Route path="/about" element={<About />} />
        
        <Route path="/articles/:id" element={<Article />} />
        
        <Route path="*" element={<NotFound />} />
      
      </Switch>
      
      <Footer />
      
    </Router>
  </React.StrictMode>
);

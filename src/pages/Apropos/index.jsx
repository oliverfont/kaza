import React, { useState } from 'react';
import '../styles/Home.css';
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import Banner from './Banner';
import { aboutList } from './AboutList';

function App() {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleDropdownClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };

  return (
    <div className='body'>
      <Banner backgroundType="apropos" />
      <div className="about-list">
        {aboutList.map((item, index) => (
          <div key={index} className="dropdowns">
            <div className="dropdown" onClick={() => handleDropdownClick(item.title)}>
              <h3>{item.title}</h3>
            </div>
            {selectedTitle === item.title && (
              <div className="description">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

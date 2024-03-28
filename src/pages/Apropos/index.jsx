import React, { useState } from 'react';
import '../styles/Home.css';
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
          <div key={index} className={`dropdowns ${selectedTitle === item.title ? 'open' : 'closed'}`}>
  <div className="dropdown" onClick={() => handleDropdownClick(item.title)}>
    <h3>{item.title}</h3>
  </div>
  <div className="description">
    {selectedTitle === item.title && (
      <p>{item.content}</p>
    )}
  </div>
</div>
        ))}
      </div>
    </div>
  );
}

export default App;

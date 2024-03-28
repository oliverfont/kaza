import React, { useState } from 'react';
import '../styles/Home.css';
import Banner from './Banner';
import Dropdown from '../../components/Dropdown';
import { aboutList } from '../../assets/data/AboutList';

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
          <Dropdown key={index} title={item.title} content={item.content} selectedTitle={selectedTitle} onClick={() => handleDropdownClick(item.title)} />
        ))}
      </div>
    </div>
  );
}

export default App;

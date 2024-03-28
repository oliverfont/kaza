import React from 'react';
import './styles/Dropdown.css';
import Arrow from '../assets/img/arrow.svg'

function Dropdown({ title, content, selectedTitle, onClick }) {
    const isOpen = selectedTitle === title;
  
    return (
      <div className={`dropdowns ${isOpen ? 'open' : ''}`}>
        <div className="dropdown" onClick={() => onClick(title)}>
          <h3>{title}</h3><img src={Arrow} className='arrow'></img>
        </div>
        {isOpen && (
          <div className="description">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  }  

export default Dropdown;

import React, { useState } from 'react';
import './styles/Dropdown.scss';
import Arrow from '../assets/img/arrow.svg';

function Dropdown({ title, content, isOpen, onClick }) {
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
    onClick(title);
  };

  return (
    <div className={`dropdowns ${open ? 'open' : ''}`}>
      <div className="dropdown" onClick={handleClick}>
        <h3>{title}</h3>
        <img src={Arrow} className={`arrow ${open ? 'open' : ''}`} alt="Arrow" />
      </div>
      <div className={`description ${open ? 'open' : ''}`}>
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

import React, { useState } from 'react';
import './Card.css';
import { BsFillPlayFill } from "react-icons/bs"
const Card = ({ image, title, description }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-position">
        <div className="img-container">
          <img src={image} alt="cantora" />
          {isMouseOver && (
            <div className="play-button">
              <BsFillPlayFill color="#000" fontSize="25"/>
            </div>
          )}
        </div>
        <p className='title'>{title}</p>
        <p className='subtitle'>{description}</p>
      </div>
    </div>
  );
};

export default Card;

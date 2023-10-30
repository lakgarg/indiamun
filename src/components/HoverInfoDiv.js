// import React from 'react';
// import './HoverInfoDiv.css';

// const HoverInfoDiv = ({ hoverTextTitle, hoverTextContent }) => {
//   return (
//     <div className='main-hover-container'>
//       <div className='tooltip-content'>
//         <h2>{hoverTextTitle}</h2>
//         <p>{hoverTextContent}</p>
//       </div>
//     </div>
//   )
// }

// export default HoverInfoDiv;

import React, { useState } from 'react';
import './HoverInfoDiv.css';

const HoverInfoDiv = ({ hoverTextContent, mainHeading }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`hover-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="main-heading">{mainHeading}</h1>
      {isHovered && (
        <div className="tooltip-content">
          <h2>{mainHeading}</h2>
          <p>{hoverTextContent}</p>
        </div>
      )}
    </div>
  );
};

export default HoverInfoDiv;



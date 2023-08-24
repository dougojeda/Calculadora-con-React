import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'
const Logo = () => {
    return (
      <div className="freeCodeCamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freeCodeCamp-Logo"
          alt="freeCodeCamp Logo"
        />
      </div>
    );
  };
  
  export default Logo
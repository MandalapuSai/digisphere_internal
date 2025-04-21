import React from 'react';
import './LogoSlider.css'; // Optional: if you want to separate CSS

const LogoSlider = () => {
  return (
    <div className="sliderab">
      <div className="slider-itemsp">
        <img alt="Logo 1" src="assets/img/servicar_logo.jpg" />
        <img alt="Logo 2" src="assets/img/logo_02.jpg" />
        <img alt="Logo 3" src="assets/img/logo_03.jpg" style={{ width: '106px' }} />
        <img alt="Logo 4" src="assets/img/logo_04.jpg" style={{ width: '226px' }} />
      </div>
    </div>
  );
};

export default LogoSlider;

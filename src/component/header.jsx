import React from 'react';
import './header.css';
import Logo from '../assets/logoapple.jpeg';

export default function Header() {
  return (
    <div>
      <div className="header-container">
        <img src={Logo} alt="Example" />
        <h1>Oriental Computer</h1>
        
        <div className='navigationbar'>
        
          <a href="https://linktr.ee/orientalcomputer" className="nav-link"><h1>Contact</h1></a>
          <a href="https://www.google.com/maps/dir/-7.0032046,110.4857935/oriental+computer/@-7.0056495,110.4190403,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e708d1a73b8d3bb:0x4313b72c95fddae7!2m2!1d110.4327799!2d-7.0063473?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" className="nav-link"><h1>Location</h1></a>
        </div>
      </div>
    </div>
  );
}

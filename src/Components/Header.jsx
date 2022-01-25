import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return <div className='header'>
      <div className="header-section">
          <div className="nav">
          <NavLink to='/'>Contacts</NavLink>
          <NavLink to='/appointments' >Appointments</NavLink>
          </div>
      </div>
  </div>;
}

  
import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/about">About RESTy</NavLink></li>
      </ul>
    </nav>
  );
}
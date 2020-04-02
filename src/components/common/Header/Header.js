import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/basket">장바구니</Link></li>
      </ul>
    </div>
  );
};

export default Header;
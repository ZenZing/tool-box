import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.less';

const Navbar = () => {
  return (
    <header id="navbar">
      <h1><Link to='/'>实用小工具</Link></h1>
      <hr />
    </header>
  )
}

export default Navbar;

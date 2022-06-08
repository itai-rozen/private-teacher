import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
const Nav = () => {
  return <ul className='nav-list'>
    <li>
      <Link to="/"><Logo /></Link>
    </li>
    <li>
      <Link to="/about">אודות</Link>
    </li>
    <li>
      <Link to="/contact">צור קשר</Link>
    </li>
    <li></li>
  </ul>
}

export default Nav
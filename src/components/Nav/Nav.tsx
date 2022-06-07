import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return <>
  <Link to="/">בית</Link>
  <Link to="/about">אודות</Link>
  <Link to="/contact">צור קשר</Link>
  </>
}

export default Nav
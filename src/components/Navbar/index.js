import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/' activeClassName='active' className='navItem navLink'>Home</NavLink>
      <NavLink to='/users' activeClassName='active' className='navItem navLink'>Users</NavLink>
      <NavLink to='/products' activeClassName='active' className='navItem navLink'>Products</NavLink>
    </nav>
  )
}

export default Navbar
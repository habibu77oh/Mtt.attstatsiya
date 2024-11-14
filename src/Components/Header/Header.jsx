import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <h2>Mtt.Attestatsiya </h2>
        <nav>
            {/* <Link className='link' to='/admin'>Admin</Link> */}
            <Link className='link' to='/home'>Home</Link>
        </nav>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import SignedinLink from './SignedinLink'

const Navbar = () => {
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
            <Link to='/' className='brand-logo'> Planner</Link>
            <SignedinLink/>
            </div>
        </nav>
    )
}

export default Navbar;
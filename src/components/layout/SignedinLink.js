import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedinLink = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>DP</NavLink></li>
        </ul>
    )
}

export default SignedinLink;
import React from 'react'

import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../src/assets/logo.svg' 

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
    </div>
)

export default Header

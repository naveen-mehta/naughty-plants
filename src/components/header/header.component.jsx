import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg' 
import './header.component.styles.scss'

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <Link to='/shop' className='options'>
            SHOP
        </Link>
        <Link to='/shop'>
            CONTACT
        </Link>
        <Link to='/sign-in'>
            SIGN IN
        </Link>
    </div>
)

export default Header

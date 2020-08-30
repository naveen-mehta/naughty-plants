import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg' 
import './header.component.styles.scss'
import { auth } from '../../firebase/firebase.utils'


const Header = ( {currentUser} ) => (
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
        
        { currentUser ? (
            <div className='options' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
        ): (
            <Link className='options' to='/sign-in' >
                SIGN IN
            </Link>
        )
        }
    </div>
)

export default Header

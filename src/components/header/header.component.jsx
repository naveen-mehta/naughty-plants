import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg' 
import './header.component.styles.scss'
import { auth } from '../../firebase/firebase.utils'


const Header = ( {currentUser} ) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ): (
                <Link className='option' to='/sign-in' >
                    SIGN IN
                </Link>
            )
            }
        </div>        
    </div>
)

export default Header

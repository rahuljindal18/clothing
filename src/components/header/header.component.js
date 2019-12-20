import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/contact" className="option">Contact</Link>
            {
                currentUser 
                ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div> 
                : <Link to="/signin" className="option">Sign In</Link> 

            }
        </div>
    </div>
)

export default Header;
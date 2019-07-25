import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shirt.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
    const color = {
        colorRed: Math.random() * (255 - 100) + 100,
        colorGreen: Math.random() * (255 - 100) + 100,
        colorBlue: Math.random() * (255 - 100) + 100,
    }
    console.log(color)
    return (
    <div className = 'header' style = {{
        backgroundColor: `rgb(${color.colorRed}, ${color.colorGreen}, ${color.colorBlue})`
    }}>
        <Link to = "/" className = 'logo-container'>
            <Logo  className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = "/shop">
                SHOP
            </Link>
            <Link className = 'option' to = "/shop">
                CONTACT
            </Link>
        
            {
                currentUser ?
                <div className = 'option' onClick = {() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className ='option' to = "/signin" >SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
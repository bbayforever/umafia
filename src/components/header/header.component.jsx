import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const StyledHeader = styled.div`
  background-color: rgb(0, 200, 200);
`;

const Header = ({ currentUser, hidden }) => {
  return (
    <StyledHeader>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="option">
          <Link to="/">
            Bbayforever Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Shop" className="option" id="collasible-nav-dropdown">

              <Link to="/shop/mens" className="dropdown-item">
                  Mens
              </Link>

              <Link to="/shop/womens" className="dropdown-item">
                Womens
              </Link>
              <NavDropdown.Divider />

              <Link to="/shop/jackets" className="dropdown-item">
                Jackets
              </Link>

              <Link to="/shop/sneakers" className="dropdown-item">
                Sneakers
              </Link>

              <Link to="/shop/hats" className="dropdown-item">
                Hats
              </Link>
            </NavDropdown>
            <Nav.Link className="option">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="disabled" disabled>
              {
                currentUser ? auth.currentUser.email : ''
              }
            </Nav.Link>
            {
              currentUser
                ? <Nav.Link onClick={() => {auth.signOut();}}>
                    Sign out
                </Nav.Link>
                : <Nav.Link href="/signin">
                  <Link to="/signin">
                    Sign in
                  </Link>
                </Nav.Link>
            }
            <Nav.Link>
              <CartIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {
        hidden ? null : <CartDropdown />
      }
    </StyledHeader>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

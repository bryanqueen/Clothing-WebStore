import React from 'react';

// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';

import CartDropdown from '../cart-dropdown/cart';

import { selectCartHidden } from '../../redux/cart/cart.selector';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, Optionlink } from './header.styles';

// import './header.styles.scss';

/* A function that takes in the state and returns an object. */
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <Optionlink  to="/shop">
        SHOP
      </Optionlink>

      {/* /* A ternary operator. If the currentUser is true, then it will render the first Optionlink. If
      the currentUser is false, then it will render the second Optionlink. */ }

      {currentUser ? (
        <Optionlink  as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </Optionlink>
      ) : (
        <Optionlink to="/signin">
          SIGN IN
        </Optionlink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

/* A function that takes in the state and returns an object. */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/* Connecting the Header component to the redux store. */
export default connect(mapStateToProps)(Header);

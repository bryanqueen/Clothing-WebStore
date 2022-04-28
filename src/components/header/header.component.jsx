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

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <Optionlink  to="/shop">
        SHOP
      </Optionlink>

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

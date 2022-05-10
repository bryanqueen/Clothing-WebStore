import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import './cart-icon.styles.scss';

/**
 * CartIcon is a function that takes in two props, toggleCartHidden and itemCount, and returns a div
 * with a className of cart-icon, an onClick event that calls toggleCartHidden, a ShoppingIcon
 * component with a className of shopping-icon, and a span with a className of item-count and the value
 * of itemCount.
 */
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

/**
 * The mapDispatchToProps function is a function that takes in the dispatch function as an argument and
 * returns an object that has a toggleCartHidden property that is a function that returns the dispatch
 * function with the toggleCartHidden action object as an argument.
 */
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

/* A selector that is used to select the state from the redux store. */
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

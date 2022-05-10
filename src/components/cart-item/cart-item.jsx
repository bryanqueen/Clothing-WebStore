import React from 'react';

import './cart-item.styles.scss';

/**
 * It takes in an object as a prop, and returns a div with an image and a div with a span and a span.
 */
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X &#8358; {price}
      </span>
    </div>
  </div>
);

export default CartItem;

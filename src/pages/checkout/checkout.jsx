import React, { useEffect, useState } from 'react';

import { connect, useSelector } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { useLocation, useNavigate } from 'react-router-dom';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import PayOut from '../../components/Rave/payment';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
  /* A react-router-dom hook that allows you to navigate to a different route. */
  const navigate = useNavigate();
  const location = useLocation();
  /* A state hook that allows you to manage state in a functional component. */
  const [show, setshow] = useState(false);

  /* Getting the current user from the redux store. */
  const loggedInUser = useSelector((state) => state.user.currentUser);

  /* A react hook that is used to perform side effects in a functional component. */
  useEffect(() => {
    /* Checking if the user is logged in. If the user is not logged in, it redirects the user to the
    signin page. If the user is logged in, it sets the show state to true. */
    if (!loggedInUser) {
      return navigate('/signin', {
        state: { callback_url: location.pathname },
      });
    }
    setshow(true);
  }, [loggedInUser, setshow, navigate, location]);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block gap">
          <span className='gap'>Product </span>
        </div>
        <div className="header-block gap">
          <span className='gap'>Desc</span>
        </div>
        <div className="header-block gap">
          <span className='gap'> Qty</span>
        </div>
        <div className="header-block gap">
          <span className='gap'>Price</span>
        </div>
        <div className="header-block gap">
          <span className='gap'>❌</span>
        </div>
      </div>

      {/* Mapping through the cartItems array and returning a CheckoutItem component for each item in the
    array. */}

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <>
        {/* /* A ternary operator. It checks if the show state is true. If it is true, it returns the div
        with the className of total. If it is false, it returns nothing. */}
        {show && (
          <div className="total">
            <span className="total-price">TOTAL: &#8358;{total}</span>
              <PayOut total={total} />
          </div>
        )}
      </>

      <div className="warning">
        <span>* Please use the following test credit card for payment</span>
        <br />
        5531 8866 5214 2950 - Exp: 09/32 - CVV: 564 Pin: 3310 OTP:12345
      </div>
    </div>
  );
};

/* A function that takes in the state and returns an object. */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

/* Connecting the CheckoutPage component to the redux store. */
export default connect(mapStateToProps)(CheckoutPage);

import React from 'react';

import './custom-button.styles.scss';

// import { CustomButtonContainer } from './custom-button.styles';

/**
 * CustomButton is a function that takes in children, isGoogleSignIn, inverted, and otherProps as
 * arguments and returns a button element with the className of the concatenation of the strings
 * 'inverted', 'google-sign-in', and 'custom-button' if the inverted and isGoogleSignIn arguments are
 * true, and the className of the string 'custom-button' if the inverted and isGoogleSignIn arguments
 * are false.
 */
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={` ${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    }  custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

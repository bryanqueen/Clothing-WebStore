import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-sign-up.styles.scss';

/* A function that returns a component. */
const SignInAndSignUpPage = () => {
  const [show, setshow] = useState(false);
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const location = useLocation();

  /* Checking if the user is logged in. If the user is logged in, it will redirect the user to the
homepage. If the user is not logged in, it will set the show state to true. */

  useEffect(() => {
    if (loggedInUser) {
      return navigate(location?.state?.callback_url ?? '/', { replace: true });
    }
    setshow(true);
  }, [loggedInUser, setshow, navigate, location?.state?.callback_url]);

  /* Returning the sign in and sign up components. */
  return (
    <>
      {/*  Checking if the show state is true. If it is true, it will return the sign in and sign up
     components. */}

      {show && (
        <div className="sign-in-and-sign-up">
          <SignIn />
          <SignUp className="signup" />
        </div>
      )}
    </>
  );
};

export default SignInAndSignUpPage;

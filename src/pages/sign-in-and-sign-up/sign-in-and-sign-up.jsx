import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-sign-up.styles.scss';

// import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
  const [show, setshow] = useState(false);
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      return navigate('/', { replace: true });
    }
    setshow(true);
  }, [loggedInUser, setshow, navigate]);

  return (
    <>
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

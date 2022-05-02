import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-sign-up.styles.scss';


// import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp className="signup" />
  </div>
);

export default SignInAndSignUpPage;

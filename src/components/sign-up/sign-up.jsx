import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button';

import { auth, creatUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
/* A function that is called when the user clicks the submit button. It is a function that is called
when the user clicks the submit button. It is a function that is called when the user clicks the
submit button. It is a function that is called when the user clicks the submit button. It is a
function that is called when the user clicks the submit button. It is a function that is called when
the user clicks the submit button. It is a function that is called when the user clicks the submit
button. It is a function that is called when the user clicks the submit button. It is a function
that is called when the user clicks the submit button. It is a function that is called when the user
clicks the submit button. It is a function that is called when the user clicks the submit button. It
is a function that is called when the user clicks the submit button. It is a function that is called
when the user clicks the submit button. It is a function that is called when the user clicks the
submit button. It is a function that is called when the user clicks the submit button. It is a
function that is called when the user clicks the submit button. */

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await creatUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Signn up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="ConfirmPassword"
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

import React from 'react';
import SignupModalContainer from './signup_modal_container';
import LoginModalContainer from './login_modal_container';

const Auth = () => (
  <div className='auth'>
    <SignupModalContainer />
    <LoginModalContainer />
  </div>
);

export default Auth;

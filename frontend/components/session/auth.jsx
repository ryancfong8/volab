import React from 'react';
import SignupModalContainer from './signup_modal_container';
import LoginModalContainer from './login_modal_container';
import { hashHistory } from 'react-router';

const Auth = () => (
  <div>
    <div className='auth'>
      <img className = "logo-header-pic" src = "https://s3-us-west-1.amazonaws.com/viscab/VoLab2.gif" onClick={() => hashHistory.push("decks")}/>
      <div className='auth-buttons'>
        <SignupModalContainer />
        <LoginModalContainer />
      </div>
    </div>
  </div>
);

export default Auth;

// <text className= "logo-header" onClick={() => hashHistory.push("/decks")}>VoLab</text>

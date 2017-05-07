import React from 'react';
import Auth from './session/auth';

const App = ({ children }) => (
  <div>
    <Auth />
    <h1>Welcome To VLab</h1>
    { children }
  </div>
);

export default App;

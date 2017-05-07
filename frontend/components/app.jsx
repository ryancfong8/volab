import React from 'react';
import Auth from './session/auth';

const App = ({ children }) => (
  <div>
    <Auth />
    { children }
  </div>
);

export default App;

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/';
import Login from './Login/';
import SignUp from './SignUp/'; 
import PasswordRecovery from './PasswordRecovery/';

function Public() {
  return (
    <main>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/passwordRecovery" component={PasswordRecovery} />
      </BrowserRouter>
    </main>
  );
}

export default Public;

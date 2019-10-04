import React from 'react';
import logo from './../../assets/twitter-logo.svg';
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <div className="logoContainer">
        <Link to="/"><img className="logo" src={logo} alt="myTwitter" /></Link> 
    </div>
  );
}

export default Logo;

        
import React, { Component } from 'react';
import './styles/Nav.css'

const Nav = () => {
	return (

		<div id="NavWrapper">
		<div id="Nav1"></div>
		<div id="Nav2">Grad Tracker</div>
		<div id="Nav3"></div>
		<div id="Nav4">About</div>
		<div id="Nav5">Help</div>
		<div id="fbookButton" className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false" scope="public_profile,email" data-onlogin="checkLoginState"></div>
		</div>

	)
}

export default Nav;

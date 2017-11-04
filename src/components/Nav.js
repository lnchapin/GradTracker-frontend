import React, { Component } from 'react';
import './styles/Nav.css'
import axios from 'axios';

//'http://cb4461ab.ngrok.io/graduates/1'

const Nav = () => {


	return (

		<div id="NavWrapper">
		<div id="Nav0" ><button onClick={() => { axios.get('https://stark-reef-91742.herokuapp.com/sendtext').then(res =>{ console.log(res)} ) }}>Text!</button></div>
		<div id="Nav1"></div>
		<div id="Nav2"><a href='http://localhost:3000'>Grad Tracker</a></div>
		<div id="Nav3"></div>
		<div  id="Nav4"><a href='http://localhost:3000/viewClass'>See Results</a></div>
		<div id="Nav5"><a href='http://localhost:3000/upload'>CSV</a></div>
		<div id="fbookButton" className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false" scope="public_profile,email" data-onlogin="checkLoginState"></div>
		</div>

	)
}

export default Nav;

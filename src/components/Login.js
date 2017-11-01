import React from "react";
import "./styles/Login.css"

class Login extends React.Component {
  handleChange(e) {
    e.preventDefault();
    console.log(e, "handleChange");
  }

  render() {
    return <form className="login-form" method="post">
        <label>Username</label>
        	<input type="text" name="username"  placeholder="username"/>
        <label>Password</label>
        	<input type="text" name="password"  placeholder="password"/>
        <button className="upload-submit" onClick={e => this.handleChange(e)}>
          Login
        </button>
      </form>;
  }
}

export default Login;

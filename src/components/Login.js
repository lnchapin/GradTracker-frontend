import React from "react";
import "./styles/Login.css"

class Login extends React.Component {
  handleChange(e) {
    e.preventDefault();
    console.log(e, "handleChange");
  }

  render() {
    return(
      <div>
    <img src='http://blog.gale.com/wp-content/uploads/2017/09/shutterstock_336872039.jpg' width="1450px"></img>
    </div>
  )}
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import "./Styling/login.css";
import Sidebar from "../Components/sidebar.js";

function Login() {
  return (
    <div>
      <Sidebar />
      <div className="loginContainer">
        <div className="loginBox1">
          <div className="loginBox2">
            <h1>Log In</h1>
            <div className="loginInput">
              <input type="text" required="required"></input>
              <span>Username</span>
              <i></i>
            </div>
            <div className="loginInput">
              <input type="password" required="required"></input>
              <span>Password</span>
              <i></i>
            </div>
            <input type="submit" value="Log In"></input>
            <div>
              <Link className="signup" to="/Signup">
                Sign up
              </Link>
              <Link className="forgotPassword" to="/ForgotPassword">
                Forget Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import "./Styling/signup.css";
import Sidebar from "../Components/sidebar.js";

function Signup() {
  return (
    <div>
      <Sidebar />
      <div className="signupContainer">
        <div className="signupBox1">
          <div className="signupBox2">
            <h1>Sign Up</h1>
            <div className="signupInput">
              <input type="text" required="required"></input>
              <span>Email</span>
              <i></i>
            </div>
            <div className="signupInput">
              <input type="password" required="required"></input>
              <span>Password</span>
              <i></i>
            </div>
            <div className="signupInput">
              <input type="password" required="required"></input>
              <span>Confirm Password</span>
              <i></i>
            </div>
            <input type="submit" value="Sign Up"></input>
            <div>
              <Link className="login" to="/Login">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

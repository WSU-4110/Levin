import React from "react";
import { Link } from "react-router-dom";
import "./Styling/forgotpass.css";
import Sidebar from "../Components/sidebar.js";

function ForgotPassword() {
  return (
    <div>
      <Sidebar />
      <div className="forgotpassContainer">
        <div className="forgotpassBox1">
          <div className="forgotpassBox2">
            <h1>Forgot Password</h1>
            <div className="forgotpassInput">
              <input type="text" required="required"></input>
              <span>Email</span>
              <i></i>
            </div>
            <input type="submit" value="Send"></input>
            <div>
              <Link className="signup" to="/Signup">
                Sign up
              </Link>
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

export default ForgotPassword;

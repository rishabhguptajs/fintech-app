import React from "react";
import { useState } from "react";
import "./CSS/Authentication.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function Authentication() {
    let [isLoggedIn, setIsLoggedIn] = useState (false);
    function setIsLoggedOut(){
        setIsLoggedIn(false);
    }
  return (
    <div>
      {isLoggedIn ? (
        <form>
        <h1> Sign in. </h1>
        <div className="continue">
          <button className="GoogleSignIn">
            <GoogleIcon fontSize="small" /> &nbsp; Continue with Google
          </button>
          <button className="FacebookSignIn">
            <FacebookIcon fontSize="small" /> &nbsp; Continue with Facebook
          </button>
          <div className="or">or</div>
        </div>

        <input type="text" placeholder="Email" className="email" />
        <input type="password" placeholder="Password" className="password" />
        <button className="signIn" type="submit">
          Sign in
        </button>

        <div className="CreateAccount">
          <p>
            Don't have an account? <a href="#" onClick={setIsLoggedOut}>Create account</a>
          </p>
        </div>
        <div className="forgotPassword">
          <a href="#">Forgot password?</a>
        </div>
        <circle className="circle1"></circle>
        <circle className="circle2"></circle>
      </form>
    ) : (
        <form>
            <h1> Create account. </h1> 
            <input type="text" placeholder="First name" className="firstName" />
            <input type="text" placeholder="Last name" className="lastName" />
            <input type="text" placeholder="Email" className="email" />
            <input type="password" placeholder="Password" className="password" />
            <input type="password" placeholder="Confirm password" className="confirmPassword" />
            <button className="createAccount" type="submit"> Create account </button>
            <div className="alreadyHaveAccount">
                <p> Already have an account? <a href="#" onClick={setIsLoggedIn}>Sign in</a> </p>
            </div>
            <circle className="circle1"></circle>
            <circle className="circle2"></circle>
        </form> 
    )}
    </div>
  );
}

export default Authentication;

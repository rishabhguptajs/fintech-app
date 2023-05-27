import React from "react";
import { useState } from "react";
import "./CSS/Authentication.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Authentication = () => {
  let [LogIn, setIsLoggedIn] = useState(true);
  function setIsLoggedOut() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      {LogIn ? (
        <form>
          <h1 className= "title_auth"> Sign in. </h1>
          <div className="continue_auth">
            <button className="GoogleSignIn_auth">
              <GoogleIcon fontSize="small" /> &nbsp; Continue with Google
            </button>
            <button className="FacebookSignIn_auth">
              <FacebookIcon fontSize="small" /> &nbsp; Continue with Facebook
            </button>
            <div className="or_auth">or</div>
          </div>

          <input type="text" placeholder="Email" className="email_auth" />
          <input type="password" placeholder="Password" className="password_auth" />
          <button className="signIn_auth" type="submit">
            Sign in
          </button>

          <div className="CreateAccount_auth">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={setIsLoggedOut} className="CreateAccountTitle">
                Create account
              </a>
            </p>
          </div>
          <div className="forgotPassword_auth">
            <a href="#">Forgot password?</a>
          </div>
          <circle className="circle1_auth"></circle>
          <circle className="circle2_auth"></circle>
        </form>
      ) : (
        <form>
          <h1 className="title_auth"> Create account. </h1>
          <input type="text" placeholder="First name" className="firstName_auth" />
          <input type="text" placeholder="Last name" className="lastName_auth" />
          <input type="text" placeholder="Email" className="email_auth" />
          <input type="password" placeholder="Password" className="password_auth" />
          <input
            type="password"
            placeholder="Confirm password"
            className="confirmPassword_auth"
          />
          <button className="createAccount_auth" type="submit">
            {" "}
            Create account{" "}
          </button>
          <div className="alreadyHaveAccount_auth">
            <p>
              {" "}
              Already have an account?{" "}
              <a href="#" onClick={setIsLoggedIn}>
                Sign in
              </a>{" "}
            </p>
          </div>
          <circle className="circle1_auth"></circle>
          <circle className="circle2_auth"></circle>
        </form>
      )}
    </div>
  );
};

export default Authentication;

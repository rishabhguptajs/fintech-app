import React from 'react'
import './CSS/Authentication.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function Authentication() {
  return (
    <div>
        <h1> Sign in. </h1>
        <div className='continue'>
            <button className='GoogleSignIn'>
                <GoogleIcon fontSize='small'/> &nbsp;
                Continue with Google 
            </button>
            <button className='FacebookSignIn'>
                <FacebookIcon fontSize='small'/> &nbsp;
                Continue with Facebook 
            </button> 
            <div className='or'>or</div>
        </div>
        <form>
            <input type='text' placeholder='Email' className='email'/>
            <input type='password' placeholder='Password' className='password'/>
            <button className='signIn'>Sign in</button>
        </form>
        <div className='CreateAccount'>
            <p>Don't have an account? <a href='#'>Create account</a></p>
        </div>
        <div className='forgotPassword'>
            <a href='#'>Forgot password?</a>
        </div>
        <circle className='circle1'></circle>
        <circle className='circle2'></circle>
    </div>
  )
}

export default Authentication

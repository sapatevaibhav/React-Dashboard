import React from 'react';
import { ReactSVG } from 'react-svg';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">LOGO</div>
        <div className="branding">Board.</div>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <ReactSVG src="/assets/github.svg" className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <ReactSVG src="/assets/twitter.svg" className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <ReactSVG src="/assets/linkedin.svg" className="icon" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <ReactSVG src="/assets/discord.svg" className="icon" />
          </a>
        </div>
      </div>
      <div className="saparator"></div>
      <div className="right-panel">
        <div className="signin-form">
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
          <div className='social-login'>
            <button className="social-signin google">
              <ReactSVG src="/assets/google.svg" className="icon" />
            </button>
            <button className="social-signin apple">
              <ReactSVG src="/assets/apple.svg" className="icon" />
            </button>
          </div>
          <form>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Email address" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" required />
            <div className="form-actions">
              <a href="/forgot-password">Forgot password?</a>
              <button type="submit">Sign In</button>
            </div>
          </form>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

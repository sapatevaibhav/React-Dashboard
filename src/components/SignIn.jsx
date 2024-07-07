// SignIn.jsx
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    const response = await mockGoogleSignIn();
    if (response.success) {
      navigate('/dashboard');
    }
  };

  const handleAppleSignIn = async () => {
    const response = await mockAppleSignIn();
    if (response.success) {
      navigate('/dashboard');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await mockSignIn(email, password);
    if (response.success) {
      navigate('/dashboard');
    } else {
      alert('Sign in failed. Please check your credentials.');
    }
  };

  const mockGoogleSignIn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  const mockAppleSignIn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  const mockSignIn = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

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
            <button className="social-signin google" onClick={handleGoogleSignIn}>
              <ReactSVG src="/assets/google.svg" className="icon" />
            </button>
            <button className="social-signin apple" onClick={handleAppleSignIn}>
              <ReactSVG src="/assets/apple.svg" className="icon" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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

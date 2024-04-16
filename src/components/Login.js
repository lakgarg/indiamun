import React, { useState } from 'react';
import indiamunLogo from './images/INDIAMUN/login page logo.png';
import backgroundImage from './images/INDIAMUN/login backdrop.png';
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import './Login.css'
import Footer from './footer';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5010/api/v1/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to login!');
        }
        return response.json();
      })
      .then(data => {
        setSuccessMessage('Login successful!');
        setErrorMessage('');

        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.user));

        console.log('Login successful:', data); 
        window.location.href = '/';
        // Optionally, you can redirect the user or perform other actions after successful login
      })
      .catch(error => {
        setErrorMessage('Invalid email or password!');
        setSuccessMessage('');
        console.error('Error logging in:', error);
        // Handle errors, such as displaying an error message to the user
      });
  };

  const handleForgetPass = (e) => {
    e.preventDefault();
    window.location.href = '/forgot-password';
  }

  const handleSignup = (e) => {
    e.preventDefault();
    window.location.href = '/register';
  }


  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div className='login-main-container'>
        <div className="login-left-box">
          <h1 className="login-heading">Hello, <br />Young Leaders</h1>
          <div className="login-img-container">
            <img src={indiamunLogo} alt="indiamunLogo" />
          </div>
        </div>

        <div className="login-right-box">
          <div className="login-semi-1">
            <h3 className="login-subheading">Login to your India MUN account</h3>
          </div>
          {errorMessage && <div className="login-error-message">{errorMessage}</div>}
          {successMessage && <div className="login-success-message">{successMessage}</div>}
          <div className="login-semi-2">
            <form onSubmit={handleSubmit}>
              <div className='login-email'>
                <label>Email</label> <br />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className='login-password'>
                <label>Password</label> <br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className='login-main-button' type="submit">Login</button>
            </form>
          </div>
          <div className="login-semi-3">
            <p onClick={handleForgetPass} className="login-forgot-password">Forgot Password?</p>
            <p onClick={handleSignup} className="login-forgot-password">Didn't made your account?</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
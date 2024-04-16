import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import indiamunLogo from './images/INDIAMUN/login page logo.png';
import backgroundImage from './images/INDIAMUN/login backdrop.png';
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import './Login.css'
import Footer from './footer';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const { resetToken } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5010/api/v1/user/reset/${resetToken}`, { password });
      setSuccessMessage('Password Reset Successfull!', response.data.message);
      setErrorMessage('')
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage('')
    }
  };

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

        <div className="forgot-right-box">
          <div className="login-semi-1">
            <h3 className="login-subheading">Enter New Password</h3>
          </div>
          {errorMessage && <div className="login-error-message">{errorMessage}</div>}
          {successMessage && <div className="login-success-message">{successMessage}</div>}
          <div className="login-semi-2">
            <form onSubmit={handleSubmit}>
              <div className='login-password'>
                <label>Password</label> <br />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className='login-main-button' type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResetPassword;
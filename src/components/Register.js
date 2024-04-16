import React, { useState } from 'react';
import indiamunLogo from './images/INDIAMUN/login page logo.png';
import backgroundImage from './images/INDIAMUN/login backdrop.png';
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import './Login.css'
import Footer from './footer';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    email: ''
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

    if (!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      toast.error("Invalid email id");
      return;
    }

    fetch(`http://localhost:5010/api/v1/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          toast.error('Failed to Register!');
        }
        return response.json();
      })
      .then(data => {
        toast.success('OTP Sent to your email!');
        setErrorMessage('');
        console.log('OTP Sent to your email:', data);
        // Redirect user to OnDemand page with text and next link
        window.location.href = `http://localhost:3000/register-otp`;
      })
      .catch(error => {
        setSuccessMessage('');
        console.error('Error logging in:', error);
        if (error.message) {
          console.log('Response:', error.message);
          const { status, data } = error; 
          const { message, statusCode } = error;
          if (message) {
            toast.error(message); // Set the error message received from the backend
          } else {
            toast.error('An error occurred while signing up. Please try again later.');
          }
        } else {
          toast.error('An error occurred while signing up. Please try again later.');
        }
      });
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

        <div className="login-right-box">
          <div className="register-semi-1">
            <h3 className="login-subheading">Register for your India MUN account</h3>
          </div>
          {errorMessage && <div className="login-error-message">{errorMessage}</div>}
          {successMessage && <div className="login-success-message">{successMessage}</div>}
          <div className="register-semi-2">
            <form noValidate onSubmit={handleSubmit}>
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
              <button className='login-main-button' type="submit">Register</button>
            </form>
          </div>
          <div className="login-semi-3">
            {/* <p className="login-forgot-password">Forgot Password?</p> */}
            <p className="login-forgot-password">Already have an account? Login</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register
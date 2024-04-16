import React, { useEffect, useState } from 'react';
import indiamunLogo from './images/INDIAMUN/login page logo.png';
import backgroundImage from './images/INDIAMUN/login backdrop.png';
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
// import './Register.css'
import './Login.css'
import Footer from './footer';
import toast from 'react-hot-toast';

const Register2 = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    otp: ''
  });

  useEffect(() => {
    toast.success("OTP sent to your email")
  }, [])

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
    fetch(`http://localhost:5010/api/v1/user/verify-otp`, {
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
        toast.success('User Registered Successfully!');
        setErrorMessage('');
        console.log('OTP Sent to your email:', data);
        // Redirect user to OnDemand page with text and next link
        window.location.href = `http://localhost:3000/`;
      })
      .catch(error => {
        setSuccessMessage('');
        console.error('Error while registering:', error);
        if (error.message) {
          console.log('Response:', error.message);
          const { status, data } = error; // Assuming your error response contains data field with error message 
          const { message, statusCode } = error;
          if (message) {
            toast.error(message); // Set the error message received from the backend
          } else {
            toast.error('An error occurred while registering user. Please try again later.');
          }
        } else {
          toast.error('An error occurred while registering user. Please try again later.');
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/login';
  }

  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div className='register2-main-container'>
        <div className="login-left-box">
          <h1 className="login-heading">Hello, <br />Young Leaders</h1>
          <div className="login-img-container">
            <img src={indiamunLogo} alt="indiamunLogo" />
          </div>
        </div>

        <div className="login-right-box">
          <div className="register2-semi-1">
            <h3 className="login-subheading">Register for your India MUN account</h3>
          </div>
          {errorMessage && <div className="login-error-message">{errorMessage}</div>}
          {successMessage && <div className="login-success-message">{successMessage}</div>}
          <div className="register2-semi-2">
            <form onSubmit={handleSubmit}>
              <div className='login-email'>
                <label>Email</label> <br />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className='login-email'>
                <label>Full Name</label> <br />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                  required
                />
              </div>
              <div className='login-email'>
                <label>Password</label> <br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className='login-email'>
                <label>OTP</label> <br />
                <input
                  type="number"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  required
                />
              </div>
              <button className='login-main-button' type="submit">Register</button>
            </form>
          </div>
          <div className="login-semi-3">
            {/* <p className="login-forgot-password">Forgot Password?</p> */}
            <p onClick={handleLogin} className="login-forgot-password">Already have an account? Login</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register2
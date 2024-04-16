import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import indiamunLogo from './images/INDIAMUN/login page logo.png';
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer';

const PaymentSuccess = () => {

  const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")
  console.log(referenceNum)

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mylearning'); // Replace '/new-page' with the desired path
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div>
        <div className="">ORDER SUCCESSFUL</div>
        <div className="">Reference No: {referenceNum}</div>
      </div>

      <Footer />
    </>
  )
}

export default PaymentSuccess
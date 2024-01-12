import React from 'react'
import './policy.css'
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer.js'

const Refund_Policy = () => {
  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div className='main-policy-container'>
        <h2 className='policy-title'>Cancellation & Refund Policy</h2>
        <p className="policy-text">
          No cancellations & Refunds are entertained
        </p>
      </div>

      <Footer />
    </>
  )
}

export default Refund_Policy
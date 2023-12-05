import React from 'react'
import './After_payment.css'

const After_payment = () => {

  const handleClick = () => {
    const url = 'https://indiamun.org';
    window.location.href = url;
  }

  return (
    <div className='after-payment-main'>
      <div className="after-payment-thanks">
        <p>Thanks for purchasing our course! We will reach out to you via Email in 4-5 days!</p>
      </div>
      <div className="go-back-indiamun">
        <button className='after-payment-main-btn' onClick={handleClick}>Go back to IndiaMUN</button>
      </div>
    </div>
  )
}

export default After_payment
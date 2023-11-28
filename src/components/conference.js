import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import './conference.css'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import indiaMunLogo from './images/INDIAMUN/india mun blue logo.png';
import Footer from './footer'
import indiaMunRecap1 from './images/conference/1 (1).png';
import indiaMunRecap2 from './images/conference/2 (1).png';
import indiaMunRecap3 from './images/conference/3 (1).png';
import indiaMunRecap4 from './images/conference/4 (1).png';
import indiaMunRecap5 from './images/conference/5 (1).png';
import indiaMunRecap6 from './images/conference/6 (1).png';
import indiaMunRecap7 from './images/conference/7 (1).png';
import indiaMunRecap8 from './images/conference/8 (1).png';
import indiaMunRecap9 from './images/conference/9.png';
import indiaMunRecap10 from './images/conference/10.png';
import indiaMunRecap11 from './images/conference/11.png';
import indiaMunRecap12 from './images/conference/12.png';
import indiaMunRecap13 from './images/conference/13.png';
import indiaMunRecap14 from './images/conference/14.png';
import indiaMunRecap15 from './images/conference/15.png';

export default function Conference() {
  return (
    <>
      <div className='top_comp'>
        <img className='left_img' src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div className="conference-hero">
        <img className='indiamun-logo' src={indiaMunLogo} alt="indiaMunLogo" />
        <h2 className='conference-heading'>INDIA MUN ANNUAL CLIMATE CONFERENCE</h2>
        <p className='conference-p'>Join us at the India MUN Annual Climate Conference, where passion meets purpose, and the youth lead the charge for climate action. This flagship event gathers visionaries, activists, and change-makers to drive meaningful discussions and innovative solutions.</p>
      </div>

      <div className="am-go"></div>


      <div className="registrations-line">
        <p><i>Registrations Opening on 1<sup> st</sup> Dec, 2023</i></p>
      </div>

      <div className="am-go"></div>


      <h1 className='high-head'>KEY HIGHLIGHTS:</h1>
      <div className='pro-heig'>
        <div className='pro-item'>
          <p className='pro-head'>Youth-Led Dialogues</p>
          <p className='pro-des'>Engage in thought-provoking discussions led by young leaders driving climate action globally.
          </p>
        </div>
        <div className='pro-item'>
          <p className='pro-head'>Innovative Solutions Showcase</p>
          <p className='pro-des'>Witness groundbreaking initiatives and solutions addressing pressing climate challenges.
          </p>
        </div>
        <div className='pro-item'>
          <p className='pro-head'>Global Networking</p>
          <p className='pro-des'>Connect with like-minded individuals, experts, and organizations committed to a sustainable future
          </p>
        </div>
        <div className='pro-item'>
          <p className='pro-head'>Inspiring Keynotes</p>
          <p className='pro-des'>Gain insights from influential speakers shaping the discourse on climate change and environmental conservation.
          </p>
        </div>
        <div className='pro-item'>
          <p className='pro-head'>Interactive Workshops</p>
          <p className='pro-des'>Participate in hands-on workshops, equipping yourself with actionable knowledge and skills.
          </p>
        </div>
        <div className='pro-item'>
          <p className='pro-head'>Youth Awards Ceremony</p>
          <p className='pro-des'>Celebrate and recognize outstanding contributions by young individuals in the field of climate action.
          </p>
        </div>
      </div>

      <div className="am-go"></div>

      <p className="conference-invitation">This is not just a conference; it's an invitation to be part of something bigger. Connect with us and be the change.</p>

      <div className="am-go"></div>

      <div className="indiamun-2021-recap">
        <img src={indiaMunRecap1} alt="indiaMunRecap1" />
        <img src={indiaMunRecap2} alt="indiaMunRecap2" />
        <img src={indiaMunRecap3} alt="indiaMunRecap3" />
        <img src={indiaMunRecap4} alt="indiaMunRecap4" />
        <img src={indiaMunRecap5} alt="indiaMunRecap5" />
        <img src={indiaMunRecap6} alt="indiaMunRecap6" />
        <img src={indiaMunRecap7} alt="indiaMunRecap7" />
        <img src={indiaMunRecap8} alt="indiaMunRecap8" />
        <img src={indiaMunRecap9} alt="indiaMunRecap9" />
        <img src={indiaMunRecap10} alt="indiaMunRecap10" />
        <img src={indiaMunRecap11} alt="indiaMunRecap11" />
        <img src={indiaMunRecap12} alt="indiaMunRecap12" />
        <img src={indiaMunRecap13} alt="indiaMunRecap13" />
        <img src={indiaMunRecap14} alt="indiaMunRecap14" />
        <img src={indiaMunRecap15} alt="indiaMunRecap15" />
      </div> 

      <Footer />

    </>
  )
}
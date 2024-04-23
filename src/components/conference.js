import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import './conference.css'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import left_image from './images/INDIAMUN/left_image.webp'
import right_image from './images/INDIAMUN/right_image.webp'
import indiaMunLogo from './images/INDIAMUN/india mun blue logo.png';
import Footer from './footer'
import { useAuthContext } from './hooks/useAuthContext'
import { useFirestore } from './hooks/useFirestore'
import { useLogout } from './hooks/useLogout'
import { useParams } from 'react-router-dom'
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
import indiaMunNewRecap1 from './images/conference/2021 1.webp';
import indiaMunNewRecap2 from './images/conference/2021 2.webp';
import indiaMunNewRecap3 from './images/conference/2021 3.webp';
import indiaMunNewRecap4 from './images/conference/2021 4.webp';
import indiaMunNewRecap5 from './images/conference/2021 5.webp';
import indiaMunNewRecap6 from './images/conference/2021 6.webp';
import indiaMunNewRecap7 from './images/conference/2021 7.webp';
import indiaMunNewRecap8 from './images/conference/2021 8.webp';
import indiaMunNewRecap9 from './images/conference/2021 9.webp';
import indiaMunNewRecap10 from './images/conference/2021 10.webp';
import indiaMunNewRecap11 from './images/conference/2021 11.webp';
import indiaMunNewRecap12 from './images/conference/2021 12.webp';
import indiaMunNewRecap13 from './images/conference/2021 13.webp';
import indiaMunNewRecap14 from './images/conference/2021 14.webp';
import indiaMunNewRecap15 from './images/conference/2021 15.webp';
import hero from './images/conference/Conf image.webp'
import Agenda from './images/conference/Agenda.webp'
import fest from './images/conference/fest.webp'
import conf from './images/conference/Conf open.webp'
import imcc_certificate from './images/conference/MUN conf Certificate.webp'
import { useLogin } from './hooks/useLogin'
import { firebaseAuth, storeRegisteredUsersIMCCInfo, storeRegisteredUsersIYFAInfo } from './firebase/config'

export default function Conference() {

  const { user } = useAuthContext()
  const { login, signInWithGoogle } = useLogin()

  const goToRazorpayPayment = () => {
    const url = 'https://rzp.io/l/vzWSsYi';

    // Open the URL in a new tab
    window.open(url, '_blank');
  }

  const handleClick = async () => {
    if (!user) {
      try {
        await signInWithGoogle();

        // Listen for changes in the authentication state
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            // Access user information
            const { uid, displayName, email } = user;

            // Store user information in Firestore
            storeRegisteredUsersIMCCInfo(uid, displayName, email);

            // history.push('/events');
          } else {
            console.log('User not found!');
          }
        });
      } catch (err) {
        console.log(err);
      }
      try {
        // userlogin()
        goToRazorpayPayment()
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // userlogin()
        const { uid, displayName, email } = user
        storeRegisteredUsersIMCCInfo(uid, displayName, email);
        goToRazorpayPayment()
      } catch (error) {
        console.log(error);
      }

    }

  }

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
        <h2 className='conference-heading'>INDIA MUN NATIONAL CONFERENCE 2024</h2>
        <p className='conference-p'>Join us at the India MUN National Conference 2024, where passion meets purpose, and the youth lead the charge for climate action. This flagship event gathers visionaries, activists, and change-makers to drive meaningful discussions and innovative solutions.</p>
      </div>

      {/* <div className="am-go"></div> */}


      {/* <div className="registrations-line">
        <p><i>Registrations Opening on 1<sup> st</sup> Dec, 2023</i></p>
      </div>

      <div className="am-go"></div> */}


      <div className="imcc-hero-img-container">
        <img src={hero} alt="hero" />
      </div>

      <div className="conference-hero">

      <div className="aff-hero">
      <div className="aff-hero-right">
          <div className="aff-hero-right-img">
            <img src={fest} alt="GSCAPlaque" />
          </div>
        </div>
        <div className="aff-hero-right">
          <div className="aff-hero-right-img">
            <img src={conf} alt="GSCAPlaque" />
          </div>
        </div>
      </div>
  
        
        <div>
        <h1 className='high-head'>AGENDA</h1>
        <p className='pro-head'>India MUN National Conference & “Youth for Earth” Fest 2024</p>
        <img src={Agenda} alt="hero" height={300}/>
        </div>
      </div>

      <div>
        <h1 className='high-head'></h1>
      </div>

      <div className="aff-hero">
      <div className="aff-hero-right">
          <div className="aff-hero-right-img">
          <h3 className='aff-hero-subheading'>24th April, 2024</h3>
            <img src={left_image} alt="GSCAPlaque" />
          </div>
        </div>
        <div className="aff-hero-right">
          <div className="aff-hero-right-img">
          <h3 className='aff-hero-subheading'>25th April, 2024</h3>
            <img src={right_image} alt="GSCAPlaque" />
          </div>
        </div>
      </div>

      <div>
        <h1 className='high-head'></h1>
      </div>
      
      <div className="imcc-registeration-container">
        <h2 className="imcc-registeration-heading">Get READY to redefine IMPACT</h2>
        <h2 className="imcc-registeration-text">India MUN Climate Conference 2024 is here!</h2>
        <p className="more-than-an-event">This is more than an event; it's the essence of India MUN – a platform that defines leadership, impact, and unity!</p>
        <button className="imcc-registeration-btn" onClick={handleClick}>Enroll Now</button>
      </div>

      <div className="am-go"></div>

      <div>
        <h1 className='high-head'></h1>
      </div>
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

      

      {/* <div className="am-go"></div> */}

      <div className="imcc-invitation">
        <p className="conference-invitation">This is not just a conference; it's an invitation to be part of something bigger. Connect with us and be the change.</p>
      </div>

      {/* <div className="am-go"></div> */}

      {/* <div className="indiamun-2021-recap">
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
      </div>  */}


      <h1 className='high-head' >PROGRAM CERTIFICATE</h1>
      <div className='main-cer'>
        <div className='left-cer'>
          <p>Upon completing the program you will be awarded a certificate of INDIA MUN CLIMATE CONFERENCE from India Model United Nations signed by UN dignitaries.
          </p>
          <p><i>Note:</i><br></br><i>All certificate images are for illustrative purposes only and may be subject to change.</i></p>
        </div>
        <div className='right-cer'>
          <img src={imcc_certificate} style={{ width: '100%', height: 'auto' }}></img>
        </div>
      </div>


      <div className="am-go"></div>

      
      <h2 className="imcc-registeration-heading">Reserve your slot now!</h2>
      <p className="more-than-an-event">The only MUN which is India’s MUN and represents India internationally</p>
      <div className="imcc-registeration-container">
        
        <button className="imcc-registeration-btn" onClick={handleClick}  >Enroll Now</button>
        
      </div>
      <h2 className="imcc-registeration-text">Registrations Closing on 24th May, 2024</h2>



      <div className="ylp-discount-container">
        <h2 className="ylp-discount-heading">50% Discount</h2>
        <h2 className="ylp-discount-heading_2">India MUN affiliate school students</h2>
        <p className="ylp-discount-p">We offer students from India MUN affiliated schools to unlock a 50% discount on all youth programs – YLP, IYFA, and the India
MUN Climate Conference. Please contact your school India MUN coordinator faculty or Principal for the same.</p>
      </div>

      {/* <div className="indiamun-2021-recap">
        <img src={indiaMunNewRecap1} alt="indiaMunNewRecap1" />
        <img src={indiaMunNewRecap2} alt="indiaMunNewRecap2" />
        <img src={indiaMunNewRecap3} alt="indiaMunNewRecap3" />
        <img src={indiaMunNewRecap4} alt="indiaMunNewRecap4" />
        <img src={indiaMunNewRecap5} alt="indiaMunNewRecap5" />
        <img src={indiaMunNewRecap6} alt="indiaMunNewRecap6" />
        <img src={indiaMunNewRecap7} alt="indiaMunNewRecap7" />
        <img src={indiaMunNewRecap8} alt="indiaMunNewRecap8" />
        <img src={indiaMunNewRecap9} alt="indiaMunNewRecap9" />
        <img src={indiaMunNewRecap10} alt="indiaMunNewRecap10" />
        <img src={indiaMunNewRecap11} alt="indiaMunNewRecap11" />
        <img src={indiaMunNewRecap12} alt="indiaMunNewRecap12" />
        <img src={indiaMunNewRecap13} alt="indiaMunNewRecap13" />
        <img src={indiaMunNewRecap14} alt="indiaMunNewRecap14" />
        <img src={indiaMunNewRecap15} alt="indiaMunNewRecap15" onClick={handleClick} style={{cursor: 'pointer'}} />
      </div> */}


      <Footer />

    </>
  )
}
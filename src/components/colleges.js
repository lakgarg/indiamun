import React from 'react'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Navbar from './navbar'
import model_img from './images/participate/india mun text.webp'
import forestam from './images/About/Forrest-right.webp'
import google_photo from './images/participate/google.svg'
import login_phot from './images/newimages/login deks .webp'


import  {useNavigate}  from 'react-router-dom';
import { useState } from 'react'
import { useLogin } from './hooks/useLogin'
import {useAuthContext} from './hooks/useAuthContext'
import Footer from './footer'

export default function Collges() {

    const { login, error, isPending,signInWithGoogle } = useLogin() 
    const history = useNavigate()
    const {user} = useAuthContext()

    const handleSignIN =async(e)=>{
        try{
          await signInWithGoogle();
          history('/events')
          console.log(user)
          
        }catch(err){
          console.log(err)
        }
      
       }

  return (
      <>
    <div className='top_comp'>
    <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt=""/>
    </div>
    <Navbar/>
    <p className='Participate-head'>The Next Generation of Leaders</p>
{/* <p className='india'>INDIA</p>
<p className='mod'>MODEL UNITED NATIONS</p>
<p className='year'>2023</p> */}
<img className='model_img' src={model_img}/>





<div className='imagesection'>
  {/* <button>Apply now</button> */}
  <img className='img_sec_l' style={{width:'100%',height:'auto'}} src={login_phot}/>
  <p className='custom-button1'>College Students</p>
  <button onClick={handleSignIN} className='custom-button'><img style={{width:'30px',height:'30px'}} src={google_photo}/>  Sign in with Google</button>
</div>


<div className='live_prog'>
  <h1>LIVE PROGRAMS</h1>
</div>


<div className='part_d'>
  <h1 className='head-am1'>INDIA'S YOUNG FOREST AMBASSADOR</h1>
  <p>( Registrations Open )</p>
</div>
    <p className='con-mind'>Connecting young minds with nature & helping them develop self-awareness, creativity, resilience, collaboration, and environmental stewardship.</p>
      <div className='forest-am'>
        <div className='for-left part'>
        <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><button>SEE OUR WORK AREA</button></a>
        </div>
        <div className='for-right part'>
        <p>Given the need to restore our degraded lands and forest ecosystems India needs to build a youth-led initiative to fund on ground regenerative action that will have enormous ecological and social impact. </p>
        <img src={forestam} ></img>
        <button className='main-button' onClick={handleSignIN}>Learn More</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

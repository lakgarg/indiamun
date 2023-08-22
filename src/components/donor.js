import React from 'react'
import Navigation from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer'
import google_photo from './images/participate/google.svg'


// login
import  {useNavigate}  from 'react-router-dom';
import { useLogin } from './hooks/useLogin'
import {useAuthContext} from './hooks/useAuthContext'

export default function Donor() {

    const { login, error, isPending,signInWithGoogle } = useLogin()
    const history = useNavigate()
    const {user} = useAuthContext()

  const handleSignIN =async(e)=>{
    try{
      await signInWithGoogle();
      history('/donorSubs')
      console.log(user)
      
    }catch(err){
      console.log(err)
    }
  
   }


  return (
    <div>
        <div className='top_comp'>
        <img className='left_img' src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt=""/>
    </div>
      <Navigation/>
     

    <h1>DONOR SUBSCRIPTION PAGE </h1>
    <button onClick={handleSignIN} className='custom-button'><img style={{width:'30px',height:'30px'}} src={google_photo}/>  Sign in with Google</button>



     <Footer/>

    </div>
  )
}

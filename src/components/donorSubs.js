import React from 'react'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'


import {useAuthContext} from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'
import Footer from './footer'
import MyComponent from '../api/createSubs'


export default function DonorSubs() {
    const {user} = useAuthContext()
    const { logout } = useLogout()
  return (
    <div>
        <div className='top_comp'>
        <img className='left_img' src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt=""/>
    </div>
    {/* <Navbar/> */}
    <div className='log-nav'>
        <div className='log-nav1'>
            <img src={user.photoURL}/>
            <h4>hello, {user.displayName}</h4>
        </div>
        <div className='log-nav2'>
            <button onClick={logout }>Logout</button>
        </div>
    </div>

    <MyComponent/>
    <Footer/>
    </div>
  )
}

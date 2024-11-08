import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "./IM2024Winners.css";
import left_img from "./images/INDIAMUN/logo left.webp";
import right_img from "./images/INDIAMUN/logo right.webp";
import indiaMunLogo from "./images/INDIAMUN/india mun blue logo.png";
import Footer from "./footer";
import winner1 from '../components/images/2024 Winners/DJNCALS (1).png'
import winner2 from '../components/images/2024 Winners/19.png'
import winner3 from '../components/images/2024 Winners/20.png'
import winner4 from '../components/images/2024 Winners/21.png'

const IM2024Winners = () => {
  return (
    <>
      <div className="top_comp">
        <img className="left_img" src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className="right_img" src={right_img} alt="" />
      </div>

      <Navbar />

      <div className="Winners-2024-hero">
        <img className="indiamun-logo" src={indiaMunLogo} alt="indiaMunLogo" />
        <h2 className="winner-2024-heading">
          INDIA MUN 2024 NATIONAL CLIMATE CONFERENCE 2024 WINNERS
        </h2>
        <div className='yt_main_div_2024_winner'>
          <iframe className="winner-pc" width="900" height="506" src="https://www.youtube.com/embed/zQNjt7ZSox8?si=NNa-Myi_LGgJ4bPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="winner-phone" width="300" height="169" src="https://www.youtube.com/embed/zQNjt7ZSox8?si=NNa-Myi_LGgJ4bPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <h2 className="winner-2024-heading1">HALL OF FAME</h2>

      <div className="images-2024">
        <h2 className="winner-2024-heading2">COUNCIL AWARDS</h2>
        <img className="img-2024" src={winner1} alt="winner1" />
        <h2 className="winner-2024-heading3">COMMITTEE AWARDS</h2>
        <img className="img-2024" src={winner2} alt="winner2" />
        <img className="img-2024" src={winner3} alt="winner3" />
        <img className="img-2024" src={winner4} alt="winner4" />
      </div>

      <Footer />

    </>
  )
}

export default IM2024Winners
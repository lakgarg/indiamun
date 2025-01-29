import React, { useRef } from 'react'
import GoogleButton from 'react-google-button'
import p1 from './images/participate/p1.webp'
import p2 from './images/participate/p2.webp'
import p3 from './images/participate/p3.webp'
import p4 from './images/participate/p4.webp'
import p5 from './images/participate/p5.webp'
import ladder from './images/participate/ladder.webp'
import './participate.css'
import google_photo from './images/participate/google.svg'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Navbar from './navbar'
import forestam from './images/About/Forrest-right.webp'
import banner from './images/participate/badge.webp'
import ylpleft from './images/participate/YLP left.webp'
import ylpright from './images/participate/YLP right.webp'
import ylpbelow from './images/participate/YLP-below.webp'
import eve_img from './images/participate/previous\ events\ deks.webp'
import eve_img1 from './images/participate/previous\ events\ phone.webp'
import cli_hack from './images/participate/hack logo.webp'
import first_prize from './images/participate/first-prize.webp'
import sec_prize from './images/participate/second-prize.webp'
import cli_hack_main from './images/participate/climate-hack-logo.webp'
import model_img from './images/participate/2025.png'
import step1 from './images/newimages/step 1.webp'
import step2 from './images/newimages/step 2.webp'
import conf from './images/newimages/conf left.webp'
import confr from './images/newimages/conf right.webp'
import login_phot from './images/newimages/login\ deks\ .webp'
import syca from './images/affiliate/start your climate action(desk).webp'
import sycaMobile from './images/affiliate/start your climate action(mobile).webp'

import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useLogin } from './hooks/useLogin'
import { useAuthContext } from './hooks/useAuthContext'
import Footer from './footer'





export default function Participate() {
  const { login, error, isPending, signInWithGoogle } = useLogin()
  const history = useNavigate()
  const { user } = useAuthContext()
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  const targetRef5 = useRef(null);


  const handleSignIN = async (e) => {
    try {
      await signInWithGoogle();
      history('/events')
      console.log(user)

    } catch (err) {
      console.log(err)
    }

  }
  const handleClick1 = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <>

      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>
      <Navbar />


      <div className='participate'>
        <div className='participate-item'>
          <img src={p1}></img>
          <a href='/events'><button>Registrations Open</button></a>
          <p>
            Program Fee: 
            ₹3,999
          </p>
        </div>
        <div className='participate-item'>
          <img src={p2}></img>
          <a href='/ylp'><button >Registrations Open</button></a>
          <p>
            Program Fee:
            ₹5,999
          </p>
        </div>
        <div className='participate-item'>
          <img src={p3}></img>
          <a href=''><button onClick={() => window.open('https://www.youtube.com/watch?v=zQNjt7ZSox8', '_blank')} >Concluded - View Results</button></a>
          <p>
            Program Fee:
            ₹1,999
          </p>
        </div>
        <div className='participate-item'>
          <img src={p4}></img>
          <a target='_blank' href='https://www.instagram.com/p/Cr0xk4OP1Om/'><button>Season 1 Concluded - View Results</button></a>
          <a href=''><button onClick={() => window.open('https://earthgeeks.indiamun.org/courses/BuzzOnEarth-India-Hackathon-66af575915fe3441179b4c0c', '_blank')} >Season 2 Concluded - View Results</button></a>
        </div>
        <div className='participate-item'>
          <img src={p5}></img>
          <button onClick={() => handleClick1(targetRef5)}>Competitions</button>
          <p>Coming Soon </p> 
        </div>
      </div>
      <p className='Participate-head'>The Next Generation of Leaders</p>
      {/* <p className='india'>INDIA</p>
<p className='mod'>MODEL UNITED NATIONS</p>
<p className='year'>2023</p> */}
      <img className='model_img' src={model_img} />


      <div className="img-syca">
        <img src={syca} alt="syca" />
      </div>

      {/* <div className='imagesection'> */}
      {/* <button>Apply now</button> */}
      {/* <img className='img_sec_l' style={{ width: '100%', height: 'auto' }} src={login_phot} /> */}
      {/* <p className='custom-button1'>college Students</p>
        <button onClick={handleSignIN} className='custom-button'><img style={{ width: '30px', height: '30px' }} src={google_photo} />  Sign in with Google</button>
        <p className='custom-button2'>School Students</p>
        <a href='/schools'><button className='custom-button3'><img style={{ width: '30px', height: '30px' }} src={google_photo} />  Sign in with Google</button></a> */}
      {/* </div> */}


      <div className='part_d_fa'>
        <h1 className='head-am1_fa' ref={targetRef1}>INDIA'S YOUNG FOREST AMBASSADOR</h1>
        <p className='con-mind'>Connecting young minds with nature & helping them develop self-awareness, creativity, resilience, collaboration, and environmental stewardship.</p>
      </div>
      <div className='forest-am'>
        <div className='for-left part'>
          <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><button>SEE OUR WORK AREA</button></a>
        </div>
        <div className='for-right part'>
          <p>Given the need to restore our degraded lands and forest ecosystems India needs to build a youth-led initiative to fund on ground regenerative action that will have enormous ecological and social impact. </p>
          <img src={forestam} ></img>
          <div className='reg_school_clg_fa'>
            <span>Registrations Open</span>
            <a href='/events'><button className='lm-btn'>Enroll Now</button></a>
            {/* <a><button onClick={handleSignIN} >Colleges</button></a> */}
          </div>
        </div>
      </div>
      {/* <p className='date-and-timeline'>Dates And Timelines :</p>
<ul className='ul-type'>
  <li>Registrations Open - 24th May 2023 | 12:00 PM</li>
  <li>Event Starting - 2nd June 2023 | 11:59PM</li>
</ul>
<p className='date-and-timeline'>About Us:  India's Young Forest Ambassador :</p>
<p className='am-content'>Welcome to India's Young Forest Ambassador Program, an initiative dedicated to inspiring and empowering India's youth to take action for forest conservation and regeneration. Our program is designed to ignite a sense of responsibility and drive positive change among young individuals.</p>
<p className='am-content'>At India's Young Forest Ambassador Program, we firmly believe that the youth hold the key to shaping a sustainable future. Our mission is to equip them with the knowledge, tools, and practical skills needed to make a tangible impact. Through immersive education, hands-on experiences, and community engagement, we aim to create a generation of passionate environmental leaders.
</p>
<p className='am-content'>Join us on this exciting journey of exploration, learning from experts, and collaborating with like-minded individuals. Together, we can make a lasting difference and build a greener, healthier, and more sustainable future.</p>
<p className='am-content am-who'  >Who can Participate: class 6th - class 12th.</p>
<p className='am-content'>Join India's Young Forest Ambassador Program and unleash your potential to create positive environmental action.</p>


<p className='IYFA'>India's Young Forest Ambassador Program (IYFA):</p>
<div className='young-for'>
<p>Empowering Youth to Save Our Ecosystems India MUN, in partnership with BuzzOnEarth Youth, is thrilled to announce the launch of India's very first Young Forest Ambassador program (IYFA), with the backing of prestigious organizations like the United Nations Environment Program (UNEP) and United Nations Framework Convention on Climate Change (UNFCCC). The India's Young Forest Ambassador Program aims to empower young individuals to become ambassadors of change in their communities by providing them with the knowledge, tools, and resources needed to conserve, protect, and regenerate ecosystems, with a special emphasis on forests.</p>
<p className='com-IYFA'>1. Empowering Young Individuals to Drive Change</p>
<div>The Young Forest Ambassador Program envisions a future where young people play a vital role in environmental conservation. By equipping them with the necessary skills and understanding, we aim to unleash their potential as stewards of nature. Through this program, we encourage young individuals to actively participate in safeguarding the environment, addressing climate change, and protecting the planet's precious resources.</div>
<p className='com-IYFA'>2. Engaging Educational Activities and Initiatives</p>
<div>Participants in the Young Forest Ambassador Program will have the opportunity to engage in a variety of educational activities and hands-on initiatives. These activities are designed to foster a deep appreciation for forests and their significance in climate regulation. By understanding the intricate relationship between biodiversity, ecosystems, and human well-being, young ambassadors will develop a holistic perspective on environmental conservation.</div>
<p className='com-IYFA'>3. Innovative Approaches to Ecosystem Restoration</p>
<div>The program explores innovative approaches to ecosystem restoration, with a particular focus on forests. Ambassadors will learn about sustainable forestry practices, reforestation efforts, habitat preservation, and community engagement strategies. By embracing these practices, they will contribute to the preservation and regeneration of forests, which are essential for maintaining ecological balance and supporting countless species.</div>
<p className='com-IYFA'>4. Inspiring Advocates for Environmental Stewardship</p>
<div>One of the primary objectives of the Young Forest Ambassador Program is to inspire young individuals to become advocates for environmental stewardship. Through their newfound knowledge and passion, ambassadors will be empowered to drive positive change within their communities and spheres of influence. By taking action and encouraging others to follow suit, they will play an instrumental role in creating a sustainable future for our planet.</div>
<p className='com-IYFA'>5. Conclusion</p>
<div>The India's Young Forest Ambassador Program (IYFA) holds immense potential to nurture a generation of environmentally conscious and proactive youth. By participating in this program, young individuals can gain the skills, knowledge, and resources needed to become effective change-makers in their communities. We urge all principals to ask their students to join the India's Young Forest Ambassador Program, and together, let's create a greener and more sustainable future for all.</div>
</div>














<p className='date-and-timeline'>Modules India's Young Forest Ambassador :</p>
<p className='intro-mod'>Introduction Module:</p>
<ul className='ul-type'>
  <li>Module 1: Embracing the Forests</li>
  <li>Module 2: Regeneration and Conservation</li>
  <li>Module 3: Taking Action</li>
  <li>Module 4: Becoming a Young Forest Ambassador</li>
</ul>
<p className='intro-mod'>Activity Module:</p>
<ul className='ul-type'>
  <li>Module 5: Fundraising for Forest Conservation</li>
</ul>
<p className='am-content'>Key Topics Covered:</p>
<ul className='topics'>
  <li>Fundraising Strategies</li>
  <li>Builiding Donor Relationships</li>
  <li>Personal Fundraising Goals</li>
  <li>Fundraising Ethics</li>
</ul>
<p className='am-content'>Each participant will be expected to raise a minimum of INR 2000 or bring in five donors who could contribute INR 100 per month. </p>
<p className='am-content'>By the end of this module, you will have developed a comprehensive fundraising plan, identified potential donors or sponsors, and acquired the skills and confidence to effectively raise funds for forest conservation projects.
</p>
<p className='am-content'>Remember, every contribution counts, and your efforts will directly contribute to the success of our collective mission. Together, we can make a significant impact and secure the necessary resources to conserve and regenerate our precious forests.
Get ready to unleash your fundraising potential and become a passionate advocate for financial support in our quest for a greener, healthier, and more sustainable future.</p>
<p className='date-and-timeline'>Rewards & Benefits:</p>
<ul className='topics'>
  <li>Get goodies like eco- friendly stationery , T-shirts and water bottle</li>
  <li>Get access to some of the most beautiful nature camps</li>
  <li>Get a certificate and badge as India’s Young Forest Ambassador</li>
  <li>The top 20 students get a free trip and nature trek to one of our forest sites </li>
  <li>Be a part of India’s youth task force on Ecosystem Restoration and connect with the UN Youth Task force</li>
  <li>Become a young influencer for climate action and regeneration</li>
</ul> */}
      {/* <div className='certificate'>
  <div className='img-cer'><img src={banner}></img></div>
  <div className='con-cer'>
    <div>Registrations Open</div>
    <div><button onClick={handleSignIN}>Enroll NOW</button></div>
    <div><a href='https://docs.google.com/document/d/12vML5YUjKd5CbPmuRJTAEJYo0JmfxZZ1imYmeZ8IOnY/edit?usp=sharing' target={'_blank'}><button>IYFA FAQ'S</button></a></div>
  </div>
</div> */}
      <div className='ylp-main' ref={targetRef2}>
        <div className='ylp'>
          <span>YOUTH LEADERSHIP PROGRAM</span>
          <div>
            {/* <button>Coming Soon</button> */}
            {/* <span>Coming Soon</span> */}
          </div>
        </div>
        <p className='am-content ylp-sec'>An immersive experiential program curated by industry leaders to help you groom your own leadership style and be the best version of yourself. This course helps unleash the leader in you and prepare you with the necessary life skills to excel in your chosen field.</p>
        <div className='ylp-pic'>
          <div className='ylp-left'><img src={ylpleft}></img></div>
          <div className='ylp-right'><img src={ylpright}></img></div>
        </div>
        <div className="reg-info">
          <h2>Registrations Open</h2>
          <a href="/ylp"><button>Enroll Now</button></a>
        </div>
      </div>
      {/* <div className='ylp-school-pic'> */}
      <div className='ylp-school-img'><img src={ylpbelow}></img></div>
      {/* </div> */}
      <div className='bda_cli'>
        <p className='cli-hack' ref={targetRef4}><span>CLIMATE HACKATHON</span><button>(Season 1 Concluded)</button></p>
        <div className='climate-hackathon'>
          <div className='cli1'>
            <img src={cli_hack} alt="" />
            <h3>CLIMATE HACKATHON</h3>
            <div className='button_div_climate'>
              
              <div className='button_div_climate2'>
                <p>Season 1</p>
                <button className='right-button'><a style={{ textDecoration: 'none', color: 'white' }} href='https://www.instagram.com/p/Cr0xk4OP1Om/' target={'_blank'}>View Results</a></button>
              </div>
              <div className='button_div_climate2'>
                <p className=''>Season 2</p>
                <button className='right-button-1'><a style={{ textDecoration: 'none', color: 'white' }} href='https://earthgeeks.indiamun.org/courses/BuzzOnEarth-India-Hackathon-66af575915fe3441179b4c0c' target={'_blank'}>View Results</a></button>
              </div>
            </div>
          </div>
          <div className='cli2'>
            <p>BuzzOnEarth YOUTH India Hackathon -2023 welcomes participation from SCHOOLS and COLLEGES from all across the country to find solutions to some of the most pressing climate and sustainability issues that Indian businesses and communities face. The solutions can be combinations of tech products, policy evaluations, market models, business plans, new designs and product innovations. Give wings to your creativity and ideas and develop innovative solutions that can be deployed. This is an Open Innovation Student category in which students can give ideas against the pre-defined Problem Statements across themes.</p>
            <div className='climate-hack-imgs'>
              <img src={first_prize} />
              <img src={sec_prize} />
            </div>
          </div>
          <div className='cli3'>
            <img src={cli_hack_main} />
          </div>

        </div>
      </div>

      <div className='youth_got_talent' ref={targetRef5}>
        <h1>STEP UP YOUTH'S GOT TALENT</h1>
        {/* <p>(Coming Soon)</p> */}
      </div>
      <p className='youth_p'>Step Up Youth's Got Talent is an initiative to bridge the gap between awareness and action. The program focuses on the holistic development of the students, inculcating in them various skills ranging from graphic designing and video editing to public speaking and management. Insightful work done by any student shall be featured on our websites and social media handles. Learners of the program will also be given the opportunity for cash prizes and various awards.</p>
      <div className='youth_img'>
        <img src={step1} alt="" />
        <img src={step2} alt="" />
      </div>
      <div className="reg-info">
        <h2>Competitions (Coming Soon)</h2>
        {/* <button>Coming Soon</button> */}
      </div>




      <div className='youth_full' ref={targetRef3}>
        <div className='youth_got_talent'>
          <h1>INDIA MUN CLIMATE CONFERENCE</h1>
          <p>(27th-28th July, 2024)</p>
        </div>
        <div className='cli-conf'>
          <div className='cli-conf1'>
            <p>India’s first Model United Nations conference on Climate is a challenging and competitive platform for students to debate and analyse some of the world’s most pressing climate problems.</p>
            <img src={conf} />
          </div>
          <div className='cli-conf2'>
            <img src={confr} />
          </div>
        </div>
        <div className="reg-info">
          <h2>India MUN Climate Conference (Concluded)</h2>
          <a href=""><button onClick={() => window.open('https://www.youtube.com/watch?v=zQNjt7ZSox8', '_blank')}>View Results</button></a>
        </div>
      </div>








      <p className='prev-ev'>PREVIOUS EVENTS</p>
      {/* <div className='eve-img'></div> */}
      <img style={{ width: '100%', height: 'auto' }} className='eve_img' src={eve_img} alt="" />
      <img style={{ width: '100%', height: 'auto' }} className='eve_img1' src={eve_img1} alt="" />




      {/* <div className='insta-feed'>

        <div className='insta-feed1'>
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" data-instgrm-version={14} style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 300, minWidth: 326, width: 'calc(100% - 2px)' }}>
            <div style={{ padding: 16 }}>
              <a href="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60 }} />
                  </div>
                </div>
                <div style={{ padding: '19% 0' }} />
                <div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}>
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18 }}>View this post on Instagram</div>
                </div>
                <div style={{ padding: '12.5% 0' }} />
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center' }}>
                  <div>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }} />
                  </div>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20 }} />
                    <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }} />
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <div style={{ width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)' }} />
                    <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: 24 }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 224 }} />
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 144 }} />
                </div>
              </a>
              <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><a href="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none' }} target="_blank">A post shared by BuzzOnEarth Media (@buzzonearth)</a></p>
            </div>
          </blockquote>
        </div>

        <div className='insta-feed1'>
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CJygpZrrHCm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" data-instgrm-version={14} style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 300, minWidth: 326, padding: 0, width: 'calc(100% - 2px)' }}>
            <div style={{ padding: 16 }}>
              <a href="https://www.instagram.com/p/CJygpZrrHCm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60 }} />
                  </div>
                </div>
                <div style={{ padding: '19% 0' }} />
                <div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}>
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18 }}>View this post on Instagram</div>
                </div>
                <div style={{ padding: '12.5% 0' }} />
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center' }}>
                  <div>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }} />
                  </div>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20 }} />
                    <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }} />
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <div style={{ width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)' }} />
                    <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: 24 }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 224 }} />
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 144 }} />
                </div>
              </a>
              <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><a href="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none' }} target="_blank">A post shared by BuzzOnEarth Media (@buzzonearth)</a></p>
            </div>
          </blockquote>
        </div>

        <div className='insta-feed1'>
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CXleXihPfNV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" data-instgrm-version={14} style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 300, minWidth: 326, padding: 0, width: 'calc(100% - 2px)' }}>
            <div style={{ padding: 16 }}>
              <a href="https://www.instagram.com/p/CXleXihPfNV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60 }} />
                  </div>
                </div>
                <div style={{ padding: '19% 0' }} />
                <div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}>
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18 }}>View this post on Instagram</div>
                </div>
                <div style={{ padding: '12.5% 0' }} />
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center' }}>
                  <div>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }} />
                  </div>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20 }} />
                    <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }} />
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <div style={{ width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)' }} />
                    <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: 24 }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 224 }} />
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 144 }} />
                </div>
              </a>
              <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><a href="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none' }} target="_blank">A post shared by BuzzOnEarth Media (@buzzonearth)</a></p>
            </div>
          </blockquote>
        </div>

        {/* <div className='insta-feed1'>
<blockquote className="instagram-media"  data-instgrm-permalink="https://www.instagram.com/p/CGuwDsTAhE5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" data-instgrm-version={14} style={{background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 300, minWidth: 326, padding: 0, width: 'calc(100% - 2px)'}}>
  <div style={{padding: 16}}>
    <a href="https://www.instagram.com/p/CGuwDsTAhE5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%'}} target="_blank">
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40}} />
        <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}>
          <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100}} />
          <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60}} />
        </div>
      </div>
      <div style={{padding: '19% 0'}} />
      <div style={{display: 'block', height: 50, margin: '0 auto 12px', width: 50}}>
        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
              <g>
                
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div style={{paddingTop: 8}}>
        <div style={{color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18}}>View this post on Instagram</div>
      </div>
      <div style={{padding: '12.5% 0'}} />
      <div style={{display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center'}}>
        <div>
          <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}} />
          <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2}} />
          <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}} />
        </div>
        <div style={{marginLeft: 8}}>
          <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20}} />
          <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}} />
        </div>
        <div style={{marginLeft: 'auto'}}>
          <div style={{width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}} />
          <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)'}} />
          <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}} />
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: 24}}>
        <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 224}} />
        <div style={{backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 144}} />
      </div>
    </a>
    <p style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}><a href="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none'}} target="_blank">A post shared by BuzzOnEarth Media (@buzzonearth)</a></p>
  </div>
</blockquote>
</div> */}


      {/* <div className='insta-feed1'>
          <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/Ca2Jj0Zt9SZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" data-instgrm-version={14} style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 300, minWidth: 326, padding: 0, width: 'calc(100% - 2px)', height: '532px' }}>
            <div style={{ padding: 16 }}>
              <a href="https://www.instagram.com/p/Ca2Jj0Zt9SZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60 }} />
                  </div>
                </div>
                <div style={{ padding: '19% 0' }} />
                <div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}>
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18 }}>View this post on Instagram</div>
                </div>
                <div style={{ padding: '12.5% 0' }} />
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center' }}>
                  <div>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2 }} />
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }} />
                  </div>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20 }} />
                    <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }} />
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <div style={{ width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }} />
                    <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)' }} />
                    <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: 24 }}>
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 224 }} />
                  <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 144 }} />
                </div>
              </a>
              <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><a href="https://www.instagram.com/p/CIr2R9vrhUf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none' }} target="_blank">A post shared by BuzzOnEarth Media (@buzzonearth)</a></p>
            </div>
          </blockquote>
        </div> */}
      {/* </div> */}

      {/* <div className='footer'>
        <h3 style={{textAlign:'center',color:'white'}}>INDIA MUN</h3>
        <div className='footer_flex'>
            <div className='footer_flex_item'>
                <p className='footer_flex_item_p'><a href='/' style={{textDecoration:'none',color:'white'}}>HOME</a></p>
                <p className='footer_flex_item_p'><a href='/contact' style={{textDecoration:'none',color:'white'}}>CONTACT</a></p>
                <p className='footer_flex_item_p'><a href='/about' style={{textDecoration:'none',color:'white'}}>ABOUT US</a></p>
            </div>
            <div className='footer_flex_item'>
               <p className='copy_footer'> ©2002</p>
            </div>
            <div className='footer_flex_item'>
            <a href='https://www.instagram.com/buzzonearth/' target={'_blank'}><i className="fa-brands fa-instagram"></i></a>
            <a href='https://twitter.com/BuzzOnEarth' target={'_blank'}><i className="fa-brands fa-twitter"></i></a>
            <a href='https://www.facebook.com/buzzonearth/' target={'_blank'}><i className="fa-brands fa-facebook"></i></a>
            <a href='https://www.youtube.com/@buzzonearth2959' target={'_blank'}><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
</div> */}
      <Footer />
    </>
  )
}

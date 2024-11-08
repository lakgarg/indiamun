import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import left_img from "./images/INDIAMUN/logo left.webp";
import right_img from "./images/INDIAMUN/logo right.webp";
import forestam from "./images/About/Forrest-right.webp";
import banner from "./images/participate/badge.webp";
import { useAuthContext } from "./hooks/useAuthContext";
import { useFirestore } from "./hooks/useFirestore";
import { useLogout } from "./hooks/useLogout";
import "./events.css";
import Footer from "./footer";
import {
  projectAuth,
  projectFirestore,
  storeRegisteredUsersIYFAInfo,
} from "./firebase/config";
import { useParams } from "react-router-dom";
import infostrip from "./images/iyfa/IYFA desk banner.webp";
import tempcertificate from "./images/newimages/template Certificate.webp";
import { useNavigate } from "react-router-dom";
import pic1 from "./images/pics/1.webp";
import pic2 from "./images/pics/2.webp";
import pic3 from "./images/pics/3.webp";
import pic4 from "./images/pics/5.webp";
import pic5 from "./images/pics/4.webp";
import IYFA_Main_Image from "./images/iyfa/IYFA image .webp";
import prakritidp from "./images/pics/pc.webp";
import { firebaseAuth, firebaseT, storeUserInfo } from "./firebase/config";
import { useLogin } from "./hooks/useLogin";
import Razorpay from "razorpay";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import Cookies from "js-cookie";
import axios from "axios";

export default function Events() {
  const { user } = useAuthContext();
  const { login, signInWithGoogle } = useLogin();
  const [mod, setMod] = useState(false);
  const { logout } = useLogout();
  const { id } = useParams();
  const nav_to = useNavigate();

  const [inputValue, setInputValue] = useState("");

  // firestore me ye data add
  const { addDocument, response } = useFirestore("iyfa-registered-users");

  // modal ke content
  const [st_name, setstName] = useState("");
  const [sch_name, setSchname] = useState("");
  const [classS, setClassS] = useState("");
  const [stateS, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [emailS, setEmailS] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [program_of_study, setprogram_of_study] = useState("");

  // module show
  const [mod1, setMod1] = useState(false);
  const [mod2, setMod2] = useState(false);
  const [mod3, setMod3] = useState(false);
  const [mod4, setMod4] = useState(false);
  const [mod5, setMod5] = useState(false);

  const handlemodule1 = () => {
    setMod1(!mod1);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(false);
  };
  const handlemodule2 = () => {
    setMod2(!mod2);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod1(false);
  };
  const handlemodule3 = () => {
    setMod3(!mod3);
    setMod4(false);
    setMod5(false);
    setMod1(false);
    setMod2(false);
  };
  const handlemodule4 = () => {
    setMod4(!mod4);
    setMod5(false);
    setMod1(false);
    setMod2(false);
    setMod3(false);
  };
  const handlemodule5 = () => {
    setMod5(!mod5);
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(false);
  };

  const goToCourse = () => {
    const url = "https://earthgeeks.indiamun.org/courses/Indias-Young-Forest-Ambassador-Program-6630115c6dd46552c99d8120";

    // Open the URL in a new tab
    window.open(url, "_blank");
  };


  // get data from firebase

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data
    addDocument({
      // uid: user.uid,
      Student_Name: st_name,
      College_name: sch_name,
      Year_of_study: classS,
      State: stateS,
      City: city,
      Phone_No: phone,
      Email: emailS,
      Program_of_study: "IYFA",
    }).then(() => {
      setSubmitted(true);
      // localStorage.setItem('enrollmentStatus', JSON.stringify(true));
    });

    setMod(!mod);
  };

  const [error, setError] = useState("");

  // const handleMakeIYFAPayment = async () => {
  //   try {
  //     const token = localStorage.getItem('token');

  //     if(!token){
  //       window.location.href = '/login';
  //     }

  //     console.log('Token in Frontend: ', token);
  //     const headers = {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     };

  //     console.log(headers)

  //     const { data: { key } } = await axios.get("http://localhost:5010/api/v1/payments/razorpay-key", { headers });
  //     const { data } = await axios.post("http://localhost:5010/api/v1/payments/payment-iyfa", { token }, { headers });

  //     const options = {
  //       key,
  //       amount: 100,
  //       currency: "INR",
  //       name: "IndiaMUN",
  //       description: "Payment for IYFA Course",
  //       order_id: data.order_id,
  //       callback_url: "http://localhost:5010/api/v1/payments/paymentverification",
  //       theme: {
  //         "color": "#121212"
  //       },
  //     }
  //     const razor = new window.Razorpay(options);
  //     razor.open()
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError('An error occurred, please try again.');
  //   }
  // };

  return (
    <>
      <div className="top_comp">
        <img className="left_img" src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className="right_img" src={right_img} alt="" />
      </div>

      <Navbar />
      {/* <div className='log-nav'>
        <div className='log-nav1'>
          <img src={user.photoURL} />
          <h4>hello, {user.displayName}</h4>
        </div>
        <div className='log-nav2'>
          <button onClick={logout}>Logout</button>
        </div>
      </div> */}

      {/* young forest leadership */}
      {/* <div className='part_d'>
  <h1 className='head-am1'>INDIA'S YOUNG FOREST AMBASSADOR</h1>
  <p>( Registrations Open)</p>
</div>
    <p className='con-mind'>Connecting young minds with nature & helping them develop self-awareness, creativity, resilience, collaboration, and environmental stewardship.</p>
      <div className='forest-am'>
        <div className='for-left part'>
        <button>SEE OUR WORK AREA</button>
        </div>
        <div className='for-right part'>
        <p>Given the need to restore our degraded lands and forest ecosystems India needs to build a youth-led initiative to fund on ground regenerative action that will have enormous ecological and social impact. </p>
        <img src={forestam} ></img>
        {/* {!submitted && <button onClick={()=>setMod(!mod)}>Enroll NOW</button>}
        {submitted && <button disabled onClick={()=>setMod(!mod)}>Enrolled</button>}  */}
      {/* </div>
      </div>  */}

      <div className="part_d1">
        <h1 className="head-am2">INDIA'S YOUNG FOREST AMBASSADOR</h1>
        <p>( Registrations Open )</p>
      </div>
      <p className="con-mind2">
        Given the need to restore our degraded lands and forest ecosystems India
        needs to build a youth-led initiative to support on ground regenerative
        action that will have enormous ecological and social impact.{" "}
      </p>

      <div className="forest-am2">
        {/* <div className='forest_img'>
          <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><button>SEE OUR WORK AREA</button></a>
        </div> */}
        <div className="forestam">
          <img src={IYFA_Main_Image}></img>
        </div>
      </div>

      {/* <div className='enroll-main'>
        <div className='enroll-div first-enroll'>
          <div className='enroll-status'>Current Status</div>
          {!submitted && <button onClick={() => setMod(!mod)}>Enroll NOW</button>}
          {submitted && <button disabled onClick={() => setMod(!mod)}>Enrolled</button>}
        </div>
        <div className='enroll-div'>
          <div className='enroll-status'>Price</div>
          <div className='enroll-free'>Free</div>
        </div>
        <div>
          {submitted && <a href='/event/modules'><button>Go to Course</button></a>}
        </div>
      </div> */}
      {/* <p className='date-and-timeline'>Dates And Timelines :</p>
<ul className='ul-type'>
  <li>Registrations Open - 24th May 2023 | 12:00 PM</li>
  <li>Event Starting - 2nd June 2023 | 11:59PM</li>
</ul>
<p className='date-and-timeline'>About India's Young Forest Ambassador :</p>
<p className='am-content'>Welcome to India's Young Forest Ambassador Program, an initiative dedicated to inspiring and empowering India's youth to take action for forest conservation and regeneration. Our program is designed to ignite a sense of responsibility and drive positive change among young individuals.</p>
<p className='am-content'>At India's Young Forest Ambassador Program, we firmly believe that the youth hold the key to shaping a sustainable future. Our mission is to equip them with the knowledge, tools, and practical skills needed to make a tangible impact. Through immersive education, hands-on experiences, and community engagement, we aim to create a generation of passionate environmental leaders.
</p>
<p className='am-content'>Join us on this exciting journey of exploration, learning from experts, and collaborating with like-minded individuals. Together, we can make a lasting difference and build a greener, healthier, and more sustainable future.</p>
<p className='am-content am-who'  >Who can Participate: class 6th - class 12th.</p>
<p className='am-content'>Join India's Young Forest Ambassador Program and unleash your potential to create positive environmental action.</p>
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

      {/* <div className="info-strip">
        <img src={infostrip} style={{ width: "100%", height: "auto" }}></img>
      </div> */}

      {/* <div className='overview'>
  <h1>PROGRAM OVERVIEW:</h1>
  <p>BuzzOnEarth and India MUN, in collaboration with the UN Decade on Ecosystem Restoration (UNEP + FAO) and United Nations Framework Convention on Climate Change (UNFCCC), is proud to introduce India's Young Forest Ambassador Program (IYFA) . This program aims to empower young individuals to become ambassadors of change in their communities, specifically in the realm of environmental conservation and ecological restoration.</p>
  <p>Gain a deep understanding of environmental issues and the tools to take effective action. As ambassadors you
 will be empowered to drive positive change within your communities and inspire others to join the cause of environmental stewardship.</p>
<p>A life-changing opportunity to become catalysts for change, leaving a positive impact on your communities and the environment.</p>
</div> */}

      <h1 className="proover">PROGRAM OVERVIEW:</h1>
      <div className="pro-strip">
        <div className="img-item">
          <img src={pic1}></img>
        </div>
        <div className="img-item">
          <img src={pic2}></img>
        </div>
        <div className="img-item">
          <img src={pic3}></img>
        </div>
        <div className="img-item">
          <img src={pic4}></img>
        </div>
        <div className="img-item">
          <img src={pic5}></img>
        </div>
      </div>

      <div className="grey-text">
        BuzzOnEarth Youth and India MUN, in collaboration with the UN Decade on
        Ecosystem Restoration (UNEP + FAO), is proud to introduce India's Young
        Forest Ambassador Program (IYFA), where passion meets purpose.
      </div>

      <div className="text1">Our compelling vision is to grow</div>
      <div className="text2">1 Million hectares of forests,</div>
      <div className="text3">
        Restore ecosystems, and leave a lasting legacy for future generations.
      </div>

      <div className="grey-text">
        As a Young Forest Ambassador, you'll become a change-maker, igniting
        your passion for nature and championing the importance of forests.
        Through hands-on experiences, educational workshops, and meaningful
        conservation projects, you'll develop the skills and knowledge needed to
        create positive change.
      </div>
      <div className="grey-text">
        AJoin our community of like-minded young leaders, united in our mission
        to protect and restore the wonders of our natural world.
      </div>
      <div className="grey-text">
        {" "}
        Together, let's create a world where nature thrives and future
        generations flourish.
      </div>

      <div className="prakriti">
        <img src={prakritidp} style={{ width: "100%", height: "auto" }}></img>
      </div>

      <h1 className="high-head">PROGRAM HIGHLIGHTS:</h1>
      <div className="pro-heig">
        <div className="pro-item">
          <p>
            <i className="fa-solid fa-video fa-2xl"></i>
            <i className="fa-solid fa-video fa-lg"></i>
          </p>
          <p className="pro-head">Pre-Recorded</p>
          <p className="pro-des">
            Video Lectures from UN Decade ON Ecosystem Restoration.
          </p>
        </div>
        <div className="pro-item">
          <p>
            <i className="fa-solid fa-list fa-2xl"></i>
            <i className="fa-solid fa-list fa-lg"></i>
          </p>
          <p className="pro-head">Modules</p>
          <p className="pro-des">
            4 Introduction Modules And 1 Activity module
          </p>
        </div>
        <div className="pro-item">
          <p>
            <i className="fa-solid fa-tree fa-2xl"></i>
            <i className="fa-solid fa-tree fa-lg"></i>
          </p>
          <p className="pro-head"> Nature trek Fully Sponsored</p>
          <p className="pro-des">top 5 performing participants</p>
        </div>
        <div className="pro-item">
          <p>
            <i className="fa-solid fa-award fa-2xl"></i>
            <i className="fa-solid fa-award fa-lg"></i>
          </p>
          <p>
            <i className="fa-duotone fa-file-certificate"></i>
          </p>
          <p className="pro-head">Certificate of Recognition</p>
          <p className="pro-des">
            that acknowledges your commitment and contribution to environment
            conservation
          </p>
        </div>
        <div className="pro-item">
          <p>
            <i className="fa-solid fa-people-group fa-2xl"></i>
            <i className="fa-solid fa-people-group fa-lg"></i>
          </p>
          <p className="pro-head">Global Networking Opportunities</p>
          <p className="pro-des">
            be the part of the Global UN community of #GenerationRestoration
          </p>
        </div>
        <div className="pro-item">
          <i className="fa-solid fa-sheet-plastic fa-2xl"></i>
          <i className="fa-solid fa-sheet-plastic fa-lg"></i>
          <p className="pro-head">Internship Opportunities</p>
          <p className="pro-des">
            with Gaia The Earth Foundation, a partner af the UN Decade on
            Ecosystem Restoration.
          </p>
        </div>
      </div>

      <div className="am-go">
        <div className="pro-item">
          <i className="fa-solid fa-hand-holding-heart fa-2xl"></i>
          <i className="fa-solid fa-hand-holding-heart fa-lg"></i>
          <p className="pro-head">Amazing Goodies</p>
          <p className="pro-des">
            Get eco-friendly stationery and a T-shirts on successfully
            completing the program
          </p>
        </div>
        <div className="pro-item">
          <i className="fa-solid fa-globe fa-2xl"></i>
          <i className="fa-solid fa-globe fa-lg"></i>
          <p className="pro-head">Global Recognition</p>
          <p className="pro-des">
            get featured in publications & websites and Social Media handles
          </p>
        </div>
      </div>

      <h1 className="high-head">Key Topics You Will Learn in this Program</h1>
      <div className="key-ler">
        <div className="key-item">
          <p>Forest Ecology and Biodiversity</p>
        </div>
        <div className="key-item">
          <p>Wildlife Conservation</p>
        </div>
        <div className="key-item">
          <p>Climate Change and Forests</p>
        </div>
        <div className="key-item">
          <p>Community Engagement & Sustainable Development</p>
        </div>
        <div className="key-item">
          <p>Fundamentals of Ecosystem Restoration</p>
        </div>
      </div>

      <h1 className="high-head">Program Modules</h1>
      <p className="sub-mod">(4 SUB MODULES + 1 ACTIVITY MODULE)</p>
      <p className="intro-am">
        Introduction Module: India's Young Forest Ambassador Program
      </p>
      <div className="mod_item_div">
        <div className="mod_item_div1">
          <p className="mod-item">
            <span>Module 1: Embracing the Forests</span>
            <i
              onClick={handlemodule1}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i
              onClick={handlemodule1}
              className="fa-solid fa-chevron-down fa-lg"
            ></i>
          </p>
          {mod1 && (
            <p className="mod-item1">
              In this module, we will dive deep into the captivating world of
              forests. Discover the awe-inspiring beauty and incredible
              biodiversity that these ecosystems hold. Learn about their vital
              role in climate regulation, the significance of healthy forest
              ecosystems, and the challenges they face in the wake of
              environmental degradation. Gain a profound understanding of the
              interconnectedness between forests, biodiversity, and human
              well-being.
            </p>
          )}
        </div>
        <div className="mod_item_div1">
          <p className="mod-item">
            <span>Module 2: Regeneration and Conservation</span>
            <i
              onClick={handlemodule2}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i
              onClick={handlemodule2}
              className="fa-solid fa-chevron-down fa-lg"
            ></i>
          </p>
          {mod2 && (
            <p className="mod-item1">
              Explore the concept of ecosystem regeneration and its pivotal role
              in combating climate change. Uncover innovative approaches to
              sustainable forestry practices, reforestation, and habitat
              preservation. Engage in discussions and activities that highlight
              the importance of conservation efforts and community involvement
              in nurturing and protecting our forests.
            </p>
          )}
        </div>
        <div className="mod_item_div1">
          <p className="mod-item">
            <span>Module 3: Taking Action</span>
            <i
              onClick={handlemodule3}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i
              onClick={handlemodule3}
              className="fa-solid fa-chevron-down fa-lg"
            ></i>
          </p>
          {mod3 && (
            <p className="mod-item1">
              Equip yourself with the tools and knowledge to take effective
              action. Discover practical strategies for creating impactful
              projects and initiatives within your communities. Learn about
              successful case studies and inspiring stories of individuals who
              have made a tangible difference in forest conservation and
              regeneration. Develop your skills in project planning, resource
              mobilization, stakeholder engagement, and effective communication
              for driving positive change.
            </p>
          )}
        </div>
        <div className="mod_item_div1">
          <p className="mod-item">
            <span>Module 4: Becoming a Young Forest Ambassador</span>
            <i
              onClick={handlemodule4}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i
              onClick={handlemodule4}
              className="fa-solid fa-chevron-down fa-lg"
            ></i>
          </p>
          {mod4 && (
            <p className="mod-item1">
              In the final module, embrace the role of a Young Forest
              Ambassador. Explore the qualities and attributes that make an
              effective environmental leader. Discover the power of advocacy and
              communication in influencing others and creating a ripple effect
              of change. Gain insights from experts and mentors who will guide
              you on your path as you prepare to embark on your own
              environmental journey. Get ready to unleash your potential, ignite
              your passion, and become a force to be reckoned with in the realm
              of environmental conservation. India's Young Forest Ambassador
              Program is your platform to create a lasting impact and shape a
              sustainable future.
            </p>
          )}
        </div>
      </div>

      <div className="t-main">
        <p className="t-note">Note:</p>
        <p className="t-note">
          The Introduction Module will be followed by interactive workshops,
          field visits, and mentorship sessions to deepen your knowledge and
          empower you to make a tangible difference as a Young Forest
          Ambassador.
        </p>
      </div>

      <p className="intro-am">
        Activity Module: India's Young Forest Ambassador Program
      </p>
      <div className="mod_item_div">
        <div className="mod_item_div1">
          <p className="mod-item_new">
            <span>Module 5: Fundraising for Forest Conservation</span>
            <i
              onClick={handlemodule5}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i
              onClick={handlemodule5}
              className="fa-solid fa-chevron-down fa-lg"
            ></i>
          </p>
          {mod5 && (
            <p className="mod-item1">
              In Module 5, we will explore the crucial aspect of fundraising to
              support our collective efforts in forest conservation. As Young
              Forest Ambassadors, we understand that financial resources are
              essential to implement impactful projects and initiatives. This
              module will equip you with the necessary skills and strategies to
              raise funds effectively. Your invaluable contributions and the
              resulting funds raised will be utilized for developing forests and
              restoring ecosystems of nature as part of the national mission -
              Mission Prakriti to grow 1 million hectares of forest by 2030.
            </p>
          )}
        </div>
      </div>

      {/* 


<p className='IYFA'>About IYFA 2023 :</p>
<p className='Be-india'>Be India’s Young Forest Ambassadors | Live Now | No Cost | Online</p>
<p className='intro-mod'>All that you need to know about India's Young Forest Ambassador 2023</p>
<p className='am-content'>BuzzOnEarth and India MUN, in collaboration with the UN Decade on Ecosystem Restoration (UNEP + FAO) and United Nations Framework Convention on Climate Change (UNFCCC), is proud to introduce India's Young Forest Ambassador Program (IYFA) . This program aims to empower young individuals to become ambassadors of change in their communities, specifically in the realm of environmental conservation and ecological restoration.
</p>
<p className='date-and-timeline'>Dates And Timelines :</p>
<ul className='ul-type'>
  <li>Registrations Open - 1st June 2023 | 10:00 AM</li>
  <li>Event Starting - 5th June 2023 | 11:59PM</li>
</ul>
<p className='date-and-timeline'>Eligibility:</p>
<p className='am-content'>College students from any field, as long as you are committed to work for Mother Nature, are welcome to participate.
If you are ready to make a difference in the world and want to meet the best version of yourself, then India's Young Forest Ambassador 2023 is for you! 
</p>
<p className='date-and-timeline'>College Track-</p>
<ul className='topics'>
  <li>You are eligible for this track if you:</li>
  <li>You are a college-going student (undergraduate or postgraduate) from any stream in any part of India.</li>
  <li>You are currently a full-time student</li>
  <li>You have completed 10+2 schooling or equivalent. </li>
  <li>You are enrolled in a regular or full-time course, undergraduate (UG) or postgraduate (PG), in a university/college in India</li>
  <li>You are pursuing courses approved by AICTE or UGC or 1-year management courses by business schools.</li>
  <li>Your classes have begun for the current academic year. </li>
</ul>
<p className='date-and-timeline'>Competition Structure:</p>
<p className='intro-mod'>1. Complete Module-1 at the earliest:</p>
<p className='am-content'>We are thrilled to have you join us on this transformative journey of becoming environmental leaders and catalysts for change. This introduction module will provide you with an overview of the program, its objectives, and the incredible opportunities that lie ahead.</p>
<p className='am-content'>There are 4 sub-modules in this section</p>
<p className='am-content'>Rules:</p>
<ul className='topics'>
  <li>You need to watch the videos mentioned in the course</li>
  <li>Participate in the quiz and answer the questions based on the video that you watched.</li>
  <li>Submit the answers at the earliest.</li>
  <li>Complete all 4 sub-modules. </li>
</ul>
<p className='intro-mod'>2. Taking Action: Fundraising for Forest Conservation</p>
<p className='am-content'>Rules:</p>
<ul className='topics'>
  <li>Each student needs to raise a minimum of INR 2000 for the ‘Forest Regeneration cause’.</li>
  <li>Find 5 subscribers who would subscribe INR 100 per month (annually) for the cause.</li>
  <li>Students who will complete Rules 1 & 2 will be eligible for Rewards as mentioned in the Rewards and Prizes section (except Rewards 1 & 2).</li>
  <li>Students who will raise the maximum amount will be declared the Top Performers and will be eligible for the Scholarships and Nature Trip.  </li>
  <li>The top 5 performers will be eligible for Nature Trip.  </li>
  <li>The top 10 performers will be eligible for the scholarship. </li>
</ul>
<p className='intro-mod'>Sub-Module 5: Fundraising for Forest Conservation</p>
<p className='am-content'>In Module 5, we will explore the crucial aspect of fundraising to support our collective efforts in forest conservation. As Young Forest Ambassadors, we understand that financial resources are essential to implement impactful projects and initiatives. This module will equip you with the necessary skills and strategies to raise funds effectively.</p>
<p className='date-and-timeline'>Key Topics Covered:</p>
<p className='am-content'>
Explore fundraising techniques, engage donors and sponsors, and emphasise forest conservation's importance. Learn relationship building, effective communication, and transparent reporting for long-term partnerships. Set personal fundraising goals, engage supporters, and utilize social media to inspire contributions. Prioritize ethical practices, accountability, and efficient fund utilization. Develop a comprehensive fundraising plan and secure resources for forest conservation. Unleash your fundraising potential and advocate for a greener future. Guest speakers share insights and success stories.
</p> */}
      {/* <p className='date-and-timeline'>Rewards and Prizes for India's Young Forest Ambassador Program (IYFA) for college students:</p> */}

      <h1 className="high-head">Rewards and Prizes</h1>
      <p className="sub-mod">
        (for India's Young Forest Ambassador Program for School students)
      </p>
      <div className="com-perk-eli2">
        <p>
          <span className="perk-head">
            Fully Sponsored Nature Trek:<br></br>{" "}
          </span>{" "}
          The top 5 performing participants will be chosen for a fully sponsored
          Nature Camp trip in India. This exciting opportunity allows
          participants to immerse themselves in nature, experience forest life,
          trekking in the woods, night camp, learn wildlife photography, and be
          one with the forest.
        </p>
        {/* <p><span className='perk-head'>Scholarships:<br></br> </span> Top 10 outstanding participants who demonstrate exceptional dedication, innovation, and leadership throughout the program may have the opportunity to receive scholarships or grants to support your further studies or environmental initiatives.</p> */}
        <p>
          <span className="perk-head">
            Certificate of Recognition:<br></br>{" "}
          </span>{" "}
          All participants who successfully complete the IYFA program will
          receive a certificate of recognition as a Young Forest Ambassador.
          This certificate acknowledges your commitment and contribution to
          environmental conservation and will be a valuable addition to your
          academic and professional portfolios.
        </p>
        <p>
          <span className="perk-head">
            Internship Opportunities:<br></br>{" "}
          </span>{" "}
          Select participants may be eligible for internship opportunities with
          Gaia The Earth Foundation, a partner of the UN Decade on Ecosystem
          Restoration.
        </p>
        <p>
          <span className="perk-head">
            Global Recognition:<br></br>{" "}
          </span>{" "}
          Your active engagement and impactful initiatives may be featured in
          publications, websites, and social media platforms, showcasing their
          commitment to environmental stewardship.{" "}
        </p>
        <p>
          <span className="perk-head">
            Global Networking Opportunities:<br></br>{" "}
          </span>{" "}
          You’ll also be the part of the Global UN community of
          #GenerationRestoration. Participants will have the chance to connect
          and collaborate with like-minded individuals, experts, and
          professionals in the field of environmental conservation. This
          networking can lead to valuable partnerships, mentorship
          opportunities, and future collaborations.
        </p>
        <p>
          <span className="perk-head">
            Access to Resources:<br></br>{" "}
          </span>{" "}
          IYFA participants will gain access to a wide range of educational
          resources, including learning materials, research papers, case
          studies, and toolkits related to forest conservation, sustainable
          forestry practices, and ecosystem restoration. These resources will
          enhance their knowledge and understanding of the subject matter.
        </p>
        <p>
          <span className="perk-head">
            Mentorship and Guidance:<br></br>{" "}
          </span>{" "}
          Throughout the program, participants will have access to experienced
          mentors who will provide guidance and support that can help shape your
          ideas and enhance your leadership skills.
        </p>
        <p>
          <span className="perk-head">
            Long-term Engagement:<br></br>{" "}
          </span>{" "}
          The IYFA program aims to foster a long-term engagement with the
          participants. Even after the completion of the program, participants
          may have continued access to resources, networks, and opportunities
          for further collaboration and growth in the field of environmental
          conservation.
        </p>
        <p>
          <span className="perk-head">
            Goodies:<br></br>{" "}
          </span>{" "}
          Get goodies like eco-friendly stationery and a T-shirts on
          successfully completing the IYFA program.
        </p>
      </div>
      <p className="am-content">
        Please note that the specific rewards and prizes may vary depending on
        the program's sponsors, partners, and available resources. Detailed
        information about rewards and prizes will be provided to the
        participants during the program.
      </p>

      <h1 className="high-head" style={{ borderTop: "2px solid black" }}>
        Program Certificate
      </h1>
      <div className="main-cer">
        <div className="left-cer">
          <p>
            Upon successfully completing the program, you will be
            awarded a certificate of INDIA'S YOUNG FOREST AMBASSADOR from India
            Model United Nations signed by UN dignitaries.
          </p>
          <p>
            <i>Note:</i>
            <br></br>
            <i>
              All certificate images are for illustrative purposes only and may
              be subject to change.
            </i>
          </p>
        </div>
        <div className="right-cer">
          <img
            src={tempcertificate}
            style={{ width: "100%", height: "auto" }}
          ></img>
        </div>
      </div>
      <div className="last-strip">
        <span>
          <div className="movile">
            <span>View Guidelines:</span>
            <a
              href="https://docs.google.com/document/d/1_SXjOrrVUdPqUwHkw2KoIl2g-LaRRMcL/edit?usp=sharing&ouid=109263059482739321708&rtpof=true&sd=true"
              target={"_blank"}
            >
              <button className="nor-but">IYFA Guidelines</button>
            </a>
            <a
              href="https://docs.google.com/document/d/14kSRQNqwUzG6-YpA-eNBNkB6-ssiBJeaimc9C3C4A-I/edit?usp=sharing"
              target={"_blank"}
            >
              <button className="nor-but">IYFA FAQs</button>
            </a>
          </div>
        </span>
        {!submitted && (
          <button className="big-enroll main-button" onClick={goToCourse}>
            Enroll NOW
          </button>
        )}
        {/* {submitted && <button className='big-enroll main-button' onClick={handleClick}>Payment</button>} */}
        {/* {submitted && <span><button className='big-enroll main-button' disabled onClick={() => setMod(!mod)}>Enrolled</button><a href='/event/modules'><button className='big-enroll main-button'>Go to Course</button></a></span>} */}
      </div>

      {/* <div className='certificate'>
  <div className='img-cer'><img src={banner}></img></div>
  <div className='con-cer'>
    <div>Registrations Open</div>
    <div>
        {!submitted && <button onClick={()=>setMod(!mod)}>Enroll NOW</button>}
        {submitted && <button disabled onClick={()=>setMod(!mod)}>Enrolled</button>} 
        <div><a href='https://docs.google.com/document/d/14kSRQNqwUzG6-YpA-eNBNkB6-ssiBJeaimc9C3C4A-I/edit?usp=sharing' target={'_blank'}><button>IYFA FAQ'S</button></a></div>
    </div>
  </div> */}

      {/* {mod && !submitted &&
        <div className="modal">
          <div className="modal-content">
            <div className="model_div">
              <h2>FILL IN YOUR DETAILS</h2>
              <button className='model_div_lap' onClick={() => setMod(false)}><i className="fa-solid fa-xmark fa-2xl"></i></button>
              <button className='model_div_mob' onClick={() => setMod(false)}><i className="fa-solid fa-xmark fa-lg"></i></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-row'>
                <label>
                  <span>Full Name:</span>
                  <input
                    type="text"
                    required
                    value={st_name}
                    onChange={(e) => setstName(e.target.value)}
                  />
                </label>
              </div>
              <div className='form-row'>
                <label>
                  <span>College/University Name:</span>
                  <input
                    type="text"
                    required
                    value={sch_name}
                    onChange={(e) => setSchname(e.target.value)}
                  />
                </label>
              </div>
              <div className='form-row'>
                <label>
                  <span>Year of Study:</span>
                  <input
                    type="number"
                    required
                    value={classS}
                    onChange={(e) => setClassS(e.target.value)}
                  />
                </label>
              </div>
              <div className='form-row'>
                <label>
                  <span>State:</span>
                  <input
                    type="text"
                    required
                    value={stateS}
                    onChange={(e) => setState(e.target.value)}
                  />
                </label>
              </div>
              <div className='form-row'>
                <label>
                  <span>City:</span>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
              </div>
              <div className='form-row'>
                <label>
                  <span>Email:</span>
                  <input
                    type="email"
                    required
                    value={emailS}
                    onChange={(e) => setEmailS(e.target.value)}
                  />
                </label>
              </div>
              <div className='form-row'>
                <label>
                  <span>Phone No:</span>
                  <input
                    type="number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>
              <div className='submit-div'>
                <button className='submit_event' type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      } */}

      <div className="ylp-discount-container">
        <h2 className="ylp-discount-heading">50% Discount</h2>
        <h2 className="ylp-discount-heading_2">
          India MUN affiliate school students
        </h2>
        <p className="ylp-discount-p">
          We offer students from India MUN affiliated schools to unlock a 50%
          discount on all youth programs – YLP, IYFA, and the India MUN Climate
          Conference. Please contact your school India MUN coordinator faculty
          or Principal for the same.
        </p>
      </div>

      <Footer />
    </>
  );
}

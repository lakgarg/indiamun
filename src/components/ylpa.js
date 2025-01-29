import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import left_img from "./images/INDIAMUN/logo left.webp";
import right_img from "./images/INDIAMUN/logo right.webp";
import { useAuthContext } from "./hooks/useAuthContext";
import { useFirestore } from "./hooks/useFirestore";
import { useLogout } from "./hooks/useLogout";
import "./events.css";
import "./ylpa.css";
import Footer from "./footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import tempcertificate from "./images/ylp/YLP certificate (1).webp";
import { useNavigate } from "react-router-dom";
import hero from "./images/ylp/YLP image 1 desk.webp";
import hero2 from "./images/ylp/YLP desk banner.webp";
import { useLogin } from "./hooks/useLogin";
import {
  firebaseAuth,
  storeRegisteredUsersIYFAInfo,
  storeRegisteredUsersYLPInfo,
} from "./firebase/config";
import Cookies from "js-cookie";
import Razorpay from "razorpay";

export default function Ylpa() {
  const { user } = useAuthContext();
  const [mod, setMod] = useState(false);
  const { logout } = useLogout();
  const { id } = useParams();
  const nav_to = useNavigate();
  const { login, signInWithGoogle } = useLogin();

  const [inputValue, setInputValue] = useState("");

  // firestore me ye data add
  const { addDocument, response } = useFirestore(
    "student_enrollment_young_forest_ambassdor"
  );

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

  const goToCourse = () => {
    const url = "https://earthgeeks.indiamun.org/courses/Youth-Leadership-Program-66347e4fa2ec48292c1cd88c";

    // Open the URL in a new tab
    window.open(url, "_blank");
  };



  // module show
  const [mod1, setMod1] = useState(false);
  const [mod2, setMod2] = useState(false);
  const [mod3, setMod3] = useState(false);
  const [mod4, setMod4] = useState(false);
  const [mod5, setMod5] = useState(false);
  const [mod6, setMod6] = useState(false);
  const [mod7, setMod7] = useState(false);
  const [mod8, setMod8] = useState(false);
  const [mod9, setMod9] = useState(false);

  const handlemodule1 = () => {
    setMod1(!mod1);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod6(false);
    setMod7(false);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule2 = () => {
    setMod1(false);
    setMod2(!mod2);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod6(false);
    setMod7(false);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule3 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(!mod3);
    setMod4(false);
    setMod5(false);
    setMod6(false);
    setMod7(false);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule4 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(!mod4);
    setMod5(false);
    setMod6(false);
    setMod7(false);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule5 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(!mod5);
    setMod6(false);
    setMod7(false);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule6 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod6(!mod6);
    setMod7(false);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule7 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod6(false);
    setMod7(!mod7);
    setMod8(false);
    setMod9(false);
  };
  const handlemodule8 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod6(false);
    setMod7(false);
    setMod8(!mod8);
    setMod9(false);
  };
  const handlemodule9 = () => {
    setMod1(false);
    setMod2(false);
    setMod3(false);
    setMod4(false);
    setMod5(false);
    setMod6(false);
    setMod7(false);
    setMod8(false);
    setMod9(!mod9);
  };

  const [error, setError] = useState("");

  // const handleMakeYLPPaymentx = async () => {
  //   try {
  //     const token = Cookies.get('token');
  //     console.log(`Token: ${token}`)
  //     const response = await fetch('http://localhost:5010/api/v1/payments/payment-ylp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Cookie': `token=${token}`,
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     alert(data.message);
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError('An error occurred, please try again.');
  //   }
  // };

  // const handleMakeYLPPaymentx = async(amount) => {

  //   const { data: { key } } = await axios.get("http://localhost:5010/api/v1/payments/razorpay-key")
  //   const { data: { order } } = await axios.get("http://localhost:5010/api/v1/payments/checkout")

  //   const options = {
  //     key,
  //     amount: 100,
  //     currency: "INR",
  //     name: "IndiaMUN",
  //     description: "Payment for YLP Course",
  //     order_id: order.id,
  //     callback_url: "http://localhost:5010/api/v1/payments/paymentverification",
  //     theme: {
  //       "color": "#121212"
  //     },
  //   }
  //   const razor = new window.Razorpay(options);
  //   razor.open()
  // }

  // const handleMakeYLPPayment = async (amount) => {
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
  //     // const { data: { order } } = await axios.post("http://localhost:5010/api/v1/payments/payment-iyfa", { token }, { headers });
  //     const { data } = await axios.post("http://localhost:5010/api/v1/payments/payment-ylp", { token }, { headers });

  //     console.log("data:" ,data)

  //     const options = {
  //       key,
  //       amount: 100,
  //       currency: "INR",
  //       name: "IndiaMUN",
  //       description: "Payment for YLP Course",
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

  // useEffect(() => {
  // Check if enrollment status exists in local storage
  // const storedEnrollmentStatus = localStorage.getItem('enrollmentStatus');

  // if (storedEnrollmentStatus) {
  //   setSubmitted(JSON.parse(storedEnrollmentStatus));
  // }

  // Retrieve enrollment status from Firestore
  // projectFirestore.collection('student_enrollment_young_forest_ambassdor').get().then((doc) => {
  //   if (doc.exists) {
  //     const uid = doc.uid;
  //     setSubmitted(true);
  //     console.log('Document uid:', uid);
  //     console.log("i entered this block")
  //   }
  //   else {
  //     console.log("doesnt exist")
  //   }
  //   if (doc.empty) {
  //     console.log("no data found")
  //     setSubmitted(false)
  //   }
  //   else {
  //     doc.docs.forEach(doc => {
  //       if ((doc.data().uid) === projectAuth.currentUser.uid) {
  //         setSubmitted(true)
  //         // nav_to('/event/modules')
  //         return
  //       }
  //       // console.log((doc.data().uid))
  //       // console.log(projectAuth.currentUser.uid)
  //     })
  //   }
  //   // console.log(doc)
  // })
  //   .catch((error) => {
  //     console.error('Error retrieving enrollment status:', error);
  //   });
  // }, []);

  // get data from firebase

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data
    addDocument({
      uid: user.uid,
      Student_Name: st_name,
      College_name: sch_name,
      Year_of_study: classS,
      State: stateS,
      City: city,
      Phone_No: phone,
      Email: emailS,
      Program_of_study: program_of_study,
    }).then(() => {
      setSubmitted(true);
      // localStorage.setItem('enrollmentStatus', JSON.stringify(true));
    });

    setMod(!mod);
  };

  return (
    <>
      <div className="top_comp">
        <img className="left_img" src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className="right_img" src={right_img} alt="" />
      </div>

      <Navbar />

      <div className="part_d1_ylp">
        <h1 className="head-am2_ylp">YOUTH LEADERSHIP PROGRAM</h1>
        {/* <p>( Registrations Open )</p> */}
      </div>
      <p className="con-mind2_ylp">
        India’s most powerful Leadership Program for the YOUTH
      </p>

      <div className="forest-am2">
        <div className="ylp_img">
          <img src={hero} alt="hero" />
          {/* <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><button>SEE OUR WORK AREA</button></a> */}
        </div>
        {/* <div className="stat_banner_ylp">
          <img src={hero2} className="hero2" />
        </div> */}
      </div>

      {/* <div className="ylp_line">
        <p>We believe in unlocking the boundless potential within every young person. Our flagship initiative, the Youth Leadership Program, is not just a program; it's a transformative journey designed to empower young leaders with the skills, mindset, and purpose needed to shape a better future</p>
      </div> */}

      <h1 className="proover">PROGRAM OVERVIEW:</h1>

      <div className="ylpa-overview-container">
        <p className="ylpa-overview-text-2">
          We believe in unlocking the boundless potential within every young
          person. Our flagship initiative, the Youth Leadership Program, is not
          just a program; it's a transformative journey designed to empower
          young leaders with the skills, mindset, and purpose needed to shape a
          better future.
        </p>
      </div>

      <div className="am-go"></div>

      <h1 className="high-head">KEY TOPICS YOU WILL LEARN IN THIS PROGRAM</h1>
      <div className="key-ler">
        <div className="key-item">
          <p>Self-Awareness and Emotional Intelligence</p>
        </div>
        <div className="key-item">
          <p>Goal Setting and Time Management</p>
        </div>
        <div className="key-item">
          <p>Effective Communication Skills</p>
        </div>
        <div className="key-item">
          <p>Team Dynamics and Collaboration</p>
        </div>
        <div className="key-item">
          <p>Conflict Resolution and Negotiation</p>
        </div>
        <div className="key-item">
          <p>Critical Thinking and Problem Solving</p>
        </div>
        <div className="key-item">
          <p>Ethical Leadership</p>
        </div>
        <div className="key-item">
          <p>Risk-Taking and Resilience</p>
        </div>
        <div className="key-item">
          <p>Leadership in Action</p>
        </div>
      </div>

      <h1 className="high-head">Program Modules</h1>
      <p className="sub-mod">(8 MODULES)</p>
      {/* <p className='intro-am'>Introduction Module: India's Young Forest Ambassador Program</p> */}
      <div className="mod_item_div">
        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule1}>
            <span>Module 1: Self-Discovery and Purpose Clarity</span>
            <i
              onClick={handlemodule1}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod1 && (
            <p className="mod-item1">
              Discover your unique strengths, values, and purpose. <br />
              Craft a personal mission statement that aligns with your
              aspirations.{" "}
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule2}>
            <span>Module 2: Emotional Intelligence and Self-Mastery</span>
            <i
              onClick={handlemodule2}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod2 && (
            <p className="mod-item1">
              Develop emotional intelligence for effective leadership. <br />{" "}
              Master communication and conflict resolution skills.
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule3}>
            <span>Module 3: Goal Setting and Time Management</span>
            <i
              onClick={handlemodule3}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod3 && (
            <p className="mod-item1">
              Set ambitious yet achievable goals for personal and professional
              growth. <br /> Master time management and overcome procrastination{" "}
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule4}>
            <span>Module 4: Leveraging Technology for leadership</span>
            <i
              onClick={handlemodule4}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod4 && (
            <p className="mod-item1">
              Leverage technology (including AI) to redefine the way we lead,
              work, communicate and live. <br /> Data backed decision making,
              continuous learning, innovation and adaptation.
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule5}>
            <span>Module 5: Sustainability Leadership and Climate Action</span>
            <i
              onClick={handlemodule5}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod5 && (
            <p className="mod-item1">
              Understand environmental challenges, climate change and SDGs.{" "}
              <br /> Learn to apply sustainability and climate change
              understanding in your chosen pathways.
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule6}>
            <span>Module 6: Career Development and Networking</span>
            <i
              onClick={handlemodule6}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod6 && (
            <p className="mod-item1">
              Explore diverse career paths aligned with your interests and
              gifts. <br /> Build a network through effective relationships and
              mentorships.
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule7}>
            <span>Module 7: Developing an entrepreneurial mindset</span>
            <i
              onClick={handlemodule7}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod7 && (
            <p className="mod-item1">
              Creative thinking and innovative problem-solving for identifying
              opportunities. <br />
              Cultivating a resilient mindset that embraces risks while managing
              expectations.
            </p>
          )}
        </div>

        <div className="mod_item_div1">
          <p className="mod-item" onClick={handlemodule8}>
            <span>Module 8: Drawing inspiration from nature</span>
            <i
              onClick={handlemodule8}
              className="fa-solid fa-chevron-down fa-2xl"
            ></i>
            <i className="fa-solid fa-chevron-down fa-lg"></i>
          </p>
          {mod8 && (
            <p className="mod-item1">
              Learning from nature to lead with adaptability, flexibility and
              balance. <br />
              Recognizing the power of collaborative, interconnected leadership
              for effective outcomes.
            </p>
          )}
        </div>

        
      </div>

      <div className="am-go"></div>

      <h1 className="high-head">WHAT YOU WILL GAIN</h1>
      {/* <p className='sub-mod'>(for India's Young Forest Ambassador Program for college students)</p> */}
      <div className="com-perk-eli2">
        <p>
          <span className="perk-head">
            Confident Leadership Presence:<br></br>{" "}
          </span>{" "}
          Outcome: Participants develop a confident and authentic leadership
          presence. <br /> Impact: They can inspire and influence others with
          their clarity of purpose and self-assured communication.
        </p>
        <p>
          <span className="perk-head">
            Global Citizenship Mindset:<br></br>{" "}
          </span>{" "}
          Outcome: Participants cultivate a global citizenship mindset. <br />{" "}
          Impact: They understand their role in a connected world, appreciating
          diversity, and addressing global challenges with empathy.
        </p>

        <p>
          <span className="perk-head">
            Holistic Self-Discovery:<br></br>{" "}
          </span>{" "}
          Outcome: Participants undergo a holistic self-discovery journey.{" "}
          <br />
          Impact: They gain clarity on personal values, strengths, and purpose,
          fostering a strong foundation for effective leadership.
        </p>

        <p>
          <span className="perk-head">
            Effective Communication Skills:
            <br></br>{" "}
          </span>{" "}
          Outcome: Participants master effective communication and public
          speaking. <br />
          Impact: They articulate ideas confidently, whether addressing a small
          team or a larger audience, enhancing their influence.
        </p>

        <p>
          <span className="perk-head">
            Practical Goal Setting and Time Management:<br></br>{" "}
          </span>{" "}
          Outcome: Participants acquire practical goal-setting and time
          management skills. <br />
          Impact: They learn to set and achieve ambitious yet realistic goals,
          fostering a proactive and results-oriented mindset.
        </p>


        <p>
          <span className="perk-head">
            Network and Mentorship Connections:
            <br></br>{" "}
          </span>{" "}
          Outcome: Participants build a valuable network and engage in
          mentorship. <br />
          Impact: They establish connections with like-minded peers and
          experienced mentors, enhancing their personal and professional growth.
        </p>

        <p>
          <span className="perk-head">
            Lead the climate action movement:
            <br></br>{" "}
          </span>{" "}
          Outcome: Participants embrace sustainable leadership practices. <br />
          Impact: They understand the importance of ethical and sustainable
          leadership, contributing to long-term positive impacts on the
          environment and society.
        </p>

        <p>
          <span className="perk-head">
            Become a YLP graduate:
            <br></br>{" "}
          </span>{" "}
          Outcome: Participants unleash the leader within them. <br />
          Impact: They apply their skills in a real-world project, gaining
          confidence and showcasing their ability to drive meaningful change.
        </p>
      </div>

      <h1 className="high-head" style={{ borderTop: "2px solid black" }}>
        Program Certificate
      </h1>
      <div className="main-cer">
        <div className="left-cer">
          <p>
            Upon successfully completing the program, you will be
            awarded a certificate of Youth Leadership Program from India Model
            United Nations signed by UN dignitaries.
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
      {/* <div className='last-strip'>
        <span>
          <div className='movile'>
            <span>View Guidelines:</span>
            <a href='https://docs.google.com/document/d/1_SXjOrrVUdPqUwHkw2KoIl2g-LaRRMcL/edit?usp=sharing&ouid=109263059482739321708&rtpof=true&sd=true' target={'_blank'}><button className='nor-but'>IYFA Guidelines</button></a>
            <a href='https://docs.google.com/document/d/14kSRQNqwUzG6-YpA-eNBNkB6-ssiBJeaimc9C3C4A-I/edit?usp=sharing' target={'_blank'}>
              <button className='nor-but'>IYFA FAQs</button>
            </a>
          </div>
        </span>{!submitted && <button className='big-enroll main-button' onClick={() => setMod(!mod)}>Enroll NOW</button>}
        {submitted && <span><button className='big-enroll main-button' disabled onClick={() => setMod(!mod)}>Enrolled</button><a href='/event/modules'><button className='big-enroll main-button'>Go to Course</button></a></span>}
      </div> */}

      {/* <div className="am-go"></div>

      <h2 className="ylp-registeration-heading">
        We Aspire To Build A World Class School <br /> For Entrepreneurship
      </h2> */}
      <div className="ylp-registeration-container">
        {/* <h2 className="ylp-registeration-text">
          Ready To Accelerate Your Scale Journey?
        </h2> */}
        {/* <button className="ylp-registeration-btn" onClick={() => handleMakeYLPPayment()}>Enroll Now</button> */}
        <button className="ylp-registeration-btn" onClick={goToCourse}>
          Enroll Now
        </button>
      </div>
      {/* <div className='ylp-registeration-note'>
        <p><i>Note:</i><br></br><i>We are delighted to inform you that the Youth Leadership Program (YLP) is scheduled to commence on January 12th, 2024 on National Youth Day. This is a self-paced program, and you will have  access to the program for a duration of six months.  <br /><br />

        Upon successful registration, a confirmation email will be sent to your registered email ID with India MUN. To seamlessly access the program modules, please ensure that you log in using the same email ID on India MUN. The modules will be visible in your India MUN Profile starting from January 12, 2024.</i></p>
      </div> */}

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

      {/* <div className="am-go"></div>
      <div className="ending-ylp">
        <p><i>Registrations Opening on 6th Dec, 2023</i></p>
      </div> */}

      {/* </div> */}
      <Footer />
    </>
  );
}

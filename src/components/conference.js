import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "./conference.css";
import left_img from "./images/INDIAMUN/logo left.webp";
import right_img from "./images/INDIAMUN/logo right.webp";
import left_image from "./images/INDIAMUN/left_image.webp";
import right_image from "./images/INDIAMUN/right_image.webp";
import indiaMunLogo from "./images/INDIAMUN/india mun blue logo.png";
import Footer from "./footer";
import { useAuthContext } from "./hooks/useAuthContext";
import { useFirestore } from "./hooks/useFirestore";
import { useLogout } from "./hooks/useLogout";
import { useParams } from "react-router-dom";
import indiaMunRecap1 from "./images/conference/1 (1).png";
import indiaMunRecap2 from "./images/conference/2 (1).png";
import indiaMunRecap3 from "./images/conference/3 (1).png";
import indiaMunRecap4 from "./images/conference/4 (1).png";
import indiaMunRecap5 from "./images/conference/5 (1).png";
import indiaMunRecap6 from "./images/conference/6 (1).png";
import indiaMunRecap7 from "./images/conference/7 (1).png";
import indiaMunRecap8 from "./images/conference/8 (1).png";
import indiaMunRecap9 from "./images/conference/9.png";
import indiaMunRecap10 from "./images/conference/10.png";
import indiaMunRecap11 from "./images/conference/11.png";
import indiaMunRecap12 from "./images/conference/12.png";
import indiaMunRecap13 from "./images/conference/13.png";
import indiaMunRecap14 from "./images/conference/14.png";
import indiaMunRecap15 from "./images/conference/15.png";
import indiaMunNewRecap1 from "./images/conference/2021 1.webp";
import indiaMunNewRecap2 from "./images/conference/2021 2.webp";
import indiaMunNewRecap3 from "./images/conference/2021 3.webp";
import indiaMunNewRecap4 from "./images/conference/2021 4.webp";
import indiaMunNewRecap5 from "./images/conference/2021 5.webp";
import indiaMunNewRecap6 from "./images/conference/2021 6.webp";
import indiaMunNewRecap7 from "./images/conference/2021 7.webp";
import indiaMunNewRecap8 from "./images/conference/2021 8.webp";
import indiaMunNewRecap9 from "./images/conference/2021 9.webp";
import indiaMunNewRecap10 from "./images/conference/2021 10.webp";
import indiaMunNewRecap11 from "./images/conference/2021 11.webp";
import indiaMunNewRecap12 from "./images/conference/2021 12.webp";
import indiaMunNewRecap13 from "./images/conference/2021 13.webp";
import indiaMunNewRecap14 from "./images/conference/2021 14.webp";
import indiaMunNewRecap15 from "./images/conference/2021 15.webp";
import imccImg from "./images/conference/India MUN dates.png";
import July27 from "./images/conference/agenda day 1.webp";
import July28 from "./images/conference/Agedna day 2.webp";
import owaisSamrad from './images/conference/owais samrad.png';
import gayatriChauhan from './images/conference/gayatri chauhan.webp';
import hero from "./images/conference/Conf image.webp";
import Agenda from "./images/conference/Agenda.webp";
import fest from "./images/conference/fest.webp";
import conf from "./images/conference/Conf open.webp";
import imcc_certificate from "./images/conference/MUN conf Certificate.webp";
import { useLogin } from "./hooks/useLogin";
import {
  firebaseAuth,
  storeRegisteredUsersIMCCInfo,
  storeRegisteredUsersIYFAInfo,
} from "./firebase/config";

export default function Conference() {
  const { user } = useAuthContext();
  const { login, signInWithGoogle } = useLogin();

  const goToRazorpayPayment = () => {
    const url = "https://rzp.io/l/vzWSsYi";

    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  /* const handleClick = async () => {
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
            console.log("User not found!");
          }
        });
      } catch (err) {
        console.log(err);
      }
      try {
        // userlogin()
        goToRazorpayPayment();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // userlogin()
        const { uid, displayName, email } = user;
        storeRegisteredUsersIMCCInfo(uid, displayName, email);
        goToRazorpayPayment();
      } catch (error) {
        console.log(error);
      }
    }
  }; */

  return (
    <>
      <div className="top_comp">
        <img className="left_img" src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className="right_img" src={right_img} alt="" />
      </div>

      <Navbar />

      <div className="conference-hero">
        <img className="indiamun-logo" src={indiaMunLogo} alt="indiaMunLogo" />
        <h2 className="conference-heading">
          INDIA MUN NATIONAL CONFERENCE 2024
        </h2>
        <p className="conference-p">
          Join us at the India MUN National Conference 2024, where passion meets
          purpose, and the youth lead the charge for climate action. This
          flagship event gathers visionaries, activists, and change-makers to
          drive meaningful discussions and innovative solutions.
        </p>
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
        {/* <div className="aff-hero">
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
        </div> */}

        <div className="imcc-img-container">
          <img src={imccImg} alt="imccImg" />
        </div>

        <div className="welcome-letter-main-container">
          <div className="welcome-letter-sub-container">
            <div className="welcome-letter-center">
              <h3 className="welcome-letter-title">WELCOME LETTER BY THE SECRETARY-GENERAL, INDIAMUN 2024</h3>
              <div className="welcome-letter-img">
                <img src={owaisSamrad} alt="owaisSamrad" />
              </div>
            </div>
            <p className="welcome-letter-p">
              <span className="bold-span">Dear Delegates, Advisors, and Honored Guests,</span><br /><br />

              It is with immense pride and great pleasure that I welcome you to the National India Model United Nations Conference 2024. As the Secretary-General of India MUN 2024, I am thrilled to see the convergence of bright young minds from across our diverse nation, united by a common purpose: to address and take action on the critical issues surrounding climate change and sustainability.<br /><br />

              India MUN stands as the only pan-India Model United Nations conference dedicated to moving beyond activism and towards tangible action. This year, our theme, "Loss and Damage Fund: Addressing Climate Justice through Financial Support from Developed to Developing Countries" and "Climate Innovations: Exploring Innovative Solutions that Empower Communities to Build Resilience against Climate Change Effects," underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference. Over the next two days, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.<br /><br />

              Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow. As you navigate through various committees, discussing topics that range from renewable energy and sustainable development to climate justice and conservation, I encourage you to think creatively, challenge assumptions, and work collaboratively. The world needs passionate, informed, and proactive individuals like you to lead the charge against climate change.<br /><br />

              To our esteemed advisors, teachers, principles and parents, thank you for supporting and guiding these young delegates. Your mentorship and insights are invaluable in shaping the next generation of leaders.
              As we embark on this journey together, let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.<br /><br />

              Welcome to the National India MUN Conference 2024. Let us make these days memorable and impactful.<br /><br />

              Yours sincerely,<br /><br />

              <span className="bold-span">
                Ovais Sarmad<br />
                Secretary-General<br />
                India Model United Nations 2024
              </span>
            </p>
          </div>
          <div className="welcome-letter-sub-container">
            <div className="welcome-letter-center">
              <h3 className="welcome-letter-title">WELCOME LETTER BY THE PRESIDENT, INDIAMUN</h3>
              <div className="welcome-letter-img">
                <img src={gayatriChauhan} alt="gayatriChauhan" />
              </div>
            </div>
            <p className="welcome-letter-p">
              <span className="bold-span">Dear Young Leaders, Esteemed Educators, and Honored Guests,</span><br /><br />

              It is with immense joy and great anticipation that I welcome you to the National India Model United Nations Conference 2024. As the Founder and Executive President of India MUN, I am deeply inspired by the bright young minds gathering from all corners of our diverse nation. Your enthusiasm and dedication to addressing and taking action on the critical issues surrounding climate change and sustainability fill me with hope and confidence for our future.<br /><br />

              India is a young country, with more than 50% of our population under the age of 25. This youthful demographic is our greatest asset. I firmly believe in the power of youth to drive change, innovate, and lead with passion and purpose. The energy, creativity, and resilience that you bring to the table are exactly what we need to tackle the pressing challenges of our time.<br /><br />

              I envision the youth of our country as torchbearers in solving global challenges. Instead of adopting a victim mindset, I urge you to embrace an action mindset. Rise above the challenges not only for your own good but for the betterment of society, nature, and our planet at large. Your participation in this conference is a testament to your dedication to the cause and your willingness to step up as leaders of tomorrow.<br /><br />

              Our theme this year, "Climate Action and Innovation: Financing a Sustainable Future," underscores our commitment to not only raising awareness but also fostering real-world solutions and initiatives that can make a difference. Over the two days on 27th and 28th July 2024, you will engage in rigorous debates, collaborate on innovative ideas, and develop resolutions that can influence policy and drive meaningful change.<br /><br />

              Our focus this year is twofold:<br /><br />

              1. Loss and Damage Fund: Addressing the financial support from developed to developing countries for climate impacts.<br />
              2. Climate Innovations: Exploring innovative solutions that empower communities to build resilience against climate change effects.<br /><br />

              You will be participating in discussions within our carefully structured councils and committees:<br /><br />

              • Loss and Damage Fund Council:<br />
              &nbsp;&nbsp;  ○ UNFCCC: Financing Mechanisms for the Loss and Damage Fund<br />
              &nbsp;&nbsp;  ○ IPCC: Scientific Assessments and Reports on Climate Impacts<br />
              &nbsp;&nbsp;  ○ GCF: Allocation and Distribution of Funds to Vulnerable Nations<br />
              • Climate Innovation Council:<br />
              &nbsp;&nbsp;  ○ UNEP: Promoting Innovative Climate Technologies<br />
              &nbsp;&nbsp;  ○ World Bank Group: Financing Climate Innovation Projects<br />
              &nbsp;&nbsp;  ○ UNDP: Empowering Communities through Climate Innovations<br /><br />

              To our esteemed advisors and guests, thank you for supporting and guiding these young delegates. Your mentorship and insights are invaluable in shaping the next generation of leaders.<br /><br />

              As we move closer to the conference dates, let us remember that every discussion, every debate, and every decision made here has the potential to impact our planet positively. Let us be bold in our aspirations, decisive in our actions, and unwavering in our commitment to a sustainable future.<br /><br />

              Welcome to the National India MUN Conference 2024. Let us make these days memorable and impactful.<br /><br />

              Yours sincerely,<br /><br />
              <span className="bold-span">
                Gayatri Chauhan<br />
                Founder and Executive President<br />
                India Model United Nations<br />
              </span>

            </p>
          </div>
        </div>

        <div className="agenda-main-container">
          <h1 className="high-head">AGENDA</h1>
          <p className="pro-head">
            India MUN National Climate Conference 2024
          </p>
          <div className="agenda-img-container">
            <img src={Agenda} alt="hero" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="high-head"></h1>
      </div>



      <div className="aff-hero">
        <div className="aff-hero-right">
          <div className="aff-hero-right-img">
            <h3 className="aff-hero-subheading">27th July, 2024</h3>
            <img src={July27} alt="GSCAPlaque" />
          </div>
        </div>
        <div className="aff-hero-right">
          <div className="aff-hero-right-img">
            <h3 className="aff-hero-subheading">28th July, 2024</h3>
            <img src={July28} alt="GSCAPlaque" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="high-head"></h1>
      </div>

      <div className="imcc-registeration-container">
        <h2 className="imcc-registeration-heading">
          Get READY to redefine IMPACT
        </h2>
        <h2 className="imcc-registeration-text">
          India MUN Climate Conference 2024 is here!
        </h2>
        <p className="more-than-an-event">
          The only MUN which is India’s MUN and represents India internationally
        </p>
        <button className="imcc-registeration-btn" onClick={() => window.open('https://www.youtube.com/watch?v=zQNjt7ZSox8', '_blank')}>
          Concluded - View Results
        </button>
        <h2 className="imcc-registeration-text">
          Conference Dates: 27th - 28th July, 2024
        </h2>
      </div>

      <div className="am-go"></div>

      <div>
        <h1 className="high-head"></h1>
      </div>
      <h1 className="high-head">KEY HIGHLIGHTS:</h1>
      <div className="pro-heig">
        <div className="pro-item">
          <p className="pro-head">Youth-Led Dialogues</p>
          <p className="pro-des">
            Engage in thought-provoking discussions led by young leaders driving
            climate action globally.
          </p>
        </div>
        <div className="pro-item">
          <p className="pro-head">Innovative Solutions Showcase</p>
          <p className="pro-des">
            Witness groundbreaking initiatives and solutions addressing pressing
            climate challenges.
          </p>
        </div>
        <div className="pro-item">
          <p className="pro-head">Global Networking</p>
          <p className="pro-des">
            Connect with like-minded individuals, experts, and organizations
            committed to a sustainable future
          </p>
        </div>
        <div className="pro-item">
          <p className="pro-head">Inspiring Keynotes</p>
          <p className="pro-des">
            Gain insights from influential speakers shaping the discourse on
            climate change and environmental conservation.
          </p>
        </div>
        <div className="pro-item">
          <p className="pro-head">Interactive Workshops</p>
          <p className="pro-des">
            Participate in hands-on workshops, equipping yourself with
            actionable knowledge and skills.
          </p>
        </div>
        <div className="pro-item">
          <p className="pro-head">Youth Awards Ceremony</p>
          <p className="pro-des">
            Celebrate and recognize outstanding contributions by young
            individuals in the field of climate action.
          </p>
        </div>
      </div>

      {/* <div className="am-go"></div> */}

      <div className="imcc-invitation">
        <p className="conference-invitation">
          This is not just a conference; it's an invitation to be part of
          something bigger. Connect with us and be the change.
        </p>
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

      <h1 className="high-head">PROGRAM CERTIFICATE</h1>
      <div className="main-cer">
        <div className="left-cer">
          <p>
            Upon completing the program you will be awarded a certificate of
            INDIA MUN CLIMATE CONFERENCE from India Model United Nations signed
            by UN dignitaries.
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
            src={imcc_certificate}
            style={{ width: "100%", height: "auto" }}
          ></img>
        </div>
      </div>

      {/* <div className="am-go"></div> */}

      {/* <h2 className="imcc-registeration-heading">Reserve your slot now!</h2>
      <p className="more-than-an-event">
        The only MUN which is India’s MUN and represents India internationally
      </p>
      <div className="imcc-registeration-container">
        <button className="imcc-registeration-btn" onClick={goToRazorpayPayment}>
          Enroll Now
        </button>
      </div>
      <h2 className="imcc-registeration-text">
        27th-28th July, 2024
      </h2> */}

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
  );
}

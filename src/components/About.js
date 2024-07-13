import React from 'react'
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import './about.css'
import oct from './images/About/rocket-1206-1-1.webp'
import target from './images/About/target-and-goal-2853.webp'
import focus from './images/About/global-warming-12094.webp'
import unit from './images/About/user-network-297.webp'
import buzzi from './images/logos strip/buzzon copy.webp'
import giaa from './images/logos strip/gaia copy.webp'
import end_img_about from './images/About/about us 2.webp'
import Footer from './footer'
import vision from './images/About/Abouts us desk 1.webp'
import visionMobile from './images/About/About us mob 1.webp'
import mission from './images/About/about us desk 2 .webp'
import missionMobile from './images/About/about us mob 2 (1).webp'

export default function About() {
  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>
      <Navbar />

      <h2 className='ab'>ABOUT INDIA MUN</h2>
      <div className="main-about-imgs">
        <img className='vision-about desktop-img' src={vision} alt="vision" />
        <img className='mission-about desktop-img' src={mission} alt="mission" />

        {/* Mobile view */}
        <img className='vision-about mobile-img' src={visionMobile} alt="vision" />
        <img className='mission-about mobile-img' src={missionMobile} alt="mission" />
      </div>


      <div className="about-values">
        <div className="about-values-title-container">
          <h2 className="about-values-title">Values</h2>
          <div className="about-values-title-underline"></div>
        </div>
        <div className="about-values-points-container">
          <div className="about-values-point">
            <div className="about-values-icon">
              <p><i className="fa-solid fa-people-group" /></p>
            </div>
            <div className="about-values-text">
              <p><span>Youth Empowerment: </span>Placing the empowerment of young individuals at the forefront, encouraging leadership, innovation, and proactive engagement in climate action.</p>
            </div>
          </div>

          <div className="about-values-point">
            <div className="about-values-icon">
              <p><i className="fa-solid fa-hand-fist" /></p>
            </div>
            <div className="about-values-text">
              <p><span>Sustainability Commitment: </span>Integrating sustainable practices into all aspects of our work, fostering environmental
                responsibility, and promoting a culture of eco-consciousness.
              </p>
            </div>
          </div>

          <div className="about-values-point">
            <div className="about-values-icon">
              <p><i className="fa-solid fa-globe" /></p>
            </div>
            <div className="about-values-text">
              <p><span>Global Collaboration: </span>Prioritizing partnerships and collaborations on a global scale, creating a diverse and inclusive
                network dedicated to addressing climate challenges collectively.</p>
            </div>
          </div>

          <div className="about-values-point">
            <div className="about-values-icon">
              <p><i className="fa-solid fa-heart" /></p>
            </div>
            <div className="about-values-text">
              <p><span>Integrity and Transparency: </span>Upholding the highest ethical standards, ensuring transparency in organizational
                activities, and fostering trust within the community.</p>
            </div>
          </div>

          <div className="about-values-point">
            <div className="about-values-icon">
              <p><i className="fa-solid fa-star" /></p>
            </div>
            <div className="about-values-text">
              <p><span>Educational Excellence: </span>Striving for excellence in climate education, providing impactful learning experiences that
                equip individuals with the knowledge and skills needed for effective climate action.
              </p>
            </div>
          </div>

          <div className="about-values-point">
            <div className="about-values-icon">
              <p><i className="fa-solid fa-lightbulb" /></p>
            </div>
            <div className="about-values-text">
              <p><span>Innovation and Adaptability: </span>Encouraging innovative solutions and an adaptive mindset to address evolving
                challenges in the realm of climate change.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='read'>
        <p>Join us in creating a legacy of positive change!</p>
      </div>
      <div className='more'>
        <div className='mored'>
          <img src={oct} alt='oct' />
          <h4>October 24</h4>
          <p>India MUN Launch Day</p>
        </div>
        <div className='mored'>
          <img src={target} alt='target' />
          <h4>Goals</h4>
          <p>Set by UNFCCC and UNEP</p>
        </div>
        <div className='mored'>
          <img src={focus} alt='focus' />
          <h4>Focusing</h4>
          <p>On Climate Change</p>
        </div>
        <div className='mored'>
          <img src={unit} alt='unit' />
          <h4>Uniting</h4>
          <p>India's Youth for Climate</p>
        </div>
      </div>

      {/* <div className='sus-eco'>
        <h1>Embedding the Youth into the Sustainability Ecosystem</h1>
        <p>India MUN seeks to increase awareness on Sustainable Development Goals (SDGs) and fosters students’ innate creativity and passion for finding innovative solutions to climate change in particular.</p>
        <p>Through simulated interactions and competitions, students and delegates will grow personally, socially, and academically, opening their eyes to the environmental, social, and governance challenges in India, and by extension, the entire world.</p>
        <p>Specifically, India MUN will provide students with the inspiration, networks, and tools for turning their passion into action at the community level.</p>
      </div> */}
      {/* <div className="scrolling-div">
        <div className="content">
        </div>
      </div> */}
      {/* <div className='voice'>
        <p><span><i className="fa-solid fa-quote-left fa-lg"></i></span> We need your voice, your support, and your active involvement for a climate-resilient India. Let us help you share your ideas for climate action to the world.</p>
      </div> */}
      <div className='wh-youth'>
        <div className='wh-youth-div'>
          <h1>WHAT CAN YOU(TH) DO?</h1>
          <p>With 360 million young people, India is the youngest country in the world Therefore, in the coming years, it will produce more leaders than any other country Climate change, which the IPCC [Intergovernmental Panel on Climate Change] says has intensified, spread and in some cases, caused irreversible damage – will impact the youth and their future generations the most. </p>
          <p>Global bodies have not been able to move the needle as yet.</p>
          <p>Every small step taken by a large percentage of India’s youth, could have an incremental impact!</p>
        </div>
      </div>
      <div className='bid_i'>
        <p>THINK ACT COLLABORATE LEAD CHANGE</p>
        <img src={end_img_about} alt='end_img_about' />
      </div>
      <p className='founding'>FOUNDING PARTNERS</p>
      <p>India MUN is a joint initiative of <b ><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://buzzonearth.com/' target={'_blank'}>BuzzOnEarth</a></b>  and <b><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://gaiatheearthfoundation.org/' target={'_blank'}>Gaia The Earth Foundation</a></b>, the organizations that are committed to<br></br> sustainability and regeneration</p>

      {/* <img className="founding_p" src={end_logos}  alt=""/> */}
      <div className='img_end' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', margin: 'auto', paddingBottom: '30px' }}>
        <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><img src={giaa} alt="" /></a>
        <a href='https://buzzonearth.com/' target={'_blank'}><img src={buzzi} alt="" /></a>
      </div>
      {/* <div className='footer' >
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

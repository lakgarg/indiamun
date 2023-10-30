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

export default function About() {
  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>
      <Navbar />
      <h2 className='ab'>ABOUT US</h2>
      <p className='ap'><span className='text-bold'>About India MUN</span><br />

        Welcome to India MUN, where youth leadership meets climate action. Launched on October 24, 2020, on International UN Day, our initiative is in perfect sync with the UN Decade of Action from 2020 to 2030. At India MUN, we are on a mission to support the goals set by the United Nations Framework Convention on Climate Change (UNFCCC) and the United Nations Environment Programme (UNEP). We believe in harnessing the collective power of the largest youth constituency in the world to transform them into a dynamic network of future sustainability leaders.
        <br /><br />

        <span className='text-bold'>Our Vision</span>
        <br />
        India MUN is a joint initiative of Gaia The Earth Foundation and BuzzOnEarth Youth. We proudly partner with the UN Decade on Ecosystem Restoration, a collaborative effort between UNEP and UNFCCC. As the eminent global institution dedicated to uniting and empowering young students for climate action, we are pioneering change in India's educational landscape.
        <br /><br />

        <span className='text-bold'>Our Unique Offering</span>
        <br />
        India MUN is not just another Model United Nations; we are the country's first climate-themed MUN. Our platform is designed to immerse student delegates in the United Nations' crucial efforts to mitigate climate change. Here, they don't just discuss global challenges; they actively contribute to solutions.
        <br /><br />

        <span className='text-bold'>Transforming Activism into Action</span>
        <br />
        We are firm believers in transforming activism into action. Our climate-positive programs, competitions, and events are carefully curated to empower students – our future sustainability leaders. We provide a space where they can brainstorm innovative climate actions and connect with like-minded peers who share their passion for our planet.
        <br /><br />
        <span className='text-bold'>Join the Climate Action Movement</span>
        <br />
        At India MUN, we invite you to join the climate action movement. Together, we can drive positive change, build a sustainable future, and inspire generations to come. We believe that every student has the potential to be a catalyst for change, and we are here to support and empower them on this transformative journey.
        <br /><br />
        <span className='text-bold'>Our Commitment</span>
        <br />
        Our commitment to fostering climate leadership, facilitating collaboration, and driving meaningful action is unwavering. As we move forward in the UN Decade of Action, we are excited to embark on this transformative journey with you.
      </p>
      <div className='read'>
        <p>Join us today and be a part of India MUN, where young minds shape the future of our planet. Together, we can make a world of difference.</p>
      </div>
      <div className='more'>
        <div className='mored'>
          <img src={oct} />
          <h4>October 24</h4>
          <p>India MUN Launch Day</p>
        </div>
        <div className='mored'>
          <img src={target} />
          <h4>Goals</h4>
          <p>Set by UNFCCC and UNEP</p>
        </div>
        <div className='mored'>
          <img src={focus} />
          <h4>Focusing</h4>
          <p>On Climate Change</p>
        </div>
        <div className='mored'>
          <img src={unit} />
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
        <p><span><i class="fa-solid fa-quote-left fa-lg"></i></span> We need your voice, your support, and your active involvement for a climate-resilient India. Let us help you share your ideas for climate action to the world.</p>
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
        <img src={end_img_about} />
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
            <a href='https://www.instagram.com/buzzonearth/' target={'_blank'}><i class="fa-brands fa-instagram"></i></a>
            <a href='https://twitter.com/BuzzOnEarth' target={'_blank'}><i class="fa-brands fa-twitter"></i></a>
            <a href='https://www.facebook.com/buzzonearth/' target={'_blank'}><i class="fa-brands fa-facebook"></i></a>
            <a href='https://www.youtube.com/@buzzonearth2959' target={'_blank'}><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
      </div> */}
      <Footer />
    </>
  )
}

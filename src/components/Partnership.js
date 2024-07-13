import React from 'react'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Navbar from './navbar'
import './partners.css'
import img1 from './images/logos strip 2/2.png'
import img2 from './images/logos strip 2/6.png'
import img3 from './images/logos strip 2/7.png'
import img4 from './images/logos strip 2/8.png'
import img5 from './images/logos strip 2/9.png'
import img6 from './images/logos strip 2/1.png'
import img7 from './images/logos strip 2/12.png'
import img8 from './images/logos strip 2/4.png'
import img9 from './images/logos strip 2/11.png'
import img10 from './images/logos strip 2/10.png'
import img11 from './images/logos strip 2/3.png'
import img12 from './images/logos strip 2/5.png'
import buzzi from './images/logos strip/buzzon copy.webp'
import giaa from './images/logos strip/gaia copy.webp'
import Footer from './footer'

export default function Partnership() {

  const handleOpenNewTab = () => {
    const newTab = window.open('https://docs.google.com/forms/d/e/1FAIpQLSdnrPXx2RwyPpiD4gyLD7VKQb-fzs1H8ahkrWYyamj7nK8jTA/viewform', '_blank');
    newTab.focus();
  };

  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>
      <Navbar />
      <h2 className='ab'>PARTNERS</h2>
      <p className='ap'>India MUN partners with schools, colleges, institutions, and corporations who believe in the power of young people in accelerating the pace of climate action and are committed to empower them.</p>
      <h4 className='headname'><span>VISION PARTNERS</span></h4>
      <div className='img_main_div'>
        <div className='img_main_div1'>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </div>
        <div className='img_main_div2'>
          <img src={img6} />
          <img src={img7} />
        </div>
        <div className='img_main_div3'>
          <img src={img8} />
          <img src={img9} />
          <img src={img10} />
          <img src={img11} />
          <img src={img12} />
        </div>
      </div>
      <h4 className='headname1' style={{ marginBottom: '40px', marginTop: '40px' }}><span>FOUNDING PARTNERS</span></h4>
      <p>India MUN is a joint initiative of <b ><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://buzzonearth.com/'>BuzzOnEarth</a></b>  and <b><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://gaiatheearthfoundation.org/'>Gaia The Earth Foundation</a></b>, the organizations that are committed to<br></br> sustainability and regeneration</p>

      {/* <img className="founding_p" src={end_logos}  alt=""/> */}
      <div className='img_end' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', margin: 'auto', paddingBottom: '40px' }}>
        <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><img src={giaa} alt="" /></a>
        <a href='https://buzzonearth.com/' target={'_blank'}><img src={buzzi} alt="" /></a>
      </div>


      <h2 className='ab'>Partner with India MUN</h2>
      <p className='ap'>We're on a mission to empower the next generation of sustainability leaders, and we invite you to be a part of it. India MUN invites forward-thinking corporate partners to take action and join us in driving meaningful change. Your partnership isn't just an opportunity; it's a call to action to invest in the education and development of young minds committed to climate action. Together, we can make an impact that reverberates through generations. Step up and lead the charge – partner with India MUN today!</p>
      <div className='perk-benefit'><a href='https://docs.google.com/forms/d/e/1FAIpQLSdnrPXx2RwyPpiD4gyLD7VKQb-fzs1H8ahkrWYyamj7nK8jTA/viewform' target={'_blank'}><button>Let’s connect</button></a></div>



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

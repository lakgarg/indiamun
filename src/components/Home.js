import React, { useState, useEffect } from 'react'
import './home.css'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import logo1 from './images/INDIAMUN/grid left.webp'
import logo2 from './images/INDIAMUN/grid right.webp'
import Navbar from './navbar'
// import aff_left from './images/INDIAMUN/affi left.webp'
// import aff_right from './images/INDIAMUN/affi right.webp'
import Student1 from './images/INDIAMUN/students 1.webp'
import Student2 from './images/INDIAMUN/students 2.webp'
import Student3 from './images/INDIAMUN/students 3.webp'
import Student4 from './images/INDIAMUN/students 4.webp'
import program_photo from './images/INDIAMUN/PROGRAM DEKS.webp'
import program_mobile_photo from './images/INDIAMUN/PROGRAM mobile.webp'
import girl from './images/INDIAMUN/join image.webp'
import col1 from './images/clipart/9.webp'
import col2 from './images/clipart/10.webp'
import col3 from './images/clipart/11.webp'
import news_img from './images/INDIAMUN/bolg image.webp'
import event_img from './images/INDIAMUN/event image.webp'
import end_img from './images/newimages/CAN .webp'
import { Tweet } from 'react-twitter-widgets'
import Carousel from 'react-grid-carousel'
import png1 from './images/logos strip 2/1.png'
import png2 from './images/logos strip 2/2.png'
import png3 from './images/logos strip 2/3.png'
import png4 from './images/logos strip 2/4.png'
import png5 from './images/logos strip 2/5.png'
import png6 from './images/logos strip 2/6.png'
import png7 from './images/logos strip 2/7.png'
import png8 from './images/logos strip 2/8.png'
import png9 from './images/logos strip 2/9.png'
import png10 from './images/logos strip 2/10.png'
import png11 from './images/logos strip 2/11.png'
import png12 from './images/logos strip 2/12.png'
import buzzi from './images/logos strip/buzzon copy.webp'
import giaa from './images/logos strip/gaia copy.webp'
import indiaMunChapter from '../components/images/affiliate/india chapter logo.webp'
import indiaMunNewLogo from '../components/images/affiliate/india MUn new logo.webp'
import GSCAPlaque from '../components/images/affiliate/GSCA plaque.webp'
import plaque from './images/INDIAMUN/plaque.png'
import forestam from './images/About/Forrest-right.webp'
import Footer from './footer'
import Aff1 from '../components/images/affiliate/Ovais Sarmad.png'
import Aff2 from '../components/images/affiliate/Suresh prabhu.png'
import Aff3 from '../components/images/affiliate/Ramananramnathan.png'
import Aff4 from '../components/images/affiliate/Jagdish seth.png'
import indiaMunLogo from './images/INDIAMUN/india mun blue logo.png';

import { useNavigate } from 'react-router-dom';
import { useLogin } from './hooks/useLogin'
import { useAuthContext } from './hooks/useAuthContext'
import Testimonial from './Testimonial'


const slides = ['DO YOU WANT TO LIVE AND WORK IN A MORE SUSTAINABLE WORLD?', 'DO YOU WANT TO PROTECT AND NURTURE YOUR ENVIRONMENT?', 'DO YOU WONDER WHAT YOU AS AN INDIVIDUAL CAN DO?'];




export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropcol1, setDropcol1] = useState(false);
  const [dropcol2, setDropcol2] = useState(false);
  const [dropcol3, setDropcol3] = useState(false);

  const { login, error, isPending, signInWithGoogle } = useLogin()
  const history = useNavigate()
  const { user } = useAuthContext()

  const handleSendDetailsClick = () => {
    window.open('https://forms.gle/GVsnHqJ4gKBzGf2H6', '_blank');
  }

  const handleSignIN = async (e) => {
    try {
      await signInWithGoogle();
      history('/events')
      console.log(user)

    } catch (err) {
      console.log(err)
    }

  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handledropClick1 = () => {
    setDropcol1(!dropcol1);
    setDropcol2(false);
    setDropcol3(false);
  }
  const handledropClick2 = () => {
    setDropcol2(!dropcol2);
    setDropcol1(false);
    setDropcol3(false)
  }
  const handledropClick3 = () => {
    setDropcol3(!dropcol3);
    setDropcol2(false);
    setDropcol1(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>
      <Navbar />
      <div className="activism">
        <h1>FROM ACTIVISM TO ACTION</h1>
        <p className='nur'>Nurturing future sustainability leaders</p>
        <div className='roller'>
          <button onClick={handlePrev} style={{ background: 'none', border: 'none', color: 'white' }}><i class="fa-solid fa-chevron-left"></i></button>
          <h3 className='main-act'>{slides[currentIndex]}</h3>
          <button onClick={handleNext} style={{ background: 'none', border: 'none', color: 'white' }}><i class="fa-solid fa-chevron-right"></i></button>
        </div>

        <div className="join-ind">
          <p>JOIN INDIA MUN</p>
          {/* <button class="join-but"><a href='/affiliates' style={{textDecoration:'none',color:'white'}}>Affiliate Your School</a></button> */}
        </div>
        <p className='up'> Where the world's 365 MILLION* young people</p>
        <p className='mid'>MEET | LEARN | BRAINSTORM | ACT</p>
        <p className='up sec'>on our planet's most pressing problems </p>
      </div>

      <div className='logos_grid'>
        <img className='logos_grid_img' src={logo1} alt="" />
        <img className='logos_grid_img' src={logo2} alt="" />
      </div>




      <div className="about">
        <h1 className="habout">ABOUT INDIA MUN </h1>
        <p className="pabout">India MUN, a collaborative endeavor by Gaia The Earth Foundation and BuzzOnEarth Youth, is a pioneering global institution committed to  uniting and empowering young students for climate action. We proudly serve as the official partner of the UN Decade on Ecosystem Restoration, a groundbreaking initiative jointly spearheaded by UNEP and UNFCCC. <br /> <br />
        At its core, India MUN is the vanguard of climate-conscious education. We believe in harnessing the collective power of the largest youth constituency in the world to transform them into a dynamic network of future sustainability leaders.
        </p>
        <div className="fabout">A forum for future sustainability leaders</div>
      </div>

      {/* <h1 className='aff'>AFFILIATIONS OPEN</h1> */}
      {/* <h1 className='aff-black'>AFFILIATE YOUR SCHOOL TODAY</h1>

      <img className='mobile_photo' src='GSCA mobile.webp' width='100%'></img>
      <div className='program_mun_content4'>
        <img src="GSCA.webp" width='100%' alt="" />
      </div> */}
      <h1 className='aff-h1-home'>GLOBAL SCHOOLS FOR CLIMATE ACTION</h1>
      <div className="aff-p-1-container">
        <p className='aff-p-1'>Building India's largest youth network for climate action, leadership and innovation.</p>
      </div>

      <div className="aff-hero">
        <div className="aff-hero-left">
          <h3 className='aff-hero-subheading'>Registrations open for</h3>
          <div className="aff-hero-img">
            <img src={indiaMunChapter} alt="indiaMunChapter" />
          </div>
          <h3 className="aff-hero-subheading-2">Want to Affiliate Your School with India MUN?</h3>
          <button className='aff-hero-btn' onClick={handleSendDetailsClick}>Request a callback</button>
        </div>
        <div className="aff-hero-right">
          <div className="aff-hero-right-img">
            <img src={GSCAPlaque} alt="GSCAPlaque" />
          </div>
        </div>
      </div>
      <div className="custom-bg">
        {/* <div className="my-container">
          <div className="left-container">
            <div className="upper-text">Global Schools for Climate Action.</div>
            <div className="lower-text-home">Building India's largest youth network for climate action.</div>
            <div className="right-text">AFFILIATE YOUR SCHOOL TODAY!</div>
          </div>
          <div className="right-text-container">
            <img className='right-img-plaque' src={plaque} alt="plaque" />
          </div>
        </div> */}
        <div className='img_gallery'>
          {/* <img className='gallery' src={aff_left} alt="" />
          <img className='gallery' src={aff_right} alt="" /> */}
          <img className='gallery' src={Student1} alt="Student1" />
          <img className='gallery' src={Student2} alt="Student2" />
          <img className='gallery' src={Student3} alt="Student3" />
          <img className='gallery' src={Student4} alt="Student4" />
        </div>
        <button className="right-button"><a href='/affiliates' style={{ textDecoration: 'none', color: 'white' }}>Learn More</a></button>
      </div>




      {/* <h1 className='head-am'>INDIA'S YOUNG FOREST AMBASSADOR</h1>
      <p className='con-mind'>Connecting young minds with nature & helping them develop self-awareness, creativity, resilience, collaboration, and environmental stewardship.</p>
      <div className='forest-am'>
        <div className='for-left part'>
          <a href='https://gaiatheearthfoundation.org' target={'_blank'}><button>SEE OUR WORK AREA</button></a>
        </div>
        <div className='for-right part'>
          <p>Given the need to restore our degraded lands and forest ecosystems India needs to build a youth-led initiative to fund on ground regenerative action that will have enormous ecological and social impact. </p>
          <img src={forestam} ></img>
          <div className='reg_school_clg'>
            <span>Season 2 Coming Soon</span>
            <a href='/schools'><button >Schools</button></a>
            <a><button onClick={handleSignIN} >Colleges</button></a>
          </div>
        </div>
      </div> */}

      <div className="con">
        <div className='con_div'>
          <img className='annual-conference-logo' src={indiaMunLogo} alt="indiaMunLogo" />
          <h1 className="h-con underline-small">INDIA MUN ANNUAL CONFERENCE </h1>
        </div>
        <div className="p-con-div">
          <p className="p-con">India’s first Model United Nations conference on Climate is a challenging and competitive platform for students to debate and analyse some of the world’s most pressing climate problems. As delegates representing different countries and agencies, students will gain practical insight into the challenges and opportunities posed by the urgent need for more sustainable growth models.</p>
        </div>
        <div className="f-con"><button className="right-button"><a href='/conference' style={{ textDecoration: 'none', color: 'white' }}>Enroll Now</a></button></div>
      </div>



      <div className='youtube_gal'>
        <div className='youtube_gal_cards'>
          <p>India MUN Conference 2021<br></br>
            <b>India's Youth For Climate Action</b></p>
          <iframe className='youtube_gal_iframe'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7Gd9WZu6C0g"
            title="Video 1"
          >
          </iframe>
        </div>
        <div className='youtube_gal_cards'>
          <p>Special Address to The Youth Of India, By<br></br>
            <b>Mr Ovais Sarmad, Deputy Executive Secretary </b>
            <br></br>
            United Nations Framework Convention on Climate Change</p>
          <iframe className='youtube_gal_iframe'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SmSo3SY_S1o"
            title="Video 2"
          >
          </iframe>
        </div>
        <div className='youtube_gal_cards'>
          <p>
            India MUN Panel Discussion 2021
            <br></br>
            <b>NSE | MHRD | CBSE | AMRITA</b>

          </p>
          <iframe className='youtube_gal_iframe'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0AMZzIg_zFc"
            title="Video 3"
          >
          </iframe>
        </div>
      </div>

      <p className='h-con1'>INDIA MUN PROGRAMS</p>
      <img className='mobile_photo' src={program_mobile_photo} alt="" />
      {/* <p className="pabout">Our climate-positive programs, competitions, and events form the cornerstone of our mission to convert activism into tangible action. By participating in India MUN, students - the future stewards of sustainability - have the opportunity to brainstorm innovative climate solutions and connect with like-minded peers who share a deep commitment to our planet. Join us in shaping a sustainable future, where every voice matters, and every action counts.</p> */}


      <div className='program_mun'>
        <div className='program_mun_content1'>
          <img style={{ width: "100%", height: 'auto' }} src={program_photo} alt="" />
        </div>
        <div className='program_mun_content2'>
          <div className='ylp-homepage'>
            <h3>YOUTH LEADERSHIP PROGRAM</h3>
            {/* <button className='right-button'>Coming Soon</button> */}
            <span>Registrations Open!</span>
            <div className='button_div_climate'>
              <div className='button_div_climate1'> 
                <a href='/ylpa'><button className='ylp-homepage-btn right-button'>Enroll Now</button></a>
              </div>
            </div>
            {/* <p style={{padding:'5px',color:'rgb(190, 49, 174)'}}>July 2023</p> */}
          </div>
          <div className='cli_phone'>
            <h3>INDIA'S YOUNG FOREST AMBASSADOR</h3>
            <p className='reg_open'>Registrations Open!</p>
            <div className='button_div_climate'>
              <div className='button_div_climate1'> 
                <a href='/events'><button className='right-button'>Enroll Now</button></a>
              </div>
            </div>
          </div>
          <div>
            <h3>CLIMATE HACKATHON</h3>
            <div className='button_div_climate'>
              <div className='climate-hack-container button_div_climate1'>
                <p className='climate-hack-p-1'>Season 2</p>
                <span className='climate-hack-span'>(Coming Soon)</span>
              </div>
              <div className='button_div_climate2'>
                <p className='climate-hack-p'>Season 1</p>
                <button className='climate-hack-button right-button'><a style={{ textDecoration: 'none', color: 'white' }} href='https://www.instagram.com/p/Cr0xk4OP1Om/' target={'_blank'}>View Results</a></button>
              </div>

            </div>
          </div>
        </div>
        <div className='program_mun_content3'>
          <div>
            <p>This leadership development course for school students has modules led by industry leaders and prominent climate influencers. It is designed to enable you to understand, develop and hone your individual leadership style and become the best version of yourself. It will equip you with the necessary life skills to excel in your chosen field.</p>
          </div>
          <div>
            <p>Become a member of Generation Restoration, a unique youth-led initiative for both school and college students to fund regenerative action to restore degraded forest systems. Learn not only about its lasting ecological and social impact – but also how this affects your own life.</p>
          </div>
          <div>
            <p>Join this creative but intense hackathon for university students to find solutions to some of the most pressing issues created by climate change that Indian businesses and communities face. The solutions, possibly various combinations of tech products, policy evaluations, market models, business plans, new designs and product innovations, will help you hone your creativity and offer new directions for climate action.</p>
          </div>
        </div>
      </div>
      <h1 className="habout" style={{ marginBottom: '30px' }}>OUR ASSOCIATES & PARTNERS</h1>
      <div className='img-slide-car'>
        <Carousel cols={4} rows={1} gap={0} loop showDots={true} autoplay={2000}>
          <Carousel.Item>
            <img width="60%" src={png1} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png2} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png3} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png4} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png5} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png6} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png7} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png8} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png9} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png10} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png11} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="60%" src={png12} />
          </Carousel.Item>
        </Carousel>

      </div>

      <div className="image-card">
        <div className="text-container">
          <p><span>Join </span>to Combat climate change.</p>
          <p><span>Create </span>solutions to solve problems that affect the environment.</p>
          <p><span>Network </span>connect with like-minded friends who care about the planet.</p>
          <p><span>Become </span>a  future sustainability leader. </p>
        </div>
        <div className="image-container">
          <img src={girl} alt="Nature" />
        </div>
      </div>

      <h2 className='h-col'>COLLABORATE</h2>
      <p className='p-col'>“Partnerships for a sustainable future”</p>
      {/* <div className='col-new'>
        <div className='col-new-div'>
            <img src={col1} alt=""/>
            <p>INDIVIDUALS</p>
            <i onClick={handledropClick1} class="fa-solid fa-circle-chevron-down fa-2xl"></i>
            <i onClick={handledropClick1} class="fa-solid fa-circle-chevron-down fa-lg"></i>
        </div>
        <div className='col-new-div sc2'>
            <img src={col2} alt=""/>
            <p>SCHOOLS/COLLEGES</p>
            <i onClick={handledropClick2} class="fa-solid fa-circle-chevron-down fa-2xl"></i>
           <i onClick={handledropClick2} class="fa-solid fa-circle-chevron-down fa-lg"></i>
        </div>
        <div className='col-mob col-new-div'>
            <img src={col3} alt=""/>
            <p>CORPORATES</p>
            <i onClick={handledropClick3} class="fa-solid fa-circle-chevron-down fa-2xl"></i>
            <i onClick={handledropClick3} class="fa-solid fa-circle-chevron-down fa-lg"></i>
        </div>
    </div> */}









      <div className='main-cola'>

        <div className='cola-items'>
          <div className='img-cola'>
            <img src={col1}></img>
            <span>INDIVIDUALS</span>
            <i onClick={handledropClick1} class="fa-solid fa-circle-chevron-down fa-2xl"></i>
            <i onClick={handledropClick1} class="fa-solid fa-circle-chevron-down fa-lg"></i>
          </div>
          {dropcol1 &&
            <div>
              <p>INDIA MUN PROGRAMS</p>
              <a href='/events' target='_blank'><button>IYFA</button></a>
              <a href='/ylpa' target='_blank'><button>YLP</button></a>
            </div>
          }
        </div>

        <div className='cola-items'>
          <div className='img-cola'>
            <img src={col2}></img>
            <span>SCHOOLS/COLLEGES</span>
            <i onClick={handledropClick2} class="fa-solid fa-circle-chevron-down fa-2xl"></i>
            <i onClick={handledropClick2} class="fa-solid fa-circle-chevron-down fa-lg"></i>
          </div>
          {dropcol2 &&
            <div>
              <p>AFFILIATE YOUR SCHOOL TODAY </p>
              <a href='/affiliates'><button>Affliations Open</button></a>
            </div>
          }
        </div>

        <div className='cola-items'>
          <div className='img-cola'>
            <img src={col3}></img>
            <span>CORPORATES</span>
            <i onClick={handledropClick3} class="fa-solid fa-circle-chevron-down fa-2xl"></i>
            <i onClick={handledropClick3} class="fa-solid fa-circle-chevron-down fa-lg"></i>
          </div>
          {dropcol3 &&
            <div>
              <p>BECOME A CORPORATE SPONSOR</p>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdnrPXx2RwyPpiD4gyLD7VKQb-fzs1H8ahkrWYyamj7nK8jTA/viewform' target={'_blank'}><button>Let's Connect</button></a>
            </div>
          }
        </div>

      </div>


      {/* <div className='drop_col_down'>
           {dropcol1 && <div className='drop_col1'>
            <h3>INDIA'S YOUNG FOREST AMBASSADOR</h3>
              <p className='reg_open'>Registrations Open</p>
              <div className='drop_col11'>
                  <button className='right-button'>Schools</button>
                  <button className='right-button'><a style={{textDecoration:'none',color:'white'}}>Colleges</a></button>
              </div>
           </div>}

           {dropcol2 && <div className='drop_col2'>
             <h3>AFFILIATE YOUR SCHOOL TODAY</h3>
             <button className='right-button'>Affiliations Open</button>
           </div>}
          {dropcol3 && <div className='drop_col3'>
            <h3>BECOME A CORPORATE SPONSOR</h3>
            <button className='right-button'>Let's Connect</button>
           </div>}
    </div> */}

      {/* <div className='reg-af'>
      <div>
       <button className='right-button1'><a style={{textDecoration:'none',color:'white'}} href='/colleges' >Registrations Open</a></button>
       <p>INDIA'S YOUNG FOREST AMBASSADOR</p>
      </div>
      <div>
      <button className='right-button1'><a style={{textDecoration:'none',color:'white'}} href='/affiliates' >Affiliations Open</a></button>
      <p>AFFILIATE YOUR SCHOOL TODAY</p>
      </div>
    </div> */}
      <div className='news-events'>
        <div className='news'>
          <p className='news_t'>NEWS</p>
          <img src={news_img} alt='' />
          <div className='news_td'>
            <p className='news_p'><b>Climate change: What will wake us up?</b><br></br>
              Our house is on fire and yet, we snooze with astounding nonchalance</p>
            <p className='news_pc'>Climate crisis is right here, staring in our face, as if giving us one last
              warning to put our act together RIGHT NOW! No matter how much “blah” happens around
              the world, the biggest evidence of the underlying inaction is the prevailing reluctance
              of adequate investments and capital allocation for climate action
            </p>

            <button className='right-button'><a style={{ textDecoration: 'none', color: 'white' }} href='https://www.deccanherald.com/sunday-herald/sh-top-stories/climate-change-what-will-wake-us-up-1045709.html' target={'_blank'}>Read More</a></button>

          </div>
          {/* <div className='news_td'>
            <p className='news_p'>
              <b>Students, are you passionate about climate action? Check out the India MUN and all the sessions it has in store for you</b></p>
            <p className='news_pc'>India MUN is being helmed by Gayatri Chauhan, who studied at Indian Institute of Technology, Roorkee. She has been a passionate climate activist for a few years now
            </p>
            <button className='right-button' ><a style={{ textDecoration: 'none', color: 'white' }} href='https://www.edexlive.com/news/2021/nov/05/india-mun-students-climate-action-india-mun-sessions-un-virtual-25367.html' target={'_blank'}>Read More</a></button>
          </div>
          <div className='news_td'>
            <p className='news_p'>
              <b>India Model United Nations set to unite the Youth towards Climate Action</b></p>
            <p className='news_pc'>To enable India’s youth of over 356 million and counting to drive the biggest sustainability agenda for a climate-resilient world, our country’s very first pan India Model United Nations (India MUN) is rolling out an extensive 4-day virtual event for students placed across the nation in December. Focusing on climate action-based agenda to sensitize the youth around climate crisis, the program is backed by the UNFCCC, UNEP, CBSE board, universities, and corporates.
            </p>
            <button className='right-button' style={{ marginBottom: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://indiaeducationdiary.in/india-model-united-nations-set-to-unite-the-youth-towards-climate-action/' target={'_blank'}>Read More</a></button>
          </div> */}

        </div>
        <div className='events'>
          <p className='events_t'>EVENTS</p>
          <img src={event_img} alt="" />
          <p className='events_p'>
            BuzzOnEarth's India Climate Hackathon 2023, a hackathon that invited college students nationwide to
            address pressing
            climate and sustainability issues faced by Indian businesses and communities.......
          </p>
          <div style={{ float: 'left', padding: '0px 30px 30px 30px' }}>
            <button className='right-button'><a style={{ textDecoration: 'none', color: 'white' }} target={'_blank'} href='https://buzzonearth-climatehackathon.in/'>Read More</a></button>
          </div>
        </div>
      </div>
      <div className='twitter_feed'>
        <p>TWITTER FEED</p>
        <div className='twit'>
          <Tweet tweetId="1611574696679706624" options={{ height: '100%', width: "100%" }} />
          <Tweet tweetId="1608453461238222858" options={{ height: '100%', width: "100%" }} />
          <Tweet tweetId="1602708791082029059" options={{ height: '100%', width: "100%" }} />
          <Tweet tweetId="1598323685144006662" options={{ height: '100%', width: "100%" }} />
        </div>
      </div>
      <img style={{ width: '100%', height: 'auto', marginBottom: '40px' }} src={end_img} alt="" />
      <div className='margin-button'>
        <button className='right-button2'><a style={{ textDecoration: 'none', color: 'white', }} href='/affiliates' >AFFILIATE YOUR SCHOOL TODAY!!</a></button>
      </div>
      {/* <div className='regi'>
        <h1 className="habout">BECOME INDIA'S YOUNG FOREST AMBASSADOR</h1>
        <button className='right-button2'><a style={{textDecoration:'none',color:'white'}} href='/colleges' >Registrations Open</a></button>
        <p className='reg_open'>Registrations Open</p>
        <div className='button_div_climate end_sth'>
          <div className='button_div_climate1'>
            <p>SCHOOLS</p>
            <a href='/schools'><button className='right-button'>Schools</button></a>
          </div>
          <div className='button_div_climate2'>
            <p>COLLEGES</p>
            <a><button onClick={handleSignIN} className='right-button'><a style={{ textDecoration: 'none', color: 'white' }}>Colleges</a></button></a>
          </div>
        </div>
      </div> */}


      <h1 className='aff1-home'>TESTIMONIALS</h1>
      <div className='testimonial-container'>
        <Testimonial videoSRC="https://www.youtube.com/embed/SmSo3SY_S1o?si=ANaFT09_Oco4hqMZ" videoTitle="Video 1" imageSRC={Aff1} imageTitle="council1" name="Mr Ovais Sarmad," position="Former Deputy Executive Secretary" authority="United Nations Framework Convention on Climate Change" mainSource="(UNFCCC)" />

        <Testimonial videoSRC="https://www.youtube.com/embed/iuQaLltyGvw?si=KOazN7bfoU0aBcii" videoTitle="Video 2" imageSRC={Aff2} imageTitle="council1" name="Mr Suresh Prabhu," position="Parliamentarian, Minister and Chancellor" authority="Prime Minister’s Sherpa for G20 Summit (2014 - 2015)" mainSource="" />

        <Testimonial videoSRC="https://www.youtube.com/embed/dYVbuY-rpE4?si=bftb6cnl3OcJxO9_" videoTitle="Video 2" imageSRC={Aff3} imageTitle="council1" name="Mr. Ramanan Ramanathan," position="Former ( First ) Mission Director" authority="Atal Innovation Mission" mainSource="(AIM)" />

        <Testimonial videoSRC="https://www.youtube.com/embed/Od42_mD5Kv8?si=1yfKI-9GInU74gP2" videoTitle="Video 2" imageSRC={Aff4} imageTitle="council1" name="Dr. Jagdish N. Seth," position="Padma Bhushan Awardee 2020" authority="Charles H. Kellstadt Professor of Marketing" mainSource="" />
      </div>




      <p className='founding'>FOUNDING PARTNERS</p>
      <p>India MUN is a joint initiative of <b ><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://buzzonearth.com/' target={'_blank'}>BuzzOnEarth</a></b>  and <b><a style={{ color: '#0076ba', textDecoration: 'none' }} href='https://gaiatheearthfoundation.org/' target={'_blank'}>Gaia The Earth Foundation</a></b>, the organizations that are committed to<br></br> sustainability and regeneration</p>

      {/* <img className="founding_p" src={end_logos}  alt=""/> */}
      <div className='img_end' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px', margin: 'auto' }}>
        <a href='https://gaiatheearthfoundation.org/' target={'_blank'}><img src={giaa} alt="" /></a>
        <a href='https://buzzonearth.com/' target={'_blank'}><img src={buzzi} alt="" /></a>
      </div>
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

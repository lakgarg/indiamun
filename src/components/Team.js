import React from 'react'
import './team.css'
import council1 from './images/mun/council-1.webp'
import council2 from './images/mun/council-2.webp'
import council3 from './images/mun/council-3.webp'
import council4 from './images/mun/council-4.webp'
import council5 from './images/mun/council-5.webp'
import council6 from './images/mun/council-6.webp'
import council7 from './images/mun/council-7.webp'
import council8 from './images/mun/council-8.webp'
import org1 from './images/mun/org1.webp'
import org2 from './images/mun/org2.webp'
import org3 from './images/mun/org3.webp'
import org4 from './images/mun/org4.webp'
import org5 from './images/mun/org5.webp'
import org6 from './images/mun/org6.webp'
import org7 from './images/mun/org7.webp'
import org8 from './images/mun/org8.webp'
import org9 from './images/mun/org9.webp'
import org10 from './images/mun/org10.webp'
import org11 from './images/mun/org11.webp'
import org12 from './images/mun/org12.webp'
import org13 from './images/mun/org13.webp'
import org14 from './images/mun/org14.webp'
import org15 from './images/mun/org15.webp'
import org16 from './images/mun/org16.webp'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Navigation from './navbar'
import Footer from './footer'

export default function Team() {
  return (
    <>
    <div className='top_comp'>
    <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt=""/>
    </div>
    <Navigation/>

    <h1 style={{fontSize:'40px', textAlign:'center',fontWeight:'550',}}>Governing Council</h1>
    <div className='img-card'>
        <div className='card-item'>
          <img src={council1} ></img>
        <p className='card-name'> Hon’ble Mr. Suresh Prabhu</p>
        <p className='card-des'>India's Sherpa to the G7 and <br></br>Chancellor of Rishihood University</p>
        </div>
        <div className='card-item'>
          <img src={council2} ></img>
        <p className='card-name'> Mr. Ramanan Ramanathan</p>
        <p className='card-des'>Former ( First ) Mission Director Atal Innovation Mission</p>
        </div>
        <div className='card-item'>
          <img src={council3} ></img>
        <p className='card-name'> Prof. V Ramgopal Rao</p>
        <p className='card-des'>Pillay Chair Professor & Former Director of IIT Delhi</p>
        </div>
        <div className='card-item'>
          <img src={council4} ></img>
        <p className='card-name'> LS Shashidhara</p>
        <p className='card-des'>Professor and Dean (Research) – Ashoka University</p>
        </div>
        <div className='card-item'>
          <img src={council5} ></img>
        <p className='card-name'> Mr. Ajit Kumar Chaturvedi</p>
        <p className='card-des'>Director at Indian Institute of Technology, Roorkee</p>
        </div>
        <div className='card-item'>
          <img src={council6} ></img>
        <p className='card-name'> Mrs. Shakila Shamsu</p>
        <p className='card-des'>OSD(New Education Policy), Department of Higher Education, MHRD, GOI</p>
        </div>
        <div className='card-item'>
          <img src={council7} ></img>
        <p className='card-name'> Dr. M.P. Poonia</p>
        <p className='card-des'>Vice Chairman, <br></br>All India Council for Technical Education, Government of India</p>
        </div>
        <div className='card-item'>
          <img src={council8} ></img>
        <p className='card-name'> Mr. Jaideep Gokhale</p>
        <p className='card-des'>Vice President,<br></br>Sustainability for Asia Pacific</p>
        </div>
    
    </div>


    <h1 style={{fontSize:'40px', textAlign:'center',}}>Organizing Team</h1>


    <div className='img-card'>
        <div className='card-item'>
          <img src={org1} ></img>
        <p className='card-name'> Gayatri Chauhan</p>
        <p className='card-des'>Founder and CEO</p>
        </div>
        <div className='card-item'>
          <img src={org2} ></img>
        <p className='card-name'>Gautham RK</p>
        <p className='card-des'>Sr. Director , Head of Operations</p>
        </div>
        <div className='card-item'>
          <img src={org3} ></img>
        <p className='card-name'>Dr Dakshayini Kanna</p>
        <p className='card-des'>Sr. Director- Academic engagement</p>
        </div>
        <div className='card-item'>
          <img src={org4} ></img>
        <p className='card-name'>Manila Carvalho</p>
        <p className='card-des'>Director – Academic engagement</p>
        </div>
        <div className='card-item'>
          <img src={org5} ></img>
        <p className='card-name'>Mohit</p>
        <p className='card-des'>Programme Associate</p>
        </div>
        <div className='card-item'>
          <img src={org7} ></img>
        <p className='card-name'> Hari Shankar</p>
        <p className='card-des'>Volunteer Partnerships</p>
        </div>
        <div className='card-item'>
          <img src={org16} ></img>
        <p className='card-name'>Manoj Kumar</p>
        <p className='card-des'>Web Developer</p>
        </div>
        <div className='card-item'>
          <img src={org15} ></img>
        <p className='card-name'> Sajal Sameer</p>
        <p className='card-des'>Web Developer</p>
        </div>
        <div className='card-item'>
          <img src={org6} ></img>
        <p className='card-name'>Vamsheepriya Amar</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org8} ></img>
        <p className='card-name'> R.Vijayalakshmy</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org9} ></img>
        <p className='card-name'>Latha L</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org10} ></img>
        <p className='card-name'> Sunitha Rao</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org11} ></img>
        <p className='card-name'>Sita Shankar</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org12} ></img>
        <p className='card-name'> A.N.Suryavathy</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org13} ></img>
        <p className='card-name'>Dr Reshma Ganesh</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
        <div className='card-item'>
          <img src={org14} ></img>
        <p className='card-name'> P.N.Paramakalyani</p>
        <p className='card-des'>Academic Coordinator</p>
        </div>
      </div>
  
   <Footer/>
</>
  )
}

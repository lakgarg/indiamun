import React from 'react'
import './WorkWithUs.css'
import left_img from "./images/INDIAMUN/logo left.webp";
import right_img from "./images/INDIAMUN/logo right.webp";
import Navbar from "./navbar";
import Footer from "./footer";

const WorkWithUs = () => {

  const handleApplyClick = () => {
    window.open('https://forms.gle/Z6dd83w1JQ8pB5df9', '_blank');
  }

  return (
    <div className='wwu-main-container'>

      <div className="top_comp">
        <img className="left_img" src={left_img} alt="" />
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className="right_img" src={right_img} alt="" />
      </div>

      <Navbar />

      <h1 className="wwu-main-heading">Current Openings</h1>

      <div className="wwu-sub-container">
        <div className="job-block">
          <h3 className="job-title">Manager - Institutional Partnerships</h3>
          <p className="job-responsibilities">Responsibilities:</p>
          <ul className=''>
            <li className='responsibility'>Lead the Global Schools for Climate Action affiliation drive, establish new partnerships, and expand the network of India MUN.</li>
            <li className='responsibility'>Engage with educational institutions to promote and integrate India MUN’s programs into their curricula and activities.</li>
            <li className='responsibility'>Maintain ongoing communication with affiliated schools, providing updates on events, activities, and opportunities.</li>
            <li className='responsibility'>Foster and sustain positive relationships with schools and colleges, ensuring their active participation and satisfaction.</li>
            <li className='responsibility'>Promote India MUN's youth programs to schools, highlighting the benefits and opportunities for students.</li>
            <li className='responsibility'>Organize and coordinate events and activities in collaboration with schools, ensuring effective implementation and engagement.</li>
            <li className='responsibility'>Collaborate with colleges to organize and conduct climate hackathons, facilitating student participation and innovation in climate solutions.</li>
          </ul>
          <p className="job-qualifications">Qualifications:</p>
          <ul className=''>
            <li className='qualification'>Bachelor’s degree in Education, Business Administration, or a related field.</li>
            <li className='qualification'>3-5 years of experience in partnership management, educational outreach, or a similar role.</li>
            <li className='qualification'>Demonstrated success in establishing and managing partnerships with educational institutions.</li>
            <li className='qualification'>Strong ability to communicate effectively and build relationships with diverse stakeholders.</li>
            <li className='qualification'>Proven experience in marketing or promoting educational programs and initiatives.</li>
            <li className='qualification'>Excellent organizational and project management skills, with a track record of managing multiple projects simultaneously.</li>
            <li className='qualification'>Ability to work independently and collaboratively within a team environment.</li>
            <li className='qualification'>Proven track record of collaborating on or leading large-scale events or programs, such as hackathons or educational conferences.</li>
          </ul>
          <div className="job-button-container">
            <button className='job-button' onClick={handleApplyClick}>APPLY</button> 
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WorkWithUs
import React from 'react';
import './Testimonial.css';

const Testimonial = ({ videoSRC, videoTitle, imageSRC, imageTitle, name, position, authority, mainSource }) => {
  return (
    <div className='testimonial-main-div'>
      <div className='yt_main_div'>
        <iframe className='yt_video'
          src={videoSRC}
          title={videoTitle}
        />
      </div>
      <div className='testimonial-person-details'>
        <div className="image">
          <img 
            src={imageSRC} 
            alt={imageTitle} 
          />
        </div>
        <div className='main-info'>
          <h5 className='testimonial-name'>{name}</h5>
          <span className='testimonial-position'>{position}</span>
          <span className='testimonial-authority'>{authority}</span>
          <span className='testimonial-mainSource'>{mainSource}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
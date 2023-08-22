import React from 'react'
import './footer.css'
import buzzon from './images/logos strip/footer logo.webp'
export default function Footer() {
  return (
    <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">India MUN is a pan India program that aligns with and supports the goals of UNFCCC and UNEP on climate action.
        <br></br>
        Through India MUN, our mission is to spread awareness among a growing and dynamic youth constituency in India and create a powerful movement driven by future sustainability leaders.
        </p>
      </div>
      <div className="col-xs-6 col-md-3">
        {/* <h6>Categories</h6> */}
        {/* <ul className="footer-links">
          <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
          <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
          <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
          <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
          <li><a href="http://scanfcode.com/category/android/">Android</a></li>
          <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
        </ul> */}
        <img className='foot_img' src={buzzon} alt=""/>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/participate">Participate</a></li>
          <li><a href="/affiliates">Join Us</a></li>
          <li><a href="https://buzzonearth.com/">Blog</a></li>
          <li><a href="/team">The Team</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2020 All Rights Reserved by 
          <a href="/"> IndiaMUN</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          {/* <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
          <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
          <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li> */}
          <li><a className="linkedin" href="https://www.linkedin.com/company/india-mun/?originalSubdomain=in" target={'_blank'}><i className="fa fa-linkedin" /></a></li>   
          <li><a className="linkedin" href="https://www.instagram.com/buzzonearth/" target={'_blank'}><i className="fa fa-instagram" /></a></li>   
          <li><a className="linkedin" href="https://www.youtube.com/@buzzonearth2959" target={'_blank'}><i className="fa fa-youtube" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}

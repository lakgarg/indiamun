import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogin } from './hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'

import './navbar.css'
import { projectAuth } from './firebase/config';
const Navigation = () => {

  const { login, signInWithGoogle } = useLogin()
  const { logout } = useLogout();
  const history = useNavigate()
  const { user } = useAuthContext()

  const handleClick = async (e) => {
    try {
      await signInWithGoogle();
      // history('/events')

      console.log(user)

    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to the login page after logout
      // history('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand='sm' className='nav_class' style={{paddingRight:'0px',paddingLeft:'0px'}}>
        <Container style={{margin:'0px'}}>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='big_nav'>
              <div className="left">
                <Nav.Link className='nav_items' href='/'>Home</Nav.Link>
                {/* <Nav.Link className='nav_items' href='/about'>About Us</Nav.Link> */}
                <NavDropdown
                  title="About Us"
                  className='nav_items'
                  id="nav_custom"
                >
                  <NavDropdown.Item href="/about">Vision And Mission</NavDropdown.Item>
                  <NavDropdown.Item href="/team">
                    The Team
                  </NavDropdown.Item>

                </NavDropdown>
                <Nav.Link className='nav_items' href='/participate'>India MUN Programs</Nav.Link>
                <Nav.Link className='nav_items' href='/affiliates'>Affiliate Now</Nav.Link>
                <Nav.Link className='nav_items' href='/partners'>Partners and Affilates</Nav.Link>
                <Nav.Link className='nav_items' href='/conference'>India MUN Climate Conference</Nav.Link>
                <Nav.Link className='nav_items' href="https://buzzonearth.com/" target={'_blank'} style={{ color: 'white' }}>Blog</Nav.Link>
                {/* <Nav.Link className='nav_items' href='/team'>The Team</Nav.Link> */}
                {/* <NavDropdown
                  title="Student login"
                  className='nav_items'
                  id="nav_custom"
                >
                  <NavDropdown.Item href="/schools">Schools</NavDropdown.Item>
                  <NavDropdown.Item href="/colleges">
                    Colleges
                  </NavDropdown.Item>

                </NavDropdown> */}

                {/* <NavDropdown
              title="India MUN Programs"
              className='nav_items'
              id="nav_custom"
            >
              <NavDropdown.Item href="/schools">School Students</NavDropdown.Item>
              <NavDropdown.Item href="/colleges">College Students</NavDropdown.Item>
              
            </NavDropdown> */}
                {/* <Nav.Link className='nav_items' href='/team'>Student login</Nav.Link> */}

                {/* <NavDropdown
              title="Join Us"
              className='nav_items'
              id="nav_custom"
            >
              <NavDropdown.Item href="/affiliates">Affiliate</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://docs.google.com/forms/d/1b0eHt7na2wlxRoL43oCgaG01jSG_XwV64pFI1ULxPWc/viewform?edit_requested=true">
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSdnrPXx2RwyPpiD4gyLD7VKQb-fzs1H8ahkrWYyamj7nK8jTA/viewform" target={'_blank'}>Partner</NavDropdown.Item>
            </NavDropdown> */}
                {/* <Nav.Link className='nav_items' href='/donor'>Donor</Nav.Link>  */}
              </div>
              <div className="right">
              {user ? (
                  // If user is authenticated, show user's name, profile picture, and logout button
                  <div className='user_main'>
                    <Nav.Link className='nav_items user_pic_container'>
                      <img
                        src={user.photoURL}
                        alt='Profile'
                        className='user_pic'
                      />
                    </Nav.Link>
                    <Nav.Link className='nav_items'>{user.displayName}</Nav.Link>
                    <button className='logout_btn' onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  // If user is not authenticated, show the "Student Login" link
                  <Nav.Link className='nav_items' onClick={handleClick}>
                    Student Login
                  </Nav.Link>
                )}
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogin } from './hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'
import './navbar.css'
import RandomImg from '../components/images/INDIAMUN/bg.png'
import { firebaseAuth, firebaseT, storeUserInfo } from './firebase/config';


const Navigation = () => {

  const { login, signInWithGoogle } = useLogin()
  const { logout } = useLogout();
  const history = useNavigate()
  const { user } = useAuthContext()
  const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem('userData');
  //   const token = localStorage.getItem('token');

  //   console.log('Stored User Data:', storedUserData); 
  //   console.log('Token:', token);

  //   if (storedUserData && token) {
  //     try {
  //       const parsedUserData = JSON.parse(storedUserData);
  //       setUserInfo(parsedUserData);
  //       console.log('User Data: ', parsedUserData);
  //       console.log('State User Data: ', userInfo); 
  //     } catch (error) {
  //       console.error('Error parsing user data:', error);
  //       setUserInfo(null);
  //     }
  //   } else {
  //     setUserInfo(null);
  //   }

  // }, []);

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem('userData');
  //   const token = localStorage.getItem('token');

  //   console.log('Stored User Data:', storedUserData);
  //   console.log('Token:', token);

  //   if (storedUserData && token) {
  //     try {
  //       const parsedUserData = JSON.parse(storedUserData);
  //       setUserInfo(parsedUserData);
  //       console.log('User Data: ', parsedUserData);
  //     } catch (error) {
  //       console.error('Error parsing user data:', error);
  //       setUserInfo(null);
  //     }
  //   } else {
  //     setUserInfo(null);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log('State User Data: ', userInfo);
  // }, [userInfo]);


  const goToStudentCorner = () => {
    const url = "https://earthgeeks.indiamun.org/";

    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  /*   const handleClick = async (e) => {
      try {
        await signInWithGoogle();
  
        // Listen for changes in the authentication state
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            // Access user information
            const { uid, displayName, email } = user;
  
            // Store user information in Firestore
            storeUserInfo(uid, displayName, email);
  
            // Now you can do other actions after sign-in and data storage
            // For example, you can navigate to a different page using React Router
            // history.push('/events');
          } else {
            console.log('User not found!');
          }
        });
  
      } catch (err) {
        console.log(err);
      }
    }; */


  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to the login page after logout
      // history('/login');
    } catch (err) {
      console.log(err);
    }
  };

  // const handleLogout = () => {
  //   // Clear the token and user data from the local storage
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('userData');

  //   // Clear the entire local storage
  //   localStorage.clear();

  //   // Reset any other user-related state or perform additional cleanup
  //   setUserInfo(null); // Reset the user data state if you're using it

  //   // You may also want to redirect the user to the login page or another appropriate page
  //   window.location.href = '/login';
  // };


  return (
    <>
      <Navbar collapseOnSelect expand='sm' className='nav_class' style={{ paddingRight: '0px', paddingLeft: '0px' }}>
        <Container style={{ margin: '0px' }}>
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
                  <NavDropdown.Item href="/team">The Team</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link className='nav_items' href='/participate'>India MUN Programs</Nav.Link>
                <Nav.Link className='nav_items' href='/affiliates'>Affiliate Now</Nav.Link>
                <Nav.Link className='nav_items' href='/partners'>Partners and Affilates</Nav.Link>
                {/* <Nav.Link className='nav_items' href='/mylearning'>My Learning</Nav.Link> */}
                {/* <Nav.Link className='nav_items' href='/conference'>National Climate Conference</Nav.Link> */}
                <NavDropdown
                  title="National Climate Conference"
                  className='nav_items'
                  id="nav_custom"
                >
                  <NavDropdown.Item href="/conference">India MUN National Climate Conference</NavDropdown.Item>
                  <NavDropdown.Item href="/2024-winners">India MUN 2024 Winners</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav_items' href='/work'>Work With Us</Nav.Link>
                <Nav.Link className='nav_items' href="https://earthgeeks.indiamun.org/blog" target={'_blank'} style={{ color: 'white' }}>Blog</Nav.Link>
                {/* {userInfo ? (
                  <Nav.Link className='nav_items' href='/mylearning'>My Learning</Nav.Link>
                ): (
                  <div></div>
                )} */}
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
              {/* <div className="right-nav">
                {userInfo ? (
                  // If user is authenticated, show user's name, profile picture, and logout button
                  <div className='user_pic'>
                    <Nav.Link className='nav_items user_pic_container'>
                      <img
                        src={user.avatar}
                        alt='Profile'
                        className='user_pic'
                      />
                    </Nav.Link>  */}
              {/* <Nav.Link className='nav_items'>{user.displayName}</Nav.Link>
                    <button className='logout_btn' onClick={handleLogout}>
                      Logout
                    </button>

                    {/* <NavDropdown
                      title={
                        <img
                          src={RandomImg}
                          alt="Profile"
                          className="user_pic"
                          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                        />
                      }
                      className="nav_items"
                      id="nav_custom"
                    >
                      <NavDropdown.Item href="/mylearning">My Learning</NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <button className='logout-btn' onClick={handleLogout}>Logout</button>
                      </NavDropdown.Item>
                    </NavDropdown> */}
              {/* </div>
                ) : (
                  // If user is not authenticated, show the "Student Login" link
                  <Nav.Link className='nav_items' onClick={handleClick}>
                    Login
                  </Nav.Link>
                  // <div className="login-btn-main">
                  //   <NavDropdown.Item className='nav_items' href="/login">Student Login</NavDropdown.Item>
                  // </div>
                )}
              </div> */}
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
                  <Nav.Link className='nav_items' onClick={goToStudentCorner}>
                    Students' Corner
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
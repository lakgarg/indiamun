import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
const Navigation = () => {
    return (
    <Navbar collapseOnSelect  expand='sm' className='nav_class'>
    <Container >
    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
    <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='big_nav'>
            <Nav.Link className='nav_items' href='/'>Home</Nav.Link> 
            <Nav.Link className='nav_items' href='/about'>About Us</Nav.Link>
            <Nav.Link className='nav_items' href='/partners'>Partners</Nav.Link>
            <Nav.Link className='nav_items' href='/participate'>India MUN Programs</Nav.Link> 
            {/* <Nav.Link className='nav_items' href='/affiliates'>Affiliates</Nav.Link> */}
            <NavDropdown
              title="Join Us"
              className='nav_items'
              id="nav_custom"
            >
              <NavDropdown.Item href="/affiliates">Affiliate</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://docs.google.com/forms/d/1b0eHt7na2wlxRoL43oCgaG01jSG_XwV64pFI1ULxPWc/viewform?edit_requested=true">
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSdnrPXx2RwyPpiD4gyLD7VKQb-fzs1H8ahkrWYyamj7nK8jTA/viewform" target={'_blank'}>Partner</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav_items' href="https://buzzonearth.com/" target={'_blank'} style={{color:'white'}}>Blog</Nav.Link>
            <Nav.Link className='nav_items' href='/team'>The Team</Nav.Link>
            <NavDropdown
              title="Student login"
              className='nav_items'
              id="nav_custom"
            >
              <NavDropdown.Item href="/schools">Schools</NavDropdown.Item>
              <NavDropdown.Item href="/colleges">
                Colleges
              </NavDropdown.Item>
              
            </NavDropdown>
            {/* <Nav.Link className='nav_items' href='/donor'>Donor</Nav.Link>  */}
        </Nav>
    </Navbar.Collapse> 
    </Container>
    </Navbar>
    );
    }
    export default Navigation;
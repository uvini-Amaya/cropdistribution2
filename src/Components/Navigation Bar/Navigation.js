import React from 'react';
import "./Navbar.css";
// import Button from "../Button/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img6 from "../../Images/img6.png";


export default function Navigation() {
  return (

        <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbar">

        <Container>
            <Navbar.Brand>
                <img alt="img6"src={img6}width="40"height="40"className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Brand href="#home" className="navtitle">DIGItalMARkeT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <div className="navitem">
                <Nav.Link href="#home" className='navinside'>Home</Nav.Link>
                <Nav.Link href="#aboutus" className='navinside'>AboutUs</Nav.Link>
                <label className='navinside'>search</label>
                <input type="search" placeholder="Search" id="form1" class="form-control" className='navinside' />
                <NavDropdown href="#language" title="Language" id="basic-nav-dropdown" className='navinside'>
                    <NavDropdown.Item >Sinhala</NavDropdown.Item>
                    <NavDropdown.Item >English</NavDropdown.Item>
                    <NavDropdown.Item >Tamil</NavDropdown.Item>
                </NavDropdown>
                </div>
                <NavDropdown title="SignUp" href="#signup" id="basic-nav-dropdown" className='navinside'>
                    <NavDropdown.Item href="#farmer" >farmer</NavDropdown.Item>
                    <NavDropdown.Item href="#seller">seller</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#login" className='navinside'>Login</Nav.Link>
                

            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>          
   
  )
}
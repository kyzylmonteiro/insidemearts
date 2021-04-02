import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from './logo.png';

const Header = () => {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Navbar.Brand href="/">
          <img
            src={logo} 
            alt="Logo"
            width="90"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand> */}
          <Nav className="mx-auto parent">
            <Nav.Item>
              <Nav.Link>
                <NavLink className="navLink" to="/">Inside Me</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink className="navLink" activeStyle={{ fontWeight:"bold" }} to="/initiative">Our Initiative</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink className="navLink" activeStyle={{ fontWeight:"bold" }} to="/media">Media</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink className="navLink" activeStyle={{ fontWeight:"bold" }} to="/donate">Donate</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink className="navLink" activeStyle={{ fontWeight:"bold" }} to="/volunteer">Get Involved</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink className="navLink" activeStyle={{ fontWeight:"bold" }} to="/contact">Contact Us</NavLink>
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

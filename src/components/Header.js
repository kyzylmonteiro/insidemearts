import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import logo from "./logo.png";

const Header = () => {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="xl">
        <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav"/>
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
                <NavLink className="navLink" to="/">
                  Inside Me
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeStyle={{ fontWeight: "600" }}
                  to="/initiative"
                >
                  Our Initiative
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeStyle={{ fontWeight: "600" }}
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeStyle={{ fontWeight: "600" }}
                  to="/news"
                >
                  News
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeStyle={{ fontWeight: "600" }}
                  to="/donate"
                >
                  Help Us
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeStyle={{ fontWeight: "600" }}
                  to="/volunteer"
                >
                  Join Us
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink
                  className="navLink"
                  activeStyle={{ fontWeight: "600" }}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
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

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navBar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto parent">
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="/"
              >
                Inside Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="/initiative"
              >
                Our Initiative
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="/media"
              >
                Media
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="/donate"
              >
                Donate
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="/contact"
              >
                Contact Us
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

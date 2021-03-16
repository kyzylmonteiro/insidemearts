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
              <Nav.Link>
                <Link className="navLink" activeClassName="activeNavLink" to="/">Inside Me</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className="navLink" activeClassName="activeNavLink" to="/initiative">Our Initiative</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className="navLink" activeClassName="activeNavLink" to="/media">Media</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className="navLink" activeClassName="activeNavLink" to="/donate">Donate</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className="navLink" activeClassName="activeNavLink" to="/contact">Contact Us</Link>
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

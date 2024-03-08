import React from "react";
import logo from "../assets/brand-logo.png";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar
      className="nav-bg"
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto ">
            <Nav.Link className="me-4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="me-4" href="#product">
              Product
            </Nav.Link>
            <Nav.Link className="me-4" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="me-4" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Button className="px-4" variant="outline-light">
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

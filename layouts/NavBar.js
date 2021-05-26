import React, { useRef, useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import LogoSvg from "../src/components/LogoSvg";

function NavBar({children}) {
  const navbarCollapse = useRef(null);
  const [isNavCollapse, setIsNavCollapse] = useState(true);

  const switchNavbarIcon = () => {
    let classes = navbarCollapse.current.classList;
    let isShow = classes.contains("show");
    if (isShow) {
      setIsNavCollapse(true);
    } else {
      setIsNavCollapse(false);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="#home">
          {" "}
          <LogoSvg /> <span className="text-dark"> egghead.io </span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={switchNavbarIcon}
        >
          <i
            className={`fas fa-bars  ${isNavCollapse ? "d-block" : "d-none"}`}
          ></i>
          <i
            className={`fas fa-times ${!isNavCollapse ? "d-block" : "d-none"}`}
          ></i>
        </Navbar.Toggle>
        <Navbar.Collapse ref={navbarCollapse} id="responsive-navbar-nav">
          <Nav>
            <Button variant="light" className="px-3 py-1 navbar__button">
              {" "}
              Browse{" "}
            </Button>
            <Form className="navbar__form d-flex ml-2 align-items-center position-relative">
              <i className="fas fa-search position-absolute"></i>
              <FormControl
                type="search"
                placeholder="Search"
                className="bg-transparent"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav className="ml-auto">
            <Button
              variant="primary"
              className="text-capitalize px-3 py-1 d-none d-lg-block"
            >
              Your Own Online Presence
            </Button>
            <Button
              variant="light"
              className="px-3 py-1 navbar__button ml-md-2"
            >
              Sign in
            </Button>
            <Button variant="light navbar__mode px-3 py-1">
              <i class="fas fa-moon"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </>
  );
}

export default NavBar;

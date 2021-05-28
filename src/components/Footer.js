import React from "react";
import { Nav } from "react-bootstrap";
import LogoSvg from "./LogoSvg";

function Footer() {
  return (
    <footer className="container-fluid footer mt-5 py-4">
      <div className="row flex-column flex-lg-row">
        <div className="col-12 col-lg-4 mr-lg-auto">
          <Nav className="flex-column flex-lg-row flex-nowrap align-items-lg-start align-items-center">
            <LogoSvg width="3rem" />
            <h5 className="font-weight-bold ml-2 text-center text-lg-left">
              Build your Developer Portfolio and climb the engineering career
              ladder.
            </h5>
          </Nav>
        </div>

        <Nav className="px-5 justify-content-center text-center text-lg-left mt-4 mt-lg-0">
          <ul className="list-unstyled links">
            <li> <a href="#" className="text-decoration-none">Search</a> </li>
            <li> <a href="#" className="text-decoration-none">Articles</a></li>
            <li> <a href="#" className="text-decoration-none">Talks</a></li>
            <li> <a href="#" className="text-decoration-none">Podcasts</a></li>
            <li> <a href="#" className="text-decoration-none">Topics</a></li>
            <li> <a href="#" className="text-decoration-none">Machine</a></li>
          </ul>
        </Nav>
        <Nav className="px-5 justify-content-center text-center text-lg-left">
          <ul className="list-unstyled links">
            <li> <a href="#" className="text-decoration-none">Pricing</a></li>
            <li> <a href="#" className="text-decoration-none">Store</a></li>
            <li> <a href="#" className="text-decoration-none">support@support.io</a></li>
          </ul>
        </Nav>
      </div>
      <div className="rights text-right pt-4">
        <span>©egghead.io</span>
        <a href="#" className="ml-4">Terms &amp; Conditions</a>
        <span className="ml-4"> This a clone land-page </span>
        
      </div>
    </footer>
  );
}

export default Footer;

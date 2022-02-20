import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {


  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top"    >
        <div className="container-fluid">
          <a className="navbar-brand" href="https://arkajainuniversity.ac.in/">
            <span className="navbar_logo_A">A</span>
            <span className="logo_text1">RKA</span>
            <span className="navbar_logo_jain">JAIN </span>
            <span className="navbar_logo_A">U</span>
            <span className="logo_text1">NIVERSITY</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 text-center"
              id="navbar_menu"
            >
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about" >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/scope" >
                  Scope
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/committee" >
                  Committee
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/registration" >
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact" >
                  Contact Us
                </Link>
              </li>



            </ul>
            <div className="container" id="fas_icons">
              <a href="https://twitter.com/arka_jain" className="whatsapp ">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/arkajainuniversity/?hl=en"
                className="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/arkajainuniversity/"
                className="facebook "
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import "../App.css";

export default class Navigation extends Component {
  render() {
    return (
      <>
        {/* <div class='row'>
        
        <Navbar id="upper">
        <div class='col-6'>
          <Navbar.Brand id="webName">GrapOne</Navbar.Brand>
          </div>
          <Navbar.Collapse>
            <div class='col-3'>
          <i class="fas fa-map-marker-alt" id='locAwesom'></i>
          </div>
          <div class='col-3'>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>  
      </div>        
      </Navbar.Collapse>
        </Navbar>
        </div> */}
        <nav class="navbar">
          <div class="brand-title">GrabOne</div>
          <a href="/" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <div class="navbar-links">
            <ul>
              <li>
                <i class="fas fa-map-marker-alt" id="locAwesom"></i>
              </li>
              <li>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

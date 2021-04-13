import React, { Component } from "react";
import { Container, NavDropdown, Row, Col } from "react-bootstrap";
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
                <NavDropdown title="Aukland" id="collasible-nav-dropdown">
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
                <i class=" down1 fas fa-chevron-down"></i>
              </li>
              <li>
                <a href="/">
                  <i class="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-user-alt"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="down2 fas fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="far fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="/" class="subscribe">
                  Subscribe
                </a>
              </li>
              <li>
                <div class="vl"></div>
              </li>
              <li class="power">
                <Container>
                  <Row>
                    <Col style={{ fontSize: "10px" }}>Powered by</Col>
                    <Col style={{ fontSize: "25px" }}>
                      NZ
                      <span
                        style={{
                          color: "black",
                          fontFamily: "Russo One, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        ME
                      </span>
                    </Col>
                  </Row>
                </Container>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

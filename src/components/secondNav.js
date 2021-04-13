import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "../App.css";

export default class SecondNav extends Component {
  render() {
    return (
      <>
        {/* <Navbar id="secondNav" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Browse Category</Navbar.Brand>
          <Nav className="mr-auto Secnavbar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar> */}

        {/* <Navbar id="secondNav" bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav class="links" href="#home">
                Home
              </Nav>
              <Nav class="links" href="#link">
                Link
              </Nav>
              <NavDropdown id="basic-nav-dropdown">
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
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar> */}

        <Navbar id="secondNav" collapseOnSelect expand="sm">
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav id="links">
                <Nav.Link
                  style={{ textDecoration: "none", color: "#666769" }}
                  class="linkList"
                  href="/"
                >
                  Browse Categories
                </Nav.Link>
                <Nav.Link>
                  <i class="down3 fas fa-chevron-down"></i>
                </Nav.Link>
                <Nav.Link
                  style={{
                    textDecoration: "none",
                    color: "#666769",
                    marginLeft: "50px",
                  }}
                  class="linkList"
                  href="/"
                >
                  What's New
                </Nav.Link>
                <Nav.Link
                  style={{
                    textDecoration: "none",
                    color: "#666769",
                    marginLeft: "50px",
                  }}
                  class="linkList"
                  href="/"
                >
                  Trending
                </Nav.Link>
                <Nav.Link
                  style={{
                    textDecoration: "none",
                    color: "#666769",
                    marginLeft: "50px",
                  }}
                  class="linkList"
                  href="/"
                >
                  For You
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
      </>
    );
  }
}

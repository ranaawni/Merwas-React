import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  FormControl,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import "../App.css";

export default class SecondNav extends Component {
  render() {
    return (
      <>
        <Navbar id="secondNav" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br/>
        <br/>
      </>
    );
  }
}
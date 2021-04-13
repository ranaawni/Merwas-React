import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container containerFooter">
        <Container>
          <Row>
            <Col xs>
              <p>Follow us on</p>
              <p>
                <i class="fab fa-facebook fa-2x"></i>
                <i class="fab fa-twitter-square fa-2x"></i>
                <i class="fab fa-instagram fa-2x"></i>
                <i class="fab fa-youtube fa-2x"></i>
              </p>
              <p id="textGet">Get app exclusive deals</p>
              <p>
                <button id="downloadbtn">Download Our App</button>
              </p>
            </Col>
            <Col xs></Col>
            <Col xs></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;

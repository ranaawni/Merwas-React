import React from "react";
import "../App.css";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

import card11 from "../assets/card11.jpg";
import card12 from "../assets/card12.jpg";
import card13 from "../assets/card13.jpg";
import card14 from "../assets/card14.jpg";

function Collections() {
  return (
    <div id="featuredSec">
      <Container id="firstPart">
        <Row>
          <Col class="col-6" id="featuredText">
            Collections
          </Col>

          <Col class="col-6" id="featuredBtn">
            <button type="button" class="btnFeatured">
              view more {">"}
            </button>
          </Col>
        </Row>
        <br />
        <br />

        <Row>
          <CardDeck id="featurSec">
            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card11} />
              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle1">
                  Go Local & Support NZ Business
                </Card.Title>
                <Card.Text class="cardText1">Multiple Deals</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter"></Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card11} />
              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle1">
                  Go Local & Support NZ Business
                </Card.Title>
                <Card.Text class="cardText1">Multiple Deals</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter"></Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card11} />
              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle1">
                  Go Local & Support NZ Business
                </Card.Title>
                <Card.Text class="cardText1">Multiple Deals</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter"></Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card11} />
             
              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle1">
                  Go Local & Support NZ Business
                </Card.Title>
                <Card.Text class="cardText1">Multiple Deals</Card.Text>
              </Card.Body>

              <Card.Footer class="cardFooter"></Card.Footer>
              
            </Card>
          </CardDeck>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Collections;

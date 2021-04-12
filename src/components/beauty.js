import React from "react";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Button,
  CardDeck,
} from "react-bootstrap";

import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";
import card7 from "../assets/card7.jpg";
import card8 from "../assets/card8.jpg";
import card9 from "../assets/card9.jpg";
import card10 from "../assets/card10.jpg";

function Beauty() {
  return (
    <div id="featuredSec">
      <Container id="firstPart">
        <Row>
          <Col class="col-6" id="featuredText">
            Beauty, Massage & Spa
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
              <Card.Img class="card-image-F" src={card7} />
              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle">
                  Three-Day Abel Tasman Self Guided Walk
                </Card.Title>
                <Card.Text class="cardText">Wairakei Terraces</Card.Text>
                <Card.Text id="secText">Wairakei</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">118 bought</small>
                <small className="text-muted">
                  <span class="price1">$1,445</span>
                  <span class="price2">$1,095</span>
                </small>
              </Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card8} />

              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle">
                  {" "}
                  Thermal Hot Pool Entry (14 Years & Over Only)
                </Card.Title>
                <Card.Text class="cardText">Wairakei Terraces</Card.Text>
                <Card.Text id="secText">Wairakei</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">14890 bought</small>
                <small className="text-muted">
                  <span class="price12">$25</span>
                  <span class="price2">$15</span>
                </small>
              </Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card9} />
              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle">
                  Three-Day Abel Tasman Self Guided Walk
                </Card.Title>
                <Card.Text class="cardText">
                  Three-Day Abel Tasman Self Guided Walk.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">118 bought</small>
                <small className="text-muted">
                  <span class="price1">$1,445</span>
                  <span class="price2">$1,095</span>
                </small>
              </Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card10} />

              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle">
                  {" "}
                  Thermal Hot Pool Entry (14 Years & Over Only)
                </Card.Title>
                <Card.Text class="cardText">Wairakei Terraces</Card.Text>
                <Card.Text id="secText">Wairakei</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">14890 bought</small>
                <small className="text-muted">
                  <span class="price12">$25</span>
                  <span class="price2">$15</span>
                </small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Row>
      </Container>

      <br />
      <br />
    </div>
  );
}

export default Beauty;

import React from "react";
import "../App.css";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

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
            <button
              type="button"
              class="btnFeatured"
              style={{ marginLeft: "200px" }}
            >
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
                <small className="text-muted" style={{ marginTop: "20px" }}>
                  118 bought
                </small>
                <small className="text-muted">
                  <span class="price2" style={{ marginTop: "20px" }}>
                    $1,095
                  </span>
                </small>
              </Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card8} />

              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle">
                  {" "}
                  Thermal Hot Pool Entry (14 Years)
                </Card.Title>
                <Card.Text class="cardText">Wairakei Terraces</Card.Text>
                <Card.Text id="secText">Wairakei</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">14890 bought</small>
                <small className="text-muted">
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
                <Card.Text class="cardText">Wairakei Terraces</Card.Text>
                <Card.Text id="secText">Wairakei</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">118 bought</small>
                <small className="text-muted">
                  <span class="price2">$1,095</span>
                </small>
              </Card.Footer>
            </Card>

            <Card id="imgCardF" class="mb-4">
              <Card.Img class="card-image-F" src={card10} />

              <Card.Body class="cardBodyF">
                <Card.Title class="cardTitle">
                  {" "}
                  Thermal Hot Pool Entry (14 Years)
                </Card.Title>
                <Card.Text class="cardText">Wairakei Terraces</Card.Text>
                <Card.Text id="secText">Wairakei</Card.Text>
              </Card.Body>
              <Card.Footer class="cardFooter">
                <small className="text-muted">14890 bought</small>
                <small className="text-muted">
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

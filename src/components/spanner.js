import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import summer from "../assets/summer.jpg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";

export default class Spanner extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col id="img">
              <img id="summerImg" src={summer} alt="summer" />
            </Col>
          </Row>
          <Row>
            <Col id="sign">
              <a className="links" href="/">
                Sign in
              </a>{" "}
              <span id="text">
                and purchase any deal on site to be in the draw to win your
                share of our prize pool worth over $10,000!
              </span>
              <a className="links" href="/">
                {" "}
                T's & c's apply.
              </a>
            </Col>
          </Row>
        </Container>

        <CardDeck id="discSec">
          <Card id="desCard" class='"mb-4'>
            <Card.Body>
              <Card.Title id="cardHeader">Discover</Card.Title>
              <hr />
              <Card.Text>
                <ul class="item">
                  <li>Featured Auckland deals</li>
                  <br />
                  <li>Collections</li>
                  <br />
                  <li>Escapes</li>
                  <br />
                  <li>Picked for you</li>
                  <br />
                  <li>Activities, Events & Outdoors</li>
                  <br />
                  <li>Store</li>
                  <br />
                  <li>Restaurants, Bars, Cafes</li>
                  <br />
                  <li>Beauty, Massage & Spa</li>
                  <br />
                  <li>House & Garden</li>
                  <br />
                  <li>Fitness & Sports</li>
                  <br />
                  <li>Automotive</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="imgCard" style={{ height: "470px", width: "700px" }}>
            <Card.Img className="card-image" src={card1} />
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">
                Three-Day Abel Tasman Self Guided Walk
              </Card.Title>
              <Card.Text className="cardText">
                Three-Day Abel Tasman Self Guided Walk.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer id="cardFooter1" class="cardFooter">
              <small className="text-muted">118 bought</small>
              <small className="text-muted">
                <span className="price1">$1,445</span>
                <span className="price2">$1,095</span>
              </small>
            </Card.Footer>
          </Card>

          <Card
            id="imgCard"
            class="mb-4"
            style={{ height: "470px", width: "700px" }}
          >
            <Card.Img class="card-image" src={card2} />

            <Card.Body class="cardBody">
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
                <span className="price12">$25</span>
                <span className="price2">$15</span>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>

        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

import React from "react";

// images
import HomePageImage from "../images/Mobile Marketing-bro.png";

// Bootstrap
import { Container, Col, Row } from "react-bootstrap";

function TopSectionHome() {
  return (
    <div className="light-green-background">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <h1 id="heading-title">
              Cleaning code does <span className="green-text">NOT</span> take
              time. <span className="green-text">NOT</span> cleaning code does
              take time.
            </h1>
            <p id="quote-author">- Robert C. Martin</p>
          </Col>
          <Col xs={6}>
            <img
              className="Home-screen-img"
              src={HomePageImage}
              alt="Home-Page-Img"
            />
            <a className="attribution" href="https://storyset.com/business">
              Business illustrations by Storyset
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopSectionHome;

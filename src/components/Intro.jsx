import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Intro.css";

function Intro() {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="intro-image">
          <img src="/assets/BillGates.png" alt="Intro" />
        </Col>
        <Col md={6} className="intro-content">
          <div className="intro-text">
            <h1><b>Meet Our Team</b></h1>
            <p>Step into our luxurious salon and transform your look with our expert stylists and pampering services</p>
          </div>
          <button className="intro-btn">Learn More</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;

  


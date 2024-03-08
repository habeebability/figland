import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import galImg1 from "../assets/gal-11.png";
import galImg2 from "../assets/gal-22.png";
import galImg3 from "../assets/gal-33.png";
import galImg4 from "../assets/gal-44.png";
import galImg5 from "../assets/gal-55.png";
import galImg6 from "../assets/gal-66.png";
import galImg7 from "../assets/gal-77.png";

import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-div py-5 text-white ">
      <div className="text-center">
        <h1>Gallery</h1>
        <p>
          We focus on ergonomics and meeting
          <span className="d-block">
            you where you work. It's only a keystroke away.
          </span>
        </p>
      </div>
      <Container>
        <div className=" gal-image-div px-5">
          <Row className=" g-3">
            <Col xs={12} lg={3}>
              <Image src={galImg1} fluid />
            </Col>
            <Col xs={12} lg={3}>
              <Image src={galImg2} fluid />
            </Col>
            <Col xs={12} lg={3}>
              <Image src={galImg3} fluid />
            </Col>
            <Col xs={12} lg={3}>
              <Image src={galImg4} fluid />
            </Col>
          </Row>
          <Row className=" my-5 gal-div2 ">
            <Col xs={12} lg={3}>
              <Image src={galImg5} fluid />
            </Col>
            <Col lg={3}>
              <Image xs={12} src={galImg6} fluid />
            </Col>
            <Col xs={12} lg={6}>
              <Image src={galImg7} fluid />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Gallery;

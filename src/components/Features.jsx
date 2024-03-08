import React from "react";
import "./Features.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import featImg from "../assets/feat.png";
import feat2Img from "../assets/feat2.png";
import { GiKnifeFork } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { ImInfinite } from "react-icons/im";
function Features() {
  const featIconStyles = { color: "#02E4C0", fontSize: "2rem" };
  return (
    <div className="features-div p-3 text-white">
      <Container className="text-center">
        <h1 className="my-4">Features</h1>
        <p className="my-4">
          Most calendars are designed for teams. Slate is designed
          <span className="feat-span">
            for freelancers who want a simple way to plan their schedule.{" "}
          </span>
        </p>
      </Container>

      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <div className="feat-Img">
              <Image className="feat1Img " src={featImg} fluid />
              <Image className="feat2Img mx-auto" src={feat2Img} fluid />
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="d-flex flex-column">
              <div>
                <h3 className="pb-2 pt-5">
                  <GiKnifeFork style={featIconStyles} /> A single source
                  <span className="feat-span">of truth</span>
                </h3>
                <p className="pb-5">
                  When you add work to your Slate calendar we automatically
                  calculate useful insights
                </p>
              </div>

              <div>
                <div className="d-flex justify-content-between"></div>
                <h3 className="pb-2">
                  <RiAliensFill style={featIconStyles} /> Intuitive interface
                </h3>
                <p className="pb-5">
                  When you add work to your Slate calendar we automatically
                  calculate useful insights
                </p>
              </div>

              <div>
                <h3 className="pb-2">
                  <ImInfinite style={featIconStyles} /> Or with rules
                </h3>
                <p className="pb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, et.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;

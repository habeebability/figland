import React from "react";
import "./Content.css";
import { Card, Col, Button, Container, Row } from "react-bootstrap";
import BoardNoti from "../assets/Board-noti.png";
import screenMask from "../assets/screen-mask.png";

function Content() {
  return (
    <div className="content-div py-5 text-white ">
      <div className="text-center">
        <h1>Content</h1>
        <p className="my-4">
          We focus on ergonomics and meeting you where you work.
          <span className="d-block">It's only a keystroke away. </span>
        </p>
      </div>
      <Container>
        <Row className="justify-content-center g-0 text-center text-black">
          <Col className="d-flex justify-content-center m-4" lg={4}>
            <Card style={{ width: "23rem", padding: "2rem" }}>
              <Card.Body>
                <Card.Title className="my-4">Work</Card.Title>
                <Card.Text>
                  Ever wondered if you're too reliant on a client for work?
                  Slate helps you identify .
                </Card.Text>
                <Button variant="primary">Sign up</Button>
              </Card.Body>
              <Card.Img className="mt-4" src={screenMask} />
            </Card>
          </Col>
          <Col className="d-flex justify-content-center m-4" lg={4}>
            <Card style={{ width: "23rem", padding: "2rem" }}>
              <Card.Body>
                <Card.Title className="my-4">Design with real data</Card.Title>
                <Card.Text>
                  Ever wondered if you're too reliant on a client for work?
                  Slate helps you identify .
                </Card.Text>
                <Button variant="primary">Try for free</Button>
              </Card.Body>
              <Card.Img className="mt-4" src={BoardNoti} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;

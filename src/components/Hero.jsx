import React from "react";
import "./Hero.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import HeroGallery from "./HeroGallery";

function Hero() {
  return (
    <div className="hero-container text-center py-5">
      <Container>
        <h1 className="heading-primary">
          Work at the speed <span className="d-block">of thought</span>
        </h1>
        <p className="mt-4">
          Most calendars are designed for teams. Slate is designed for
          <span className="d-block">
            freelancers who want a simple way to plan their schedule.
          </span>
        </p>
        <div className="button-group d-flex justify-content-center my-5 ">
          <Button className="m-2 px-5 py-3 primary">Try for Free</Button>
          <Button className="m-2 px-5 py-3" variant="outline-light">
            Learn More
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <HeroGallery />
        </div>
      </Container>
    </div>
  );
}

export default Hero;

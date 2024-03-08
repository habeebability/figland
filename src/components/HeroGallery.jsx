import React from "react";
import "./HeroGallery.css";
// import heroImg1 from "../assets/dash-pic.png";
// import heroImg2 from "../assets/Boards.png";
// import heroImg3 from "../assets/ChatBot.png";
import heroBg from "../assets/hero-bg.png";

function HeroGallery() {
  return (
    <div className="h-auto">
      <img className="img-fluid" src={heroBg} alt="" />
    </div>
    // <div className="hero-gallery py-4">
    //   <div className="heroImg1-div">
    //     <img className="heroImg1" src={heroImg1} alt="" />
    //   </div>
    //   <div className="heroImg1-and-2">
    //     <img className="heroImg2" src={heroImg2} alt="" />
    //     <img className="heroImg3" src={heroImg3} alt="" />
    //   </div>
    // </div>
  );
}

export default HeroGallery;

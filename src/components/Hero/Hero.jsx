import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";
import HeroMain from "./HeroMain";
import HeroSection2 from "./HeroSection2";

const Hero = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HeroMain></HeroMain>
      <HeroSection2></HeroSection2>
    </div>
  );
};

export default Hero;

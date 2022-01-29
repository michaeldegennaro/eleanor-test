import {
  HeroContent,
  StyledArrowDown,
  StyledHeroSection,
  ImageWrapper,
  Shadow,
  CarWrapper,
  Heading,
} from "../styles/sections/HeroSection.styled";
import { useEffect, useRef } from "react";
import { heroRenderAnimations } from "../gsap/Animations";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import useWindowSize from "../../hooks/WindowSize";
import gsap from "gsap";

export const HeroSection = () => {
  const size = useWindowSize();
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(boxRef.current, { x: "0%" });
  });

  useEffect(() => {
    heroRenderAnimations();
  }, []);

  return (
    <StyledHeroSection className="container" id="hero-section">
      <Heading>
        <div className="image-container">
          <img src="./images/header.png" />
        </div>
      </Heading>
      <HeroContent>
        <h1 className="hero-content">Drive a new car every month.</h1>
        <p className="hero-content">Available On The App Store</p>
        <StyledArrowDown href="#about">
          <HiOutlineArrowNarrowRight className="hero-content" size={60} />
        </StyledArrowDown>
      </HeroContent>
      <ImageWrapper className="mobile-image"></ImageWrapper>
      <CarWrapper
        className="car-image"
        left={size.width > 1030 ? 0 : -10}
        height={size.width > 1030 ? 550 : 650}
        z="1"
        images="white-car-desktop.png"
        size={30}
        top={size.width > 1030 ? 47 : 35}
      />
      <CarWrapper
        className="car-image"
        left={size.width > 1030 ? 3 : 12}
        height={620}
        z="2"
        images="porsche-desktop.png"
        size={45}
        top={size.width > 1030 ? 47 : 40}
      />
      <CarWrapper
        className="car-image"
        left={size.width > 1030 ? 20 : 31}
        height={620}
        z="1"
        images="car3-desktop.png"
        size={39}
        top={size.width > 1030 ? 45 : 38}
      />
      <Shadow className="shadow" />
    </StyledHeroSection>
  );
};

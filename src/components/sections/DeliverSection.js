import {
  StyledDeliverSection,
  DeliverInfoContainer,
  ImageContainer,
  PhoneWrapper,
  Shadow,
  CarWrapper,
  MapWrapper,
} from "../styles/sections/DeliverSection.styled";
import gsap from "gsap";
import useWindowSize from "../../hooks/WindowSize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import { deliverRenderAnimations } from "../gsap/Animations";

export const DeliverSection = () => {
  const size = useWindowSize();
  let a = window.screen.width;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (a > 1070) {
      gsap.set(".map", { opacity: 0, x: "50%" });
      gsap.set(".car-deliver", { opacity: 0, x: "-50%" });
    }
    gsap.set(
      ".header-deliver, .text-deliver, .phone-deliver, .shadow-deliver",
      {
        opacity: 0,
        y: "-50%",
      }
    );
  }, []);

  useEffect(() => {
    deliverRenderAnimations();
  }, [size]);

  return (
    <>
      <StyledDeliverSection>
        <DeliverInfoContainer>
          <h1 className="header-deliver">Delivered to your door.</h1>
          <h2 className="text-deliver">
            Eleanor works with your schedule to have a white-glove delivery
            service deliver your new vehicle right to your door.
          </h2>
        </DeliverInfoContainer>
        <ImageContainer>
          <PhoneWrapper className="phone-deliver" />
          <Shadow className="shadow-deliver" />
          <MapWrapper className="map" />
          <CarWrapper className="car-deliver" />
        </ImageContainer>
      </StyledDeliverSection>
    </>
  );
};

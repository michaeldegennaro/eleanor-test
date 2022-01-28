import {
  StyledTradeSection,
  CarImageContainer,
  PhoneWrapper,
  SelectInfoContainer,
  Shadow,
} from "../styles/sections/TradeSection.styled";
import { tradeRenderAnimations } from "../gsap/Animations";
import gsap from "gsap";
import useWindowSize from "../../hooks/WindowSize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import { deliverRenderAnimations } from "../gsap/Animations";

export const TradeSection = () => {
  const size = useWindowSize();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".header-trade, .text-trade, .phone-image-trade, .shadow-trade", {
      opacity: 0,
      y: "-50%",
    });
    gsap.set(".trade-image-container", { opacity: 1, x: "-150%" });
  }, []);

  useEffect(() => {
    tradeRenderAnimations();
  }, [size]);

  return (
    <>
      <StyledTradeSection>
        <CarImageContainer className="trade-image-container">
          <PhoneWrapper className="phone-image-trade"></PhoneWrapper>
          <Shadow className="shadow-trade" />
        </CarImageContainer>
        <SelectInfoContainer>
          <h1 className="header-trade">Trade in your car every month.</h1>
          <h2 className="text-trade">
            Use Eleanor Trade-In Credits to trade in your vehicle for something
            else in our luxurious inventory. Nothing says “June” like a new car!
          </h2>
        </SelectInfoContainer>
      </StyledTradeSection>
    </>
  );
};

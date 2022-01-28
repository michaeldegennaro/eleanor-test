import {
  StyledBoxSection,
  StyledBox,
} from "../styles/sections/BoxSection.styled";
import { BoxRenderAnimations } from "../gsap/Animations";
import gsap from "gsap";
import useWindowSize from "../../hooks/WindowSize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import { deliverRenderAnimations } from "../gsap/Animations";

export const BoxSection = () => {
  const size = useWindowSize();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".box-coin, .box-page, .box-repair", {
      opacity: 0,
      y: "-20%",
    });
  }, []);

  useEffect(() => {
    BoxRenderAnimations();
  }, [size]);

  return (
    <>
      <StyledBoxSection className="box-container">
        <StyledBox className="box-coin" images="coin.png">
          <div>
            <h1>SIMPLE MONTHLY PRICING</h1>
            <p>
              Pick your plan, pay the monthly price. Thats it. No hidden fees!
            </p>
          </div>
        </StyledBox>
        <StyledBox className="box-page" images="page.png">
          <div>
            <h1>VEHICLE INSURANCE INCLUDED</h1>
            <p>
              That's right, you're covered. All Eleanor plans include insurance
              coverage.
            </p>
          </div>
        </StyledBox>
        <StyledBox className="box-repair" images="repair.png">
          <div>
            <h1>MAINTENANCE IS COVERED</h1>
            <p>
              Leave it us. Don't worry about maintaining your vehicle. Eleanor
              covers that as well.
            </p>
          </div>
        </StyledBox>
      </StyledBoxSection>
    </>
  );
};

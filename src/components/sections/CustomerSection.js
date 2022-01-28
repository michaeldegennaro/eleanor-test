import {
  StyledCustomerSection,
  CustomerImageContainer,
  CustomerInfoContainer,
  CarWrapper,
  CustomerFooterSection,
} from "../styles/sections/CustomerSection.styled";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { customerRenderAnimations } from "../gsap/Animations";
import gsap from "gsap";
import useWindowSize from "../../hooks/WindowSize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import { deliverRenderAnimations } from "../gsap/Animations";

export const CustomerSection = () => {
  const size = useWindowSize();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(".customer-image-container", { opacity: 1, width: "0%" });
    gsap.set(".car-customer", { opacity: 0, x: "-50%" });
    gsap.set(".customer-info-container", {
      opacity: 0,
      y: "-30%",
    });
  }, []);

  useEffect(() => {
    size.width > 1070
      ? customerRenderAnimations("40%")
      : customerRenderAnimations("100vw");
  }, [size]);

  return (
    <>
      <StyledCustomerSection className="customer-container">
        <CustomerImageContainer className="customer-image-container" />
        <CustomerInfoContainer className="customer-info-container">
          <h1 className="header-customer">
            Customers with that new car smell.
          </h1>
          <h2 className="text-customer">
            “With Eleanor I was able to drive 2 of my dream cars this year! The
            process is always easy and affordable!”
          </h2>
          <p className="quote">Alex Bateman, Interface Designer</p>
          <hr />
          <p className="app-pointer">Available On The App Store</p>
          <HiOutlineArrowNarrowRight className="customer-arrow" size={60} />
        </CustomerInfoContainer>
        <CarWrapper className="car-customer" />
        <CustomerFooterSection>
          <img src="./images/header-black.png" />
        </CustomerFooterSection>
      </StyledCustomerSection>
    </>
  );
};

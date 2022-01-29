import gsap from "gsap";
import {
  scrollTriggerSelect,
  scrollTriggerDeliver,
  scrollTriggerTrade,
  scrollTriggerBox,
  scrollTriggerCustomer,
} from "./Constants";

//************************************ */
//Animations for Hero Section
//************************************ */

export const heroRenderAnimations = () => {
  gsap.from(".container", { duration: 0.4, x: "-100%" });
  gsap.from(".mobile-image, .shadow", {
    duration: 0.5,
    x: "10%",
    delay: 0.8,
    opacity: 0,
  });
  gsap.from(".car-image", {
    duration: 0.3,
    x: "-200%",
    delay: 0.4,
  });
  gsap.from(".hero-content", {
    duration: 0.5,
    y: "-100%",
    delay: 0.8,
    opacity: 0,
  });
};

//************************************ */
//Animations for Select Section
//************************************ */

export const selectRenderAnimations = () => {
  gsap.to(".info-container", {
    scrollTrigger: scrollTriggerSelect,
    duration: 0.5,
    x: "0%",
    opacity: 1,
  });
  gsap.to(".header", {
    scrollTrigger: scrollTriggerSelect,
    duration: 0.5,
    y: "0%",
    opacity: 1,
  });
  gsap.to(".text", {
    scrollTrigger: scrollTriggerSelect,
    duration: 0.5,
    y: "0%",
    opacity: 1,
    delay: 0.5,
  });
  gsap.to(".car-picture", {
    scrollTrigger: scrollTriggerSelect,
    duration: 0.5,
    x: "0%",
    opacity: 1,
  });
  gsap.to(".a, .car-info, .favicon", {
    scrollTrigger: scrollTriggerSelect,
    duration: 0.5,
    y: "0%",
    opacity: 1,
    delay: 0.5,
  });
};

export const selectStateChangeAnimations = () => {
  gsap.fromTo(
    ".car-info, .favicon, .a",
    {
      duration: 0.3,
      y: "0%",
      opacity: 1,
    },
    { y: "-60px", opacity: 0, duration: 0.3 }
  );
  gsap.fromTo(
    ".car-picture",
    {
      duration: 0.5,
      x: "0%",
      opacity: 1,
    },
    { x: "-150px", opacity: 0, duration: 0.3 }
  );
};
export const selectStateChangeInAnimations = () => {
  gsap.fromTo(
    ".car-info, .favicon, .a",
    { y: "60px", opacity: 0, duration: 0.3 },
    {
      duration: 0.3,
      y: "0%",
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".car-picture",
    { x: "150px", opacity: 0, duration: 0.3 },
    {
      duration: 0.5,
      x: "0%",
      opacity: 1,
    }
  );
};

//************************************ */
//Animations for Deliver Section
//************************************ */

export const deliverRenderAnimations = () => {
  gsap.to(".header-deliver", {
    scrollTrigger: scrollTriggerDeliver,
    duration: 0.5,
    y: "0%",
    opacity: 1,
  });
  gsap.to(".text-deliver", {
    scrollTrigger: scrollTriggerDeliver,
    duration: 0.5,
    y: "0%",
    opacity: 1,
    delay: 0.5,
  });
  gsap.to(".map", {
    scrollTrigger: scrollTriggerDeliver,
    duration: 0.5,
    x: "0%",
    opacity: 1,
  });
  gsap.to(".car-deliver", {
    scrollTrigger: scrollTriggerDeliver,
    duration: 0.5,
    x: "0%",
    opacity: 1,
    delay: 0.5,
  });
  gsap.to(".phone-deliver, .shadow-deliver", {
    scrollTrigger: scrollTriggerDeliver,
    duration: 0.5,
    y: "0%",
    opacity: 1,
    delay: 0.3,
  });
};

//************************************ */
//Animations for Trade Section
//************************************ */

export const tradeRenderAnimations = () => {
  gsap.to(".header-trade", {
    scrollTrigger: scrollTriggerTrade,
    duration: 0.5,
    y: "0%",
    opacity: 1,
    delay: 0.3,
  });
  gsap.to(".text-trade", {
    scrollTrigger: scrollTriggerTrade,
    duration: 0.2,
    y: "0%",
    opacity: 1,
    delay: 0.8,
  });
  gsap.to(".trade-image-container", {
    scrollTrigger: scrollTriggerTrade,
    duration: 0.2,
    x: "0%",
    opacity: 1,
    delay: 0.1,
  });
  gsap.to(".car-deliver", {
    scrollTrigger: scrollTriggerTrade,
    duration: 0.5,
    x: "0%",
    opacity: 1,
    delay: 0.5,
  });
  gsap.to(".phone-image-trade, .shadow-trade", {
    scrollTrigger: scrollTriggerTrade,
    duration: 0.3,
    y: "0%",
    opacity: 1,
    delay: 0.5,
  });
};

//************************************ */
//Animations for Hero Section
//************************************ */

export const BoxRenderAnimations = () => {
  gsap.to(".box-coin", {
    scrollTrigger: scrollTriggerTrade,
    duration: 0.3,
    y: "0%",
    opacity: 1,
  });

  gsap.to(".box-page", {
    scrollTrigger: scrollTriggerBox,
    duration: 0.3,
    y: "0%",
    opacity: 1,
    delay: 0.3,
  });

  gsap.to(".box-repair", {
    scrollTrigger: scrollTriggerBox,
    duration: 0.3,
    y: "0%",
    opacity: 1,
    delay: 0.6,
  });
};

//************************************ */
//Animations for Hero Section
//************************************ */

export const customerRenderAnimations = (widthVal) => {
  gsap.to(".customer-image-container", {
    scrollTrigger: scrollTriggerCustomer,
    duration: 0.4,
    width: widthVal,
    opacity: 1,
  });
  gsap.to(".car-customer", {
    scrollTrigger: scrollTriggerCustomer,
    duration: 0.4,
    x: "0%",
    opacity: 1,
    delay: 0.3,
  });
  gsap.to(".customer-info-container", {
    scrollTrigger: scrollTriggerCustomer,
    duration: 0.3,
    y: "0%",
    opacity: 1,
    delay: 0.7,
  });
};

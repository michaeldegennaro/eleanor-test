import {
  StyledSelectSection,
  CarInfoContainer,
  SelectInfoContainer,
} from "../styles/sections/SelectSection.styled";
import { useState, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowSize from "../../hooks/WindowSize";
import {
  selectRenderAnimations,
  selectStateChangeAnimations,
  selectStateChangeInAnimations,
} from "../gsap/Animations";
import { carArray } from "../data/Data";

export const SelectSection = () => {
  let [currentCar, setCurrentCar] = useState(carArray[0]);
  const size = useWindowSize();
  let a = window.screen.width;
  gsap.registerPlugin(ScrollTrigger);

  const handleClick = () => {
    currentCar.make === "Porsche"
      ? setCurrentCar(carArray[1])
      : setCurrentCar(carArray[0]);
  };

  useEffect(() => {
    if (a > 1070) {
      gsap.set(".info-container", { opacity: 0, x: "10%" });
      gsap.set(".car-picture", { opacity: 0, x: "50%" });
    }
    gsap.set(".header, .text", { opacity: 0, y: "-50%" });
    gsap.set(".car-info, .favicon, .a", { opacity: 0, y: "-10%" });
  }, []);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    selectStateChangeInAnimations();
  }, [currentCar]);

  useEffect(() => {
    selectRenderAnimations();
  }, [a]);

  return (
    <StyledSelectSection>
      <CarInfoContainer className="info-container">
        <span>
          <div className="flipped">
            <HiOutlineArrowNarrowRight onClick={handleClick} size={40} />
          </div>
          <HiOutlineArrowNarrowRight
            onClick={handleClick}
            className="arrow"
            size={40}
          />
        </span>
        <h1 className="car-info">{currentCar.make}</h1>
        <p className="car-info">{currentCar.model}</p>
        <article>
          <img className="favicon mpg" src="./images/mpg.png" />
          <h3 className="car-info-mpg a">{currentCar.mpg}</h3>

          <img className="favicon speed" src="./images/speed.png" />
          <h3 className="car-info-speed a">{currentCar.hp}</h3>

          <img className="favicon hp" src="./images/hp.png" />
          <h3 className="car-info-hp a">{currentCar.speed}</h3>
          <img className="car-picture" src={currentCar.picture} />
        </article>
      </CarInfoContainer>
      <SelectInfoContainer>
        <h1 className="header">Select a vehicle from your phone.</h1>
        <h2 className="text">
          Select from a wide range of luxury vehicles in our inventory. Drive it
          for a month, trade it the next for something else you have always
          wanted to own.
        </h2>
      </SelectInfoContainer>
    </StyledSelectSection>
  );
};

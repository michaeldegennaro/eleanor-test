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

  gsap.registerPlugin(ScrollTrigger);

  const handleClick = () => {
    currentCar.make === "Porsche"
      ? setCurrentCar(carArray[1])
      : setCurrentCar(carArray[0]);
  };

  useEffect(() => {
    gsap.set(".info-container", { opacity: 0, x: "10%" });
    gsap.set(".header, .text", { opacity: 0, y: "-50%" });
    gsap.set(".car-picture", { opacity: 0, x: "50%" });
    gsap.set(".car-info, .favicon", { opacity: 0, y: "-10%" });
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
  }, [size]);

  return (
    <>
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
          <article>
            <h1 className="car-info">{currentCar.make}</h1>
            <p className="car-info">{currentCar.model}</p>
            <span className="item-1">
              <img className="favicon" src="./images/mpg.png" />
              <h3 className="car-info">{currentCar.mpg}</h3>
            </span>
            <span className="item-2">
              <img className="favicon" src="./images/speed.png" />
              <h3 className="car-info">{currentCar.hp}</h3>
            </span>
            <span className="item-3">
              <img className="favicon" src="./images/hp.png" />
              <h3 className="car-info">{currentCar.speed}</h3>
            </span>

            <img className="car-picture" src={currentCar.picture} />
          </article>
        </CarInfoContainer>
        <SelectInfoContainer>
          <h1 className="header">Select a vehicle from your phone.</h1>
          <h2 className="text">
            Select from a wide range of luxury vehicles in our inventory. Drive
            it for a month, trade it the next for something else you have always
            wanted to own.
          </h2>
        </SelectInfoContainer>
      </StyledSelectSection>
    </>
  );
};

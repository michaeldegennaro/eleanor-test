import styled, { keyframes } from "styled-components";

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 84vh;
  background: ${({ theme }) => theme.colors.yellow};
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 1030px) {
    height: 60vh;
  }
`;

export const Heading = styled.header`
  width: 200px;
  height: 100px;
  position: absolute;
  left: -38px;
  top: 90px;
  img {
    width: 15vw;
    left: -0.8rem;
    position: absolute;
    left: 134px;
  }
  @media (max-height: 750px) {
    top: 50px;
  }
  @media (max-width: 1030px) {
    img {
      width: 31vw;
      left: -0.8rem;
      position: absolute;
      left: 14vw;
      top: -65px;
    }
  }
`;

export const HeroContent = styled.section`
  width: 100%;
  max-width: 58ox;
  color: white;
  text-transform: uppercase;
  position: absolute;
  h1 {
    font-family: "Bebas Neue", cursive;
    letter-spacing: -0.2rem;
    line-height: 8vw;
    font-size: 8vw;
    font-weight: 500;
    white-space: wrap;
    position: relative;
    left: 95px;
    width: 50vw;
    height: 160px;
    bottom: 129px;
    text-align: start;
    top: -50px;
  }
  p {
    position: relative;
    height: 108px;
    left: 100px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 54px;
    letter-spacing: -0.470588px;
    color: ${({ theme }) => theme.colors.navyBlue};
    bottom: 60px;
    white-space: wrap;
    text-align: start;
    width: 500px;
  }
  div {
    margin: 2.5rem 0;
  }
  img {
    width: 300px;
    height: 20px;
  }
  @media (max-width: 1030px) {
    h1 {
      left: 10vw;
      font-size: 14vw;
      width: 75vw;
      line-height: 13vw;
      top: 10px;
    }
    p {
      left: 10vw;
      width: 300px;
    }
  }
`;

export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 124px;
  left: 370px;
  svg {
    font-size: 30px;
    color: #414a69;
  }
  @media (max-width: 1030px) {
    left: 40vw;
  }
  @media (max-width: 800px) {
    left: 65vw;
  }
  @media (max-width: 800px) {
    left: 75vw;
  }
`;

export const ImageWrapper = styled.div`
  background: url("./images/phoneImage1.png") center no-repeat;
  position: absolute;
  background-size: contain;
  width: 341px;
  height: 77vh;
  left: 74vw;
  top: 15vh;
  z-index: 2;
  @media (max-width: 1430px) {
    left: 64vw;
  }
  @media (max-width: 1030px) {
    display: none;
  }
`;

export const Shadow = styled.div`
  background-color: black;
  position: absolute;
  width: 341px;
  height: 700.43px;
  left: 74vw;
  top: 19vh;
  mix-blend-mode: normal;
  opacity: 0.46;
  filter: blur(41.45px);
  border-radius: 35px;
  @media (max-width: 1430px) {
    left: 64vw;
  }
  @media (max-width: 1030px) {
    display: none;
  }
`;

export const CarWrapper = styled.div`
  background: url("./images/${(props) => props.images}") center no-repeat;
  position: absolute;
  background-size: contain;
  width: ${(props) => props.size}vw;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}vw;
  top: ${(props) => props.top}vh;
  z-index: ${(props) => props.z};
  @media (max-width: 1030px) {
    width: ${(props) => props.size + 30}vw;
    height: ${(props) => props.height - 220}px;
  }
`;

import styled, { keyframes } from "styled-components";

export const StyledDeliverSection = styled.section`
  width: 100%;
  height: 95vh;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 1070px) {
    top: 100vw;
  }
  @media (max-width: 800px) {
    top: 70vw;
  }
  @media (max-width: 600px) {
    top: 35vw;
  }
`;

export const DeliverInfoContainer = styled.section`
  width: 32%;
  height: 38vw;
  color: ${({ theme }) => theme.colors.navyBlue};
  text-transform: uppercase;
  position: absolute;
  top: 18vw;
  left: 4vw;
  text-align: start;
  h1 {
    font-family: "Bebas Neue", cursive;
    letter-spacing: -0.1rem;
    line-height: 6vw;
    font-size: 6.1vw;
    font-weight: 100;
    width: 30vw;
    white-space: wrap;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-size: 1.1vw;
    width: 290px;
    font-weight: lighter !important;
    position: relative;
    bottom: 50px;
    color: black;
  }
  @media (max-width: 1070px) {
    top: 11vw;
    h1 {
      position: relative;
      line-height: 10vw;
      font-size: 10vw;
      font-weight: 100;
      width: 100vw;
      white-space: wrap;
      bottom: 200px;
    }
    h2 {
      font-size: 2.5vw;
      font-weight: 50;
      width: 90vw;
      line-height: 6vw;
      font-weight: 100;
      position: relative;
      bottom: 220px;
    }
  }
`;

export const ImageContainer = styled.section``;

export const PhoneWrapper = styled.div`
  background: url("./images/deliveryImage.png") center no-repeat;
  position: absolute;
  background-size: contain;
  width: 341px;
  height: 77vh;
  left: 64vw;
  top: 22vh;
  z-index: 4;
  @media (max-width: 1430px) {
    left: 64vw;
  }
  @media (max-width: 1070px) {
    left: 30vw;
    top: 35vw;
  }
  @media (max-width: 800px) {
    top: 35vw;
    height: 60vh;
    left: 18vw;
  }
  @media (max-width: 610px) {
    left: 11vw;
    height: 40vh;
    top: 23vw;
  }
`;

export const Shadow = styled.div``;

export const CarWrapper = styled.div`
  background: url("./images/porsche-desktop.png") center no-repeat;
  position: absolute;
  right: 37vw;
  top: 25vw;
  width: 33vw;
  height: 77vh;
  background-size: contain;
  z-index: 2;
  @media (max-width: 1070px) {
    display: none;
  }
`;

export const MapWrapper = styled.div`
  background: url("./images/map.png") center no-repeat;
  position: absolute;
  top: 13vw;
  left: 45vw;
  width: 52vw;
  height: 77vh;
  background-size: contain;
  z-index: 1;
  @media (max-width: 1070px) {
    width: 100vw;
    height: 77vh;
    left: 0px;
    top: 35vw;
  }
  @media (max-width: 800px) {
    top: 25vw;
  }
  @media (max-width: 610px) {
    top: -9vw;
  }
`;

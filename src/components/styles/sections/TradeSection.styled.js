import styled, { keyframes } from "styled-components";

export const StyledTradeSection = styled.section`
  width: 100%;
  height: 95vh;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: -16vw;
  background-color: white;
  @media (max-width: 1070px) {
    top: 120vw;
  }
  @media (max-width: 800px) {
    top: 70vw;
  }
  @media (max-width: 600px) {
    top: -25vw;
  }
`;

export const CarImageContainer = styled.section`
  background: url("./images/porsche-head.png") center no-repeat;
  background-size: contain;
  width: 32%;
  height: 820px;
  background-color: ${({ theme }) => theme.colors.yellow};
  text-transform: uppercase;
  position: absolute;
  top: -160px;
  left: -100px;
  margin: 200px;
  @media (max-width: 1070px) {
    top: 30vw;
    width: 80vw;
    left: -200px;
    height: 105vw;
  }
  @media (max-width: 800px) {
    top: 20vw;
  }
`;

export const PhoneWrapper = styled.div`
  background: url("./images/your-vehicle-phone.png") center no-repeat;
  position: absolute;
  background-size: contain;
  width: 341px;
  height: 77vh;
  left: 16vw;
  top: 7vh;
  z-index: 4;
  @media (max-width: 1070px) {
    background-size: 30vw;
    left: 60vw;
    top: -200px;
    height: 150vh;
  }
  @media (max-width: 800px) {
    background-size: 35vw;
    left: 370px;
    top: -300px;
  }
  @media (max-width: 700px) {
    left: 320px;
  }
  @media (max-width: 600px) {
    left: 250px;
    top: -380px;
  }
  @media (max-width: 500px) {
    left: 180px;
    top: -420px;
  }
`;

export const Shadow = styled.div`
  background-color: black;
  position: absolute;
  width: 341px;
  height: 77vh;
  left: 17vw;
  top: 11vh;
  mix-blend-mode: normal;
  opacity: 0.46;
  filter: blur(41.45px);
  border-radius: 35px;
  z-index: 3;
  @media (max-width: 1070px) {
    display: none;
  }
`;

export const SelectInfoContainer = styled.section`
  width: 32%;
  color: ${({ theme }) => theme.colors.navyBlue};
  text-transform: uppercase;
  position: absolute;
  top: 200px;
  left: 57vw;
  text-align: start;

  h1 {
    font-family: "Bebas Neue", cursive;
    letter-spacing: -0.1rem;
    line-height: 6vw;
    font-size: 6.1vw;
    font-weight: 100;
    width: 40vw;
    white-space: wrap;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-weight: lighter !important;
    position: relative;
    bottom: 50px;
    color: black;
    font-size: 1.1vw;
  }
  @media (max-width: 1070px) {
    width: 100vw;
    left: 4.6vw;
    top: -1vw;
    h1 {
      position: relative;
      line-height: 10vw;
      font-size: 10vw;
      font-weight: 100;
      width: 900px;
      width: 79vw;
    }
    h2 {
      font-size: 2.8vw;
      font-weight: 50;
      bottom: 40px;
      width: 90vw;
      font-weight: 100;
    }
  }
`;

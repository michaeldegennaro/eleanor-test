import styled, { keyframes } from "styled-components";

export const StyledSelectSection = styled.section`
  width: 100%;
  margin-top: 20px;
  height: 90vh;
  text-align: start;
  .flipped {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    position: relative;
    right: 5vw;
    top: 30px;
  }
  .arrow {
    position: relative;
    left: 27.5vw;
    bottom: 16px;
  }
  @media (max-width: 1070px) {
    .flipped {
      position: relative;
      right: 12vw;
      top: 30px;
    }
    .arrow {
      position: relative;
      left: 82.5vw;
      bottom: 16px;
    }
  }
`;

export const CarInfoContainer = styled.section`
  width: 32%;
  height: 37vw;
  background-color: ${({ theme }) => theme.colors.yellow};
  text-transform: uppercase;
  position: relative;
  top: 260px;
  left: 150px;
  font-family: "Bebas Neue", cursive;
  h1,
  p,
  .favicon {
    position: absolute;
    left: 7vw;
  }
  h1 {
    font-size: 4vw;
    font-weight: 100;
    top: 2vw;
  }
  p {
    font-size: 1.1vw;
    color: #4b5168;
    top: 9.5vw;
  }
  h3 {
    position: absolute;
    font-size: 2.4vw;
    font-weight: 100;
    line-height: 20px;
    bottom: 20px;
    left: 12.5vw;
  }
  .car-info-mpg {
    top: 13.7vw;
  }
  .car-info-speed {
    top: 17.3vw;
  }
  .car-info-hp {
    top: 20.7vw;
  }
  .car-picture {
    position: absolute;
    top: 31vw;
    left: 90px;
  }
  .favicon {
    height: 1.4vw;
  }
  .mpg {
    top: 16vw;
  }
  .speed {
    top: 19.5vw;
  }
  .hp {
    top: 23vw;
  }

  @media (max-width: 1620px) {
    height: 650px;
    .car-picture {
      top: 550px;
      width: 40vw;
      height: 12vw;
    }
  }
  @media (max-width: 1070px) {
    width: 95%;
    height: 79vw;
    top: 75vw;
    left: 2.5vw;
    h1 {
      font-size: 8vw;
    }
    p {
      font-size: 3.1vw;
      top: 15vw;
    }
    h3 {
      font-size: 7.4vw;
      left: 29.5vw;
    }
    .car-info-mpg {
      top: 24.7vw;
    }
    .car-info-speed {
      top: 37.3vw;
    }
    .car-info-hp {
      top: 50.7vw;
    }
    .favicon {
      height: 5.3vw;
    }
    .mpg {
      top: 30.5vw;
    }
    .speed {
      top: 42.5vw;
    }
    .hp {
      top: 56.5vw;
    }
    .car-picture {
      left: 50px;
      top: 65vw;
      width: 85vw;
      height: 26vw;
    }
  }
`;

export const SelectInfoContainer = styled.section`
  width: 32%;
  height: 38vw;
  color: ${({ theme }) => theme.colors.navyBlue};
  position: relative;
  bottom: 25vw;
  left: 55vw;
  text-align: start;

  h1 {
    font-family: "Bebas Neue", cursive;
    text-transform: uppercase;
    letter-spacing: -0.1rem;
    line-height: 6vw;
    font-size: 6.1vw;
    font-weight: 100;
    width: 40vw;
    white-space: wrap;
  }
  h2 {
    font-family: Optima, sans-serif;
    line-height: 1.4vw;
    color: black;
    font-weight: lighter !important;
    position: relative;
    bottom: 50px;
    font-size: 1.1vw;
  }
  @media (max-width: 1070px) {
    width: 95%;
    left: 4.6vw;
    bottom: 57vw;
    h1 {
      position: relative;
      line-height: 10vw;
      font-size: 10vw;
      font-weight: 100;
      width: 90vw;
      white-space: wrap;
      width: 70vw;
      bottom: 20px;
    }
    h2 {
      font-size: 3.5vw;
      font-weight: 50;
      line-height: 6vw;
      font-weight: 100;
      position: relative;
      bottom: 50px;
    }
  }
`;

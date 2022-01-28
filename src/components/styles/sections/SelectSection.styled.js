import styled, { keyframes } from "styled-components";

export const StyledSelectSection = styled.section`
  width: 100%;
  margin-top: 20px;
  height: 95vh;
  position: relative;
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
  height: 38vw;
  background-color: ${({ theme }) => theme.colors.yellow};
  text-transform: uppercase;
  position: relative;
  top: 260px;
  left: 150px;
  font-family: "Bebas Neue", cursive;
  h1 {
    font-size: 4vw;
    font-weight: 100;
    position: relative;
    left: 130px;
  }
  p {
    font-size: 1.1vw;
    line-height: 20px;
    color: #4b5168;
    top: -6vw;
    position: relative;
    left: 130px;
  }
  h3 {
    font-size: 2.4vw;
    font-weight: 100;
    line-height: 20px;
    position: relative;
    left: 210px;
    bottom: 20px;
  }
  .car-picture {
    position: absolute;
    top: 31vw;
    left: 90px;
  }
  .favicon {
    height: 25px;
    position: relative;
    left: 130px;
    top: 2.7vw;
  }
  .item-1,
  .item-2,
  .item-3 {
    position: relative;
    bottom: 80px;
    padding-bottom: 2px;
    margin-bottom: 2px;
  }
  .item-1 {
    bottom: 5vw;
  }
  .item-2 {
    bottom: 9vw;
  }
  .item-3 {
    bottom: 13vw;
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
    article {
      position: relative;
      top: -1vw;
    }
    h1 {
      font-size: 9vw;
      top: -11vw;
      left: 10vw;
    }
    p {
      font-size: 4vw;
      top: -24vw;
      left: 10vw;
    }
    h3 {
      font-size: 8vw;
      font-weight: 100;
      line-height: 20px;
      position: relative;
      left: 35vw;
      bottom: 20px;
    }
    .favicon {
      height: 25px;
      position: relative;
      left: 16vw;
      top: 9vw;
    }
    .item-1,
    .item-2,
    .item-3 {
      left: -6vw;
    }
    .item-1 {
      bottom: 25vw;
    }
    .item-2 {
      bottom: 32vw;
    }
    .item-3 {
      bottom: 39vw;
    }
    .car-picture {
      left: 50px;

      top: 45vw;
      width: 85vw;
      height: 26vw;
    }
  }
  @media (max-width: 800px) {
    article {
      position: relative;
      top: -50px;
  }
  .item-1 {
    bottom: 30vw;
  }
  .item-2 {
    bottom: 42vw;
  }
  .item-3 {
    bottom: 54vw;
  }
`;

export const SelectInfoContainer = styled.section`
  width: 32%;
  height: 38vw;
  color: ${({ theme }) => theme.colors.navyBlue};
  text-transform: uppercase;
  position: relative;
  bottom: 25vw;
  left: 55vw;
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
      width: 70%;
      bottom: 20px;
    }
    h2 {
      font-size: 2.5vw;
      font-weight: 50;
      line-height: 6vw;
      font-weight: 100;
      position: relative;
      bottom: 50px;
    }
  }
`;

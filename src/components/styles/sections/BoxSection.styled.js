import styled, { keyframes } from "styled-components";

export const StyledBoxSection = styled.section`
  width: 100%;
  height: 95vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  bottom: -16vw;
  @media (max-width: 1070px) {
    top: 220vw;
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    top: 170vw;
  }
  @media (max-width: 600px) {
    top: 65vw;
  }
  @media (max-width: 400px) {
    top: 125vw;
  }
`;

export const StyledBox = styled.article`
  background: url("./images/${(props) => props.images}") no-repeat;
  background-position: 50% 30%;
  background-size: 7vw;
  width: 28vw;
  height: 28vw;
  background-color: #f5f5f7;
  text-align: start;
  h1 {
    color: #2b3144;
    font-family: "Bebas Neue", cursive;
    font-size: 2vw;
    font-weight: 100;
  }
  p {
    font-family: Optima, sans-serif;
    font-size: 0.9vw;
    width: 290px;
    font-weight: lighter;
    position: relative;
    bottom: 30px;
    width: 15vw;
  }
  div {
    position: relative;
    top: 15vw;
    left: 6vw;
    width: 85vw;
  }
  @media (max-width: 1070px) {
    background-size: 22vw;
    width: 100vw;
    height: 90vw;
    margin-bottom: 50px;
    h1 {
      position: relative;
      bottom: 55px;
      font-size: 9vw;
    }
    p {
      position: relative;
      bottom: 15vw;
      font-size: 3.5vw;
      width: 80vw;
    }
    div {
      top: 55vw;
      left: 15vw;
    }
  }
`;

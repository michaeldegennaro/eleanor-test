import styled, { keyframes } from "styled-components";

export const StyledCustomerSection = styled.section`
  width: 100%;
  height: 95vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  bottom: -16vw;
  @media (max-width: 1070px) {
    top: 420vw;
  }
  @media (max-width: 800px) {
    top: 350vw;
  }
  @media (max-width: 600px) {
    top: 190vw;
  }
  @media (max-width: 400px) {
    top: 255vw;
  }
`;

export const CustomerImageContainer = styled.section`
  background: url("./images/customer.png") center no-repeat;
  width: 40%;
  background-position: bottom 0px right 50%;
  background-size: 25vw;
  height: 750px;
  background-color: ${({ theme }) => theme.colors.yellow};
  text-transform: uppercase;
  position: absolute;
  top: -160px;
  left: -100px;
  margin: 200px;
  @media (max-width: 1070px) {
    background-size: 45vw;
    top: 58vw;
    left: -200px;
    height: 105vw;
  }
  @media (max-width: 800px) {
    top: 50vw;
  }
`;

export const CustomerInfoContainer = styled.section`
  width: 32%;
  color: #2b3144;
  text-transform: uppercase;
  position: absolute;
  top: 70px;
  left: 50vw;
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
  h2,
  .quote {
    font-family: Optima, sans-serif;
    font-size: 1vw;
    color: black;
    font-weight: lighter !important;
    position: relative;
    bottom: 50px;
  }
  .quote {
    bottom: 20px;
    font-size: 0.8vw;
  }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 4px solid #f4f4f5;
    width: 42vw;
  }
  .app-pointer,
  .customer-arrow {
    position: absolute;
    font-family: "Inter", sans-serif;
  }
  .app-pointer {
  }
  .customer-arrow {
    top: 29.5vw;
    left: 300px;
  }
  @media (max-width: 1470px) {
    .customer-arrow {
      left: 22vw;
    }
  }
  @media (max-width: 1070px) {
    width: 90vw;
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
    h2,
    .quote {
      font-size: 3vw;
      letter-spacing: 0.3vw;
      word-spacing: 0.1vw;
      font-weight: 50;
      bottom: 40px;
      width: 90vw;
      line-height: 6vw;
    }
    hr {
      position: relative;
      right: 7vw;
      width: 85vw;
    }
    .customer-arrow {
      top: 70.9vw;
      left: 32vw;
    }
  }
  @media (max-width: 800px) {
    .customer-arrow {
      top: 71.2vw;
      left: 38vw;
    }
  }
  @media (max-width: 600px) {
    .customer-arrow {
      top: 71.6vw;
      left: 48vw;
    }
  }
  @media (max-width: 500px) {
    .customer-arrow {
      top: 71.9vw;
      left: 65vw;
    }
  }
`;

export const CarWrapper = styled.div`
  background: url("./images/car3-desktop.png") center no-repeat;
  position: absolute;
  width: 80vw;
  height: 15vw;
  background-size: contain;
  top: 670px;
  left: 7vw;
  @media (max-width: 1070px) {
    display: none;
  }
`;

export const CustomerFooterSection = styled.section`
  width: 90%;
  border-top: 4px solid #f4f4f5;
  height: 120px;
  position: absolute;
  bottom: -450px;
  left: -100px;
  margin: 200px;
  img {
    float: left;
    top: 10px;
    margin: 25px 0px 0px 0px;
  }
  @media (max-width: 1070px) {
    bottom: -140vw;
    left: -160px;
  }
  @media (max-width: 800px) {
    bottom: -120vw;
  }
  @media (max-width: 500px) {
    left: -180px;
  }
`;

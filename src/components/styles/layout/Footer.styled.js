import styled from "styled-components";

export const Header = styled.header`
  width: 90%;
  height: 15vh;
  position: relative;
  margin: auto;
  text-align: center;
  bottom: -21vw;
  border-top: 4px solid #f4f4f5;
  @media (max-width: 1070px) {
    top: 520vw;
  }
  @media (max-width: 800px) {
    top: 350vw;
  }
  @media (max-width: 600px) {
    top: 180vw;
  }
`;

export const Logo = styled.img`
  width: 55px;
  background: url("./images/header-black.png") no-repeat;
`;

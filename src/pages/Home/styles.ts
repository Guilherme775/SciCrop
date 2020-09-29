import styled from "styled-components";

import { GiCottonFlower } from "react-icons/gi";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f7;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerText = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  font-family: sans-serif;
  margin: 40px;
  color: #34cb79;

  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

export const Description = styled.p`
  font-size: 36px;
  font-family: sans-serif;
  margin: 40px;
  text-align: center;

  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  > a {
    width: 250px;
    height: 70px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    background: #34cb79;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 700px) {
      width: 120px;
      margin: 20px;
    }
  }
`;

export const ButtonText = styled.p`
  font-family: sans-serif;
  color: #fff;
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Img = styled(GiCottonFlower)`
  width: 400px;
  height: 400px;
  color: #34cb79;
`;

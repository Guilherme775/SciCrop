import styled from "styled-components";

import { BiArrowBack } from "react-icons/bi";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 10px;
    padding: 10px;
  }
`;

export const Icon = styled(BiArrowBack)`
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #34cb79;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 50%;
  height: 80%;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    background-color: #f0f0f7;
    border-radius: none;
  }
`;

export const StationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 40px;

  > .leaflet-container {
    width: 90%;
    height: 70%;
    border-radius: 8px;
    margin-top: 40px;
  }

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

export const StationTitle = styled.h1`
  font-weight: bold;
  font-family: sans-serif;
`;

export const StationDescription = styled.p`
  font-family: sans-serif;
`;

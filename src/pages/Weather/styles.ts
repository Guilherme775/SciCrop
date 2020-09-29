import styled from "styled-components";

import { BiArrowBack } from "react-icons/bi";

import { BsSun } from "react-icons/bs";

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";

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
  background-color: #fff;
  width: 50%;
  height: 85%;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    background-color: #f0f0f7;
    border-radius: none;
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  padding: 10px;

  > hr {
    border-bottom: black;
    width: 100%;
    margin: auto;
  }
`;

export const Name = styled.h1`
  font-weight: bold;
  font-family: sans-serif;

  @media (min-width: 1280px) {
    margin: 10px;
  }
`;

export const DescContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 1280px) {
    margin-top: 40px;
  }
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

export const TempImg = styled(BsSun)`
  width: 48px;
  height: 48px;
  color: rgb(251, 224, 0);
  margin-right: 10px;
`;

export const TempName = styled.p`
  font-family: sans-serif;
  font-size: 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const Content = styled.h1`
  display: flex;
  flex-direction: row;
  font-weight: unset;
  font-size: 16px;
  font-family: sans-serif;
  margin: 5px 0;
`;

export const Bold = styled.p`
  font-weight: bold;
`;

export const TodayContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  margin-top: 40px;

  > hr {
    border-left: none;
    border-bottom: 2px solid;
  }

  @media (min-width: 1280px) {
    margin-top: 80px;
  }
`;

export const ContainerMaxMin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
`;

export const Text = styled.p``;

export const TodayTitle = styled.p`
  display: flex;
  align-self: center;
  margin-bottom: 10px;
`;

export const IconUp = styled(FaArrowUp)``;

export const IconDown = styled(FaArrowDown)``;

export const IconWind = styled(FaWind)``;

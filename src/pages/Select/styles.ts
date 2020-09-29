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

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 200px;
    height: 50px;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    margin: 10px 0;
    font-size: 16px;
    color: #6c6c80;
  }

  @media (max-width: 1024px) {
    > select {
      background: #fff;
    }
  }
`;

export const InputTitle = styled.p``;

export const SubmitButton = styled.button`
  width: 260px;
  height: 56px;
  background: #34cb79;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  margin-top: 40px;
  transition: background-color 0.2s;
  cursor: pointer;
`;

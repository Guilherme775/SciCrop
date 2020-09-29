import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  ContainerText,
  Title,
  Description,
  ButtonsContainer,
  ButtonText,
  ContainerImage,
  Img,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ContainerText>
          <Title>SciCrop</Title>
          <Description>
            Bem vindo ao SciCrop, selecione a opção desejada
          </Description>
          <ButtonsContainer>
            <Link to="/station">
              <ButtonText>Ver estações meteorológicas</ButtonText>
            </Link>
            <Link to="/weather">
              <ButtonText>Ver previsão do tempo</ButtonText>
            </Link>
          </ButtonsContainer>
        </ContainerText>

        <ContainerImage>
          <Img />
        </ContainerImage>
      </Wrapper>
    </Container>
  );
};

export default Home;

import React from "react";

import {
  Container,
  TitleContainer,
  Icon,
  Title,
  Wrapper,
  WrapperContainer,
  TextContainer,
  Name,
  Img,
  DescContainer,
  TempContainer,
  TempImg,
  TempName,
  ContentContainer,
  Content,
  Bold,
  TodayContainer,
  ContainerMaxMin,
  Text,
  TodayTitle,
  IconUp,
  IconDown,
  IconWind,
} from "./styles";

import stationImg from "../../assets/stationImg.jpg";

const Detail: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Icon
          onClick={() => {
            window.location.href = "/station";
          }}
        />
        <Title>SciCrop</Title>
      </TitleContainer>
      <Wrapper>
        <WrapperContainer>
          <TextContainer>
            <Name>Estação, SciCrop - SP</Name>
            <hr />
          </TextContainer>
          <Img src={stationImg} alt="station" />
          <DescContainer>
            <TempContainer>
              <TempImg />
              <TempName>25 ºC</TempName>
            </TempContainer>
            <ContentContainer>
              <Content>
                <Bold>Precipitação: &nbsp;</Bold> 0%
              </Content>
              <Content>
                <Bold>Umidade: &nbsp;</Bold> 50%
              </Content>
            </ContentContainer>
          </DescContainer>
          <TodayContainer>
            <hr />
            <ContainerMaxMin>
              <IconUp />
              <Text>Máxima</Text>
            </ContainerMaxMin>
            <TodayTitle>41 ºC</TodayTitle>
            <hr />
            <ContainerMaxMin>
              <IconDown />
              <Text>Mínima</Text>
            </ContainerMaxMin>
            <TodayTitle>16 ºC</TodayTitle>
            <hr />
            <ContainerMaxMin>
              <IconWind />
              <Text>Vel. vento</Text>
            </ContainerMaxMin>
            <TodayTitle>17 km/h</TodayTitle>
            <hr />
          </TodayContainer>
        </WrapperContainer>
      </Wrapper>
    </Container>
  );
};

export default Detail;

import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  Container,
  TitleContainer,
  Icon,
  Title,
  Wrapper,
  WrapperContainer,
  TextContainer,
  Name,
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

const Weather: React.FC = () => {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [feels, setFeels] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_KEY}&lang=pt&units=metric`
        )
        .then((res) => {
          setName(res.data.name);
          setTemp(res.data.main.temp);
          setTempMin(res.data.main.temp_min);
          setTempMax(res.data.main.temp_max);
          setFeels(res.data.main.feels_like);
          setPressure(res.data.main.pressure);
          setHumidity(res.data.main.humidity);
          setWind(res.data.wind.speed);
        });
    });
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Icon
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <Title>SciCrop</Title>
      </TitleContainer>
      <Wrapper>
        <WrapperContainer>
          <TextContainer>
            <Name>Previsão do tempo, {name}</Name>
            <hr />
          </TextContainer>
          <DescContainer>
            <TempContainer>
              <TempImg />
              <TempName>{temp} ºC</TempName>
            </TempContainer>
            <ContentContainer>
              <Content>
                <Bold>Pressão: &nbsp;</Bold> {pressure}
              </Content>
              <Content>
                <Bold>Umidade: &nbsp;</Bold> {humidity} %
              </Content>
            </ContentContainer>
          </DescContainer>
          <TodayContainer>
            <hr />
            <ContainerMaxMin>
              <IconUp />
              <Text>Sensação térmica</Text>
            </ContainerMaxMin>
            <TodayTitle>{feels} ºC</TodayTitle>
            <hr />
            <ContainerMaxMin>
              <IconUp />
              <Text>Máxima</Text>
            </ContainerMaxMin>
            <TodayTitle>{tempMax} ºC</TodayTitle>
            <hr />
            <ContainerMaxMin>
              <IconDown />
              <Text>Mínima</Text>
            </ContainerMaxMin>
            <TodayTitle>{tempMin} ºC</TodayTitle>
            <hr />
            <ContainerMaxMin>
              <IconWind />
              <Text>Vel. vento</Text>
            </ContainerMaxMin>
            <TodayTitle>{wind} km/h</TodayTitle>
            <hr />
          </TodayContainer>
        </WrapperContainer>
      </Wrapper>
    </Container>
  );
};

export default Weather;

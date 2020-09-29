import React, { useState, useEffect } from "react";

import {
  Container,
  Wrapper,
  TitleContainer,
  Icon,
  Title,
  StationContainer,
  StationTitle,
  StationDescription,
} from "./styles";

import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import icon from "../../assets/icon.png";

const Station: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const myIcon = L.icon({
    iconUrl: icon,
    iconSize: [48, 64],
    popupAnchor: [-10, -30],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
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
        <StationContainer>
          <StationTitle>Estações metereológicas</StationTitle>
          <StationDescription>
            Clique nas estações localizadas no mapa para visualizar seus dados
          </StationDescription>
          <Map center={initialPosition} zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={initialPosition}
              icon={myIcon}
              onClick={() => {
                window.location.href = "/detail";
              }}
            />
          </Map>
        </StationContainer>
      </Wrapper>
    </Container>
  );
};

export default Station;

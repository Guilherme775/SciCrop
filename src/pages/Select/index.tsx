import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import {
  Container,
  Wrapper,
  TitleContainer,
  Icon,
  Title,
  FormContainer,
  FormTitle,
  Form,
  InputTitle,
  SubmitButton,
} from "./styles";

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Select: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  const history = useHistory();

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((res) => {
        const ufInitials = res.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((res) => {
        const cityNames = res.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectedUf(e: ChangeEvent<HTMLSelectElement>) {
    const uf = e.target.value;

    setSelectedUf(uf);
  }

  function handleSelectedCity(e: ChangeEvent<HTMLSelectElement>) {
    const city = e.target.value;

    setSelectedCity(city);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    localStorage.setItem("uf", selectedUf);
    localStorage.setItem("city", selectedCity);

    history.push("/weather");
  }

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
        <FormContainer>
          <FormTitle>Previsão do tempo</FormTitle>
          <Form onSubmit={handleSubmit}>
            <InputTitle>Selecione a UF</InputTitle>
            <select
              name="uf"
              id="uf"
              value={selectedUf}
              onChange={handleSelectedUf}
            >
              <option value="0">Selecione uma UF</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
            <InputTitle>Selecione a Cidade</InputTitle>
            <select
              name="uf"
              id="uf"
              value={selectedCity}
              onChange={handleSelectedCity}
            >
              <option value="0">Selecione uma cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <SubmitButton type="submit">Ver Previsão</SubmitButton>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Select;

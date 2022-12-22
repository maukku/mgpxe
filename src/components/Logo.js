import React from "react";
import styled from "styled-components";
import logo from "../assets/logoKoRo.png";

const Container = styled.div`
  margin-top: 20px;
`;

export const Logo = () => {
  return (
    <Container>
      <img width={100} src={logo}></img>
    </Container>
  );
};

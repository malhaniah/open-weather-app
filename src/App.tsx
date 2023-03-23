import React from "react";
import styled from "styled-components";
import { Search } from "./components";

export default function App() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #03045E;
`;

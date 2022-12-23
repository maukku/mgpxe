import "./App.css";
import styled from "styled-components";

import SearchForm from "./components/MainContent";
import { ImagesList } from "./components/ImagesList";
import { Logo } from "./components/Logo";
const Container = styled.div`
  width: 60%;

  margin: auto;
`;
function App() {
  return (
    <Container>
      <Logo />
      <SearchForm />
    </Container>
  );
}

export default App;

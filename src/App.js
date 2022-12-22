import "./App.css";
import styled from "styled-components";

import SearchBar from "./components/SearchBar";
import { ImagesList } from "./components/ImagesList";
const Container = styled.div`
  width: 80%;

  margin: auto;
`;
function App() {
  return (
    <Container>
      <SearchBar />
      <ImagesList />
    </Container>
  );
}

export default App;

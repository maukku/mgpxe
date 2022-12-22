import "./App.css";
import styled from "styled-components";

import SearchBar from "./components/SearchBar";

const Container = styled.div`
  width: 70%;

  margin: auto;
`;
function App() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}

export default App;

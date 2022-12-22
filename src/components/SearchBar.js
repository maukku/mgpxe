import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-block: 20px;
  display: grid;
  grid-template-columns: 90% 10%;
`;
const SearchInput = styled.input`
  height: 30px;
  font-size: 16px;
  padding: 0 20px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #00ace6;
  color: #00ace6;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const SearchBar = () => {
  return (
    <Container>
      <SearchInput type="text" placeholder="Search for pictures.." />
      <Button>Search</Button>
    </Container>
  );
};

export default SearchBar;

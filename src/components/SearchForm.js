import React, { useState } from "react";
import styled from "styled-components";
import { ImagesList } from "./ImagesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  margin-block: 20px;
  display: grid;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 16px;
  height: 36px;
  &:fokus {
    border: 2px solid black;
  }
  &:hover {
    border: 2px solid black;
    transition: 300ms;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  font-size: 14px;
  color: #333;
  background-color: transparent;
  outline: none;
`;

const SearchForm = () => {
  const [query, setQuery] = useState("");
  return (
    <Container>
      <SearchContainer>
        <FontAwesomeIcon icon={faSearch} />
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for pictures.."
        />
      </SearchContainer>

      <ImagesList query={query} />
    </Container>
  );
};

export default SearchForm;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImagesList } from "./ImagesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
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

const MainContent = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  useEffect(() => {
    //  debounce function to delay the search until after the user has stopped typing for a certain amount of time
    const debounce = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [query]);
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

      <ImagesList query={debouncedQuery} />
    </Container>
  );
};

export default MainContent;

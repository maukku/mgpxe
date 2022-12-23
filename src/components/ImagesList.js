import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Gallery = styled.div`
  column-count: 3;
  gap: 3px;
  @media (max-width: 800px) {
    column-count: 2;
  }

  @media (max-width: 600px) {
    column-count: 1;
  }
  align-items: center;
  justify-items: center;
`;
const GridItem = styled.img`
  width: 100%;
`;
const Container = styled.div`
  margin-top: 10px;
`;
const ErrorMessage = styled.div`
  color: red;
`;

const ErrorContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const RefreshButton = styled.button`
  margin-top: 10px;
  align-self: center;
  width: fit-content;
  background-color: lightgray;
  border-radius: 15px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const ImagesList = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const count = 10;

  async function getRandomPhotos() {
    const url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${count}`;
    setLoading(true);
    console.log("Random ", url);
    setError(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages(data);
      console.log(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  }

  const refreshPage = () => {
    window.location.reload();
  };

  async function getPhotosByQuery() {
    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&count=${count}&query=${query}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setImages(data.results);
      setError(false);

      console.log(images);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  useEffect(() => {
    if (query === "") {
      getRandomPhotos();
    } else {
      getPhotosByQuery();
    }
  }, [query]);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <ErrorContainer>
          <ErrorMessage>
            {" "}
            An error occurred. Please try again later.
          </ErrorMessage>
          <RefreshButton onClick={refreshPage}>Refresh</RefreshButton>
        </ErrorContainer>
      ) : (
        <Gallery>
          {images.map((image) => {
            return (
              <GridItem
                src={image.urls.small}
                alt={image.description}
                key={image.id}
              />
            );
          })}
        </Gallery>
      )}
    </Container>
  );
};

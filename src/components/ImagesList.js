import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Gallery = styled.div`
  column-count: 3;
  gap: 5px;

  @media (max-width: 800px) {
    column-count: 2;
  }

  @media (max-width: 600px) {
    column-count: 1;
  }

  gap: 10px;
  align-items: center;
  justify-items: center;
  margin-top: auto;
`;
const GridItem = styled.img`
  break-inside: avoid;
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
`;
const Container = styled.div`
  margin-top: 20px;
`;

export const ImagesList = ({ query }) => {
  const [imgList, setImgList] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const count = 12;

  async function getRandomPhotos() {
    const url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${count}`;

    console.log(url);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setImgList(data);

      console.log(imgList);
    } catch (error) {
      console.error(error);
    }
  }

  async function getPhotosByQuery() {
    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&count=${count}&${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImgList(data);

      console.log(imgList);
    } catch (error) {
      console.error(error);
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
      <Gallery>
        {imgList.map((image) => {
          return (
            <GridItem
              src={image.urls.small}
              alt={image.description}
              key={image.id}
            />
          );
        })}
      </Gallery>
    </Container>
  );
};

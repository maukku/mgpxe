import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  align-items: center;
  justify-items: center;
  margin: auto;
`;

export const ImagesList = ({ query }) => {
  const [imgList, setImgList] = useState([]);
  async function getRandomPhotos() {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const count = 12;
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
    const API_KEY = process.env.REACT_APP_API_KEY;

    const count = 12;
    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&count=${count}&${query}`;

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

  useEffect(() => {
    getRandomPhotos();
  }, []);

  return (
    <div>
      <div>Your Images</div>
      <Container>
        {imgList.map((image) => {
          return (
            <img
              src={image.urls.small}
              alt={image.description}
              key={image.id}
            />
          );
        })}
      </Container>
    </div>
  );
};

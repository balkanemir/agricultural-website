import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Gallery from "../components/Gallery";
import { ImageItems } from "../data/images";

const Container = styled.div`
  height: auto;
`;

const ImageZoomInContainer = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: #ffffffaa;
  border-radius: 10px;
  position: fixed;
  top: 5vh;
  left: 5vw;
  z-index: 5;
  box-shadow: 0 0 5px 1px lightgray;
  transform: scale(${(props) => (props.imageIsClicked ? "1" : "0")});
  transition: 0.5s all;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  transform: scale(15%);
`;

const CloseButton = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  margin: 10px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
`;

const ArrowLeft = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  margin: 20px;
  cursor: pointer;
`;

const ArrowRight = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  margin: 20px;
  cursor: pointer;
`;

const Home = () => {
  const [imageIsClicked, setImageIsClicked] = useState("");
  const parts = imageIsClicked.split("/");
  let category = parts[parts.length - 2];
  const lastPath = parts[parts.length - 1];
  const numberExt = lastPath.split(".");
  let index = parseInt(numberExt[numberExt.length - 2]);

  const handleCloseButton = () => {
    setImageIsClicked("");
  };

  const getLength = () => {
    let lengthItems = 0;
    ImageItems.map((item) => {
      category = category.charAt(0).toUpperCase() + category.slice(1);
      if (item.category === category) {
        lengthItems = item.categoryItems.length;
      }
    });
    return lengthItems;
  };

  const handleDirection = (direction) => {
    if (direction === "left") {
      if (index > 1) {
        index = index - 1;
      }
    }
    if (direction === "right") {
      const length = getLength();
      if (length > index) {
        index = index + 1;
      }
    }
    const newPath =
      "./images/" + category + "/" + String(index).padStart(4, "0") + ".png";
    setImageIsClicked(newPath);
  };

  return (
    <Container>
      <ImageZoomInContainer imageIsClicked={imageIsClicked}>
        <ArrowLeft onClick={() => handleDirection("left")}>
          <i class="bi bi-chevron-left"></i>
        </ArrowLeft>
        <Image src={imageIsClicked} />
        <ArrowRight onClick={() => handleDirection("right")}>
          <i class="bi bi-chevron-right"></i>
        </ArrowRight>
        <CloseButton onClick={handleCloseButton}>
          <i class="bi bi-x-lg"></i>
        </CloseButton>
      </ImageZoomInContainer>
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Gallery setImageIsClicked={setImageIsClicked} />
    </Container>
  );
};

export default Home;

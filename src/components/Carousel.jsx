import {
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "material-ui-icons";
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { SlideItems } from "../data/slides.js";

const ScaleAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const ResetScaleAnimation = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`;

const TitleAnimation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 80%;
    margin-left: 0;
  }
  100% {
    margin-left: 80%;
    width: 0;
  }
`;

const DisplayTitleAnimation = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const DescriptionAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  opacity: ${(props) => (props.isChanged ? 1 : 0)};
  transition: 2s all;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 21, 0, 0.6);
  z-index: 2;
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  animation: ${(props) =>
    props.id % 2 === 0
      ? props.isChanged
        ? css`
            ${ScaleAnimation} 20s infinite linear;
          `
        : css`
            ${ResetScaleAnimation} 2s linear;
          `
      : props.isChanged
      ? css`
          ${ResetScaleAnimation} 20s infinite linear;
        `
      : css`
          ${ScaleAnimation} 2s linear;
        `};
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 30%;
  text-align: center;
  z-index: 4;
  overflow: hidden;
`;

const TitleAnimationContainer = styled.div`
  width: 0;
  height: 50px;
  position: absolute;
  left: 10%;
  top: 0;
  z-index: 4;
  overflow: hidden;
  background-color: #e5383b;
  z-index: 5;
  animation: ${(props) =>
    props.isChanged
      ? css`
          ${TitleAnimation} 2s 1 ease;
        `
      : "none"};
  animation-delay: 2s;
`;

const Title = styled.div`
  color: white;
  font-family: "El Messiri", "Raleway";
  font-weight: 600;
  font-size: 40px;
  z-index: 3;
  opacity: 0;
  animation: ${(props) =>
    props.isChanged
      ? css`
          ${DisplayTitleAnimation} 1s 1 ease forwards;
        `
      : "none"};
  animation-delay: 2s;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  top: 40%;
  z-index: 4;
`;

const Description = styled.div`
  font-family: "Noto Sans";
  color: white;
  z-index: 3;
  opacity: 0;
  font-size: 18px;
  animation: ${(props) =>
    props.isChanged
      ? css`
          ${DescriptionAnimation} 1s 1 ease forwards;
        `
      : "none"};
  animation-delay: 4s;
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  border: ${(props) =>
    props.isHovered ? "1px solid transparent" : "1px solid white"};
  border-radius: 100%;
  position: absolute;
  left: ${(props) => (props.direction === "left" ? "2%" : "93%")};
  top: 55%;
  padding: ${(props) => (props.isHovered ? "0" : "5px")};
  margin: ${(props) => (props.isHovered ? "5px" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
`;

const Arrow = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 100%;
  background-color: white;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Carousel = () => {
  const [index, setIndex] = useState(1);
  const [isHovered, setIsHovered] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === SlideItems.length ? (prevIndex = 1) : prevIndex + 1
      );
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const handleHover = (hover) => {
    setIsHovered(hover);
  };

  const handleClick = (click) => {
    if (click === "left") {
      setIndex((prevIndex) =>
        prevIndex === 1 ? (prevIndex = 5) : prevIndex - 1
      );
    }
    if (click === "right") {
      setIndex((prevIndex) =>
        prevIndex === SlideItems.length ? (prevIndex = 1) : prevIndex + 1
      );
    }
  };

  return (
    <Container>
      <ArrowContainer direction="left" isHovered={isHovered === "left"}>
        <Arrow
          onMouseEnter={() => handleHover("left")}
          onMouseLeave={() => handleHover("")}
          isHovered={isHovered === "left"}
          onClick={() => handleClick("left")}
        >
          <KeyboardArrowLeft />
        </Arrow>
      </ArrowContainer>
      <ArrowContainer direction="right" isHovered={isHovered === "right"}>
        <Arrow
          onMouseEnter={() => handleHover("right")}
          onMouseLeave={() => handleHover("")}
          isHovered={isHovered === "right"}
          onClick={() => handleClick("right")}
        >
          <KeyboardArrowRight />
        </Arrow>
      </ArrowContainer>

      {SlideItems.map((item) => (
        <Slide isChanged={index === item.id}>
          <Overlay />
          <Image isChanged={index === item.id} id={item.id} src={item.img} />

          <TitleContainer>
            <TitleAnimationContainer
              isChanged={index === item.id}
            ></TitleAnimationContainer>
            <Title isChanged={index === item.id}>{item.title}</Title>
          </TitleContainer>
          <DescriptionContainer>
            <Description isChanged={index === item.id}>{item.desc}</Description>
          </DescriptionContainer>
        </Slide>
      ))}
    </Container>
  );
};

export default Carousel;

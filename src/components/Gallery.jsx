import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImageItems } from "../data/images";

const Container = styled.div`
  height: 100vh;
  background-color: #f5f3f4;
  margin-top: 100px;
  background-image: url("https://demo.7iquid.com/landmaster/wp-content/uploads/2020/02/tree_right_bg.png");
  background-repeat: no-repeat;
  background-position: top right;
`;

const Title = styled.div`
  font-size: 32px;
  font-family: "El Messiri", "Raleway";
  font-weight: 600;
  padding-top: 120px;
  color: #a4161a;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-family: "Noto Sans";
  width: 40%;
  margin: 20px auto 0 auto;
  color: #161a1d;
  line-height: 20px;
  text-align: center;
`;

const Line = styled.div`
  width: 100px;
  border: 2px solid #a4161a;
  margin: 30px auto 50px auto;
`;

const ButtonContainer = styled.div`
  width: 70%;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  border: ${(props) => (props.isSelected ? "2px solid #660708" : "none")};
  background-color: ${(props) => (props.isSelected ? "#e5383b" : "#d3d3d383")};
  border-radius: 50px;
  padding: 5px;
  margin: 20px;
  font-family: "Noto Sans";
  font-weight: bold;
  color: ${(props) => (props.isSelected ? "white" : "#e5383b")};
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #e5383b;
    color: white;
  }
`;

const GalleryContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 0 auto;
  padding: 0 30px 0 30px;
  margin: 20px auto 20px auto;
  box-sizing: border-box;
`;

const ImageContainerWrapper = styled.div`
  width: ${4 * 260}px;
  height: 350px;

  display: flex;
  align-items: center;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: ${(props) => props.itemCount * 260}px;
  height: 350px;
  margin: 10px auto 30px auto;
  display: flex;
  align-items: center;
  transform: translateX(
    ${(props) => props.slideIndex * -260 + props.dragOffset}px
  );
  opacity: ${(props) => (props.isClicked ? "0" : "1")};
  transition: all 0.5s;
`;

const Image = styled.img`
  width: 220px;
  height: 300px;
  margin: 20px;
  user-select: none;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 1s all;
`;

const Arrow = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isDisabled ? "transparent" : "#d3d3d383"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isDisabled ? "auto" : "pointer")};
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? "transparent" : "#e5383b74"};
  }
`;

const Gallery = ({ setImageIsClicked }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [category, setCategory] = useState("Domates");
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState("left");

  const getLength = () => {
    let lengthItems = 0;
    ImageItems.map((item) => {
      if (item.category === category) {
        lengthItems = item.categoryItems.length;
      }
    });
    return lengthItems;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const offsetX = e.clientX - startX;

    setDragOffset(offsetX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -130) {
      const lengthItems = getLength();
      setSlideIndex((prevIndex) =>
        prevIndex === lengthItems - 4
          ? (prevIndex = prevIndex)
          : (prevIndex = prevIndex + 1)
      );
    }

    if (dragOffset > -130) {
      setSlideIndex((prevIndex) =>
        prevIndex === 0 ? (prevIndex = prevIndex) : (prevIndex = prevIndex - 1)
      );
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const offsetX = e.touches[0].clientX - startX;
    setDragOffset(offsetX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -130) {
      const lengthItems = getLength();
      setSlideIndex((prevIndex) =>
        prevIndex === lengthItems - 4
          ? (prevIndex = prevIndex)
          : (prevIndex = prevIndex + 1)
      );
    }

    if (dragOffset > -130) {
      setSlideIndex((prevIndex) =>
        prevIndex === 0 ? (prevIndex = prevIndex) : (prevIndex = prevIndex - 1)
      );
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleClick = (data) => {
    setCategory(data);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
      setSlideIndex(0);
    }, 1000);
  };

  const handleDirection = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) =>
        prevIndex === 0 ? prevIndex : prevIndex - 1
      );
    }
    if (direction === "right") {
      const lengthItems = getLength();
      setSlideIndex((prevIndex) =>
        prevIndex === lengthItems - 4
          ? (prevIndex = prevIndex)
          : (prevIndex = prevIndex + 1)
      );
    }
  };

  useEffect(() => {
    if (slideIndex === 0) {
      setIsDisabled("left");
    }
    const lengthItems = getLength();
    if (slideIndex === lengthItems - 4) {
      setIsDisabled("right");
    }
    if (slideIndex !== 0 && slideIndex !== lengthItems - 4) {
      setIsClicked("");
    }
  }, [slideIndex]);

  const handleImageClicked = (path) => {
    setImageIsClicked(path);
  };

  return (
    <Container>
      <Title>Topraktan Sofranıza: Çiftçilerimizin Emeği</Title>
      <SubTitle>
        Çiftçilerimizin özenle yetiştirdiği sebzeler ve meyveler, galerimizde
        sizleri doğanın zenginliğiyle buluşturuyor.
      </SubTitle>
      <Line></Line>
      <ButtonContainer>
        <Button
          onClick={() => handleClick("Domates")}
          isSelected={category === "Domates"}
        >
          Domates
        </Button>
        <Button
          onClick={() => handleClick("Biber")}
          isSelected={category === "Biber"}
        >
          Biber
        </Button>
        <Button
          onClick={() => handleClick("Patates")}
          isSelected={category === "Patates"}
        >
          Patates
        </Button>
        <Button
          onClick={() => handleClick("Karpuz")}
          isSelected={category === "Karpuz"}
        >
          Karpuz
        </Button>
      </ButtonContainer>
      <GalleryContainer>
        <Arrow
          onClick={() => handleDirection("left")}
          isDisabled={isDisabled === "left"}
        >
          {isDisabled !== "left" && <i class="bi bi-chevron-left"></i>}
        </Arrow>
        <ImageContainerWrapper
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ImageContainer
            itemCount={ImageItems.map((item) => {
              if (item.category === category) {
                return item.categoryItems.length;
              }
            })}
            slideIndex={slideIndex}
            dragOffset={dragOffset}
            isClicked={isClicked}
          >
            {ImageItems.map((item) => {
              if (category === item.category) {
                return item.categoryItems.map((image) => {
                  return (
                    <Image
                      onClick={() => handleImageClicked(image.path)}
                      isVisible={
                        image.id > slideIndex - 1 && image.id < slideIndex + 4
                      }
                      src={image.path}
                      draggable={false}
                    />
                  );
                });
              }
            })}
          </ImageContainer>
        </ImageContainerWrapper>
        <Arrow
          onClick={() => handleDirection("right")}
          isDisabled={isDisabled === "right"}
        >
          {isDisabled !== "right" && <i class="bi bi-chevron-right"></i>}
        </Arrow>
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;

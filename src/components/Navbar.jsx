import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  border-radius: 10px;
  background-color: #a4161a;
  position: absolute;
  margin: 0 10% 0 10%;
  left: 0;
  right: 0;
  top: 110px;
  display: flex;
`;

const ButtonContainer = styled.div`
  flex: 2;
  display: flex;
  margin-left: 20px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 10px 0 10px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto Sans";
  background-color: transparent;
  cursor: pointer;
  position: relative;
  color: white;
`;

const ButtonLine = styled.div`
  height: 3px;
  background-color: white;
  position: absolute;
  bottom: 0;
  width: ${(props) => (props.isHovered ? "100%" : "0")};
  transition: all 0.2s;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 20px;
`;

const SearchContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  align-items: center;
  border-radius: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 80%;
  background-color: transparent;
  margin-left: 10px;
  color: white;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: white;
`;

const Navbar = () => {
  const [isHovered, setIsHovered] = useState("");

  const handleHover = (hover) => {
    setIsHovered(hover);
  };
  return (
    <Container>
      <ButtonContainer>
        <Button
          onMouseEnter={() => handleHover("Ana Sayfa")}
          onMouseLeave={() => handleHover("")}
        >
          Ana Sayfa
          <ButtonLine isHovered={isHovered === "Ana Sayfa"}></ButtonLine>
        </Button>
        <Button
          onMouseEnter={() => handleHover("Hakkımızda")}
          onMouseLeave={() => handleHover("")}
        >
          Hakkımızda
          <ButtonLine isHovered={isHovered === "Hakkımızda"}></ButtonLine>
        </Button>
        <Button
          onMouseEnter={() => handleHover("Galeri")}
          onMouseLeave={() => handleHover("")}
        >
          Galeri <ButtonLine isHovered={isHovered === "Galeri"}></ButtonLine>
        </Button>
        <Button
          onMouseEnter={() => handleHover("Yorumlar")}
          onMouseLeave={() => handleHover("")}
        >
          Yorumlar
          <ButtonLine isHovered={isHovered === "Yorumlar"}></ButtonLine>
        </Button>
        <Button
          onMouseEnter={() => handleHover("Bize Ulaşın")}
          onMouseLeave={() => handleHover("")}
        >
          Bize Ulaşın
          <ButtonLine isHovered={isHovered === "Bize Ulaşın"}></ButtonLine>
        </Button>
      </ButtonContainer>
      <RightContainer>
        <SearchContainer>
          <SearchInput></SearchInput>
          <Icon>
            <i class="bi bi-search"></i>
          </Icon>
        </SearchContainer>
      </RightContainer>
    </Container>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  background-color: white;
  padding: 0 10% 0 10%;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  height: 110px;
  align-items: center;
  font-family: "Noto Sans";
`;

const Logo = styled.div`
  flex: 2;
  font-size: 48px;
  display: flex;
  font-family: "El Messiri", "Raleway";
  color: #660708;
  font-weight: 600;
  @media (max-width: 1050px) {
    font-size: 32px;
  }
  @media (max-width: 650px) {
    font-size: 28px;
  }
`;

const Email = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
`;

const Phone = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #d3d3d3;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a4161a;
  @media (max-width: 1050px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 650px) {
    width: 30px;
    height: 30px;
  }
`;

const TitleContainer = styled.div`
  margin: 10px 0 10px 0;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.div`
  font-size: 14px;
  opacity: 0.5;
  font-weight: 500;
  @media (max-width: 1050px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #a4161a;
  @media (max-width: 1050px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>İrem Tarim</Logo>
        <Email>
          <Icon>
            <i class="bi bi-envelope"></i>
          </Icon>
          <TitleContainer>
            <Title>Bir Satır Bırakın</Title>
            <SubTitle>iremtarim@example.com</SubTitle>
          </TitleContainer>
        </Email>
        <Phone>
          <Icon>
            <i class="bi bi-telephone"></i>
          </Icon>
          <TitleContainer>
            <Title>Bizi Arayın</Title>
            <SubTitle>+90 533 677 83 93</SubTitle>
          </TitleContainer>
        </Phone>
      </Wrapper>
    </Container>
  );
};

export default Topbar;

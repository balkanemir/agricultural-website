import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 110vh;
  width: 80%;
  background-color: white;
  margin: 0 10% 0 10%;
  position: relative;
  top: -100px;
  box-shadow: 0 10px 20px 1px #d3d3d3;
  position: relative;
`;

const ContainerTopBar = styled.div`
  position: relative;
  top: -45px;
  display: flex;
  overflow: hidden;
  height: 80px;
`;

const ContainerTopBarImage = styled.img`
  position: relative;
  left: -20px;
  height: auto;
  width: 5%;
`;

const TopTitle = styled.div`
  font-size: 20px;
  font-family: "Noto Sans";
  font-weight: 600;
  width: 70%;
  margin: 0 0 20px 10%;
  color: #e5383b;
`;

const Title = styled.div`
  font-size: 40px;
  font-family: "El Messiri", "Raleway";
  font-weight: 600;
  width: 70%;
  margin: 0 0 10px 10%;
  color: #a4161a;
`;

const Content = styled.div`
  font-size: 14px;
  font-family: "Noto Sans";
  width: 80%;
  margin: 0 0 40px 10%;
  color: #161a1d;
  line-height: 25px;
`;

const Image = styled.img`
  width: 80%;
  height: 550px;
  position: absolute;
  bottom: -100px;
  margin: 0 0 0 10%;
`;

const About = () => {
  return (
    <Container>
      <ContainerTopBar>
        {[...Array(21)].map((_, index) => (
          <ContainerTopBarImage src="./images/grass2.png" />
        ))}
      </ContainerTopBar>
      <TopTitle>İREM TARIMSAL ZİRAİ İLAÇ VE LİMİTED ŞİRKETİ HAKKINDA</TopTitle>
      <Title>
        Kökleri 50 Yılı Aşkın Geçmişte, Geleceği Tarımla Şekillendiriyoruz.
      </Title>
      <Content>
        İrem Tarım, 50 yılı aşkın süredir süregelen tarım deneyimi ve
        başarısıyla sektörün önde gelen isimlerinden biridir. İzmir'in verimli
        topraklarında, Ödemiş ilçesinde kök salmış olan İrem Tarım, 1000'den
        fazla müşterimize güvenilir ve kaliteli hizmet sunmaktan gurur duyar.
        Güveni temel ilke edinmiş, uzman ve profesyonel kadromuzla,
        çiftçilerimizin yanında olmaktan mutluluk duyuyoruz. CEO'muz Yasin
        Balkan liderliğinde, geleceğe yönelik vizyonumuzla, uygun fiyatlarla
        yüksek kaliteyi buluşturarak tarım sektöründe fark yaratıyoruz. İrem
        Tarım olarak, tarımın sürdürülebilir geleceğine katkı sağlama misyonuyla
        yolculuğumuza devam ediyoruz.
      </Content>
      <Image src="./images/picture.jpg" />
    </Container>
  );
};

export default About;

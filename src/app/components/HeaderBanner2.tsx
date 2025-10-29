'use client';
import styled from 'styled-components';
import { colors, menuBarHeightPixels } from './styledComponents';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: ${menuBarHeightPixels};
  background-color: ${colors.pink};
  color: ${colors.white};
`;

const ImgContainer = styled.div`
  width: 50%;
  max-height: 700px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 700px;
  object-fit: cover;
`;

const TitleBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 70px;
`;

const Title = styled.h1`
  font-size: 130px;
  margin: 0;
  line-height: 1.2;
`;

export default function HeaderBanner2() {
  return (
    <Container>
      <ImgContainer>
        <Img src="/abo/abo.header.jpg" />
      </ImgContainer>
      <TitleBlock>
        <Title>
          Le <br />
          Bouquet <br />
          du mois
        </Title>
      </TitleBlock>
    </Container>
  );
}

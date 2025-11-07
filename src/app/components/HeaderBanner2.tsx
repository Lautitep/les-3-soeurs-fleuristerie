'use client';
import styled from 'styled-components';
import { colors, menuBarHeightPixels } from './styledComponents';
import { media } from '../media';
import { useResponsive } from '@/app/useResponsive';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-top: ${menuBarHeightPixels};
  color: ${colors.white};

  ${media.mobile(`
    flex-direction: column-reverse;
    margin-top: ${menuBarHeightPixels};
  `)}
`;

const ImgContainer = styled.div`
  width: 50%;
  max-height: 700px;

  ${media.mobile(`
    width: 100%;
    max-height: 400px;
  `)}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 700px;
  object-fit: cover;

  ${media.mobile(`
    max-height: 400px;
    object-position: center;
  `)}
`;

const TitleBlock = styled.div`
  background-color: ${colors.pink};
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 70px;

  ${media.tablet(`
    padding-left: 40px;
  `)}

  ${media.mobile(`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px 0 40px;
    text-align: center;
  `)}
`;

const Title = styled.h1`
  font-size: 130px;
  margin: 0;
  line-height: 1.2;

  ${media.tablet(`
    font-size: 90px;
  `)}

  ${media.mobile(`
    font-size: 48px;
    line-height: 1.1;
  `)}
`;

export default function HeaderBanner2() {
  const { isMobile } = useResponsive();

  return (
    <Container>
      <ImgContainer>
        <Img src="/abo/abo.header.jpg" alt="Le bouquet du mois" />
      </ImgContainer>
      <TitleBlock>
        {isMobile ? (
          <Title>
            Le bouquet
            <br /> du mois
          </Title>
        ) : (
          <Title>
            Le <br />
            Bouquet <br />
            du mois
          </Title>
        )}
      </TitleBlock>
    </Container>
  );
}

'use client';
import styled from 'styled-components';
import { colors, fontSizes, frames } from './styledComponents';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img<{ objectPosition?: string }>`
  display: block;
  width: 100.2%;
  max-height: 693px;
  min-height: 476px;
  object-fit: cover;
  object-position: ${({ objectPosition }) =>
    objectPosition ? objectPosition : 'top'};
`;

const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

const OverlayBanner = styled.div<{ color: keyof typeof colors }>`
  background-color: ${({ color }) => colors[color]};
  width: 70%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.beige100};
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: ${fontSizes.h1};
  text-transform: uppercase;
  margin: 0;
  font-weight: 500;
`;

const Subtitle = styled.h3`
  font-size: ${fontSizes.h3};
  font-weight: 200;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 8px 0 32px;
  max-width: 741px;
`;

export default function HeaderBanner({
  image,
  title,
  subtitle,
  color,
  objectPosition,
}: {
  image: string;
  title: string;
  subtitle?: string;
  color: keyof typeof colors;
  objectPosition?: string;
}) {
  return (
    <Container>
      <ImgContainer>
        <Img src={image} alt="Bannière" objectPosition={objectPosition} />
        <ImgOverlay />
      </ImgContainer>
      <OverlayBanner color={color}>
        <Title>{title}</Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        {/* <Text>{text}</Text> */}
      </OverlayBanner>
    </Container>
  );
}

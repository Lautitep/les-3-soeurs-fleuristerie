'use client';
import styled from 'styled-components';
import { colors, margins } from './styledComponents';

const Container = styled.section<{ marginBottom?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  position: relative;
  margin-bottom: ${(props) => (props.marginBottom ? margins.desktop : '0')};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MediaBlock = styled.div`
  position: relative;
  width: 100%;
  height: 750px;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Caption = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
  color: ${colors.white};
  font-style: italic;
  position: absolute;
  bottom: 2%;
  left: 1%;
`;

interface TriptychProps {
  elements: {
    left: string;
    center: string;
    right: string;
    caption?: string;
  };
  marginBottom?: boolean;
}

export default function Triptych({ elements, marginBottom }: TriptychProps) {
  const { left, center, right, caption } = elements;
  return (
    <>
      <Container marginBottom={marginBottom}>
        <MediaBlock>
          <Img src={left} alt="Installation florale" />
        </MediaBlock>

        <MediaBlock>
          <Video
            src={center}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/pro/triptych-poster.jpg"
          />
        </MediaBlock>

        <MediaBlock>
          <Img src={right} alt="Décoration d'événement" />
        </MediaBlock>
        <Caption>{caption}</Caption>
      </Container>
    </>
  );
}

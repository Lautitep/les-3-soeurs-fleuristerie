'use client';

import styled from 'styled-components';
import { frames, margins, colors } from './styledComponents';

type CollageProps = {
  main: { src: string; alt?: string };
  mid: { src: string; alt?: string };
  back: { src: string; alt?: string };
};

const Wrapper = styled.section`
  margin: 0 ${frames.desktop} ${margins.desktop};

  @media (max-width: 900px) {
    margin: 0 ${frames.mobile} ${margins.mobile};
  }
`;

const Stage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Cluster = styled.div`
  position: relative;
  width: min(100%, 1000px);
  aspect-ratio: 1000 / 625;
`;

const PhotoBase = styled.figure<{
  w: string;
  z: number;
  left: string;
  top: string;
}>`
  position: absolute;
  margin: 0;
  width: ${({ w }) => w};
  aspect-ratio: 1 / 1;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: ${({ z }) => z};
  overflow: hidden;
  background: ${colors.beige100};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.16);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 380ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    aspect-ratio: auto;
    box-shadow: none;
    margin-bottom: 12px;
  }
`;

const Back = styled(PhotoBase)``;
const Mid = styled(PhotoBase)``;
const Main = styled(PhotoBase)``;

export default function HeroCollage({ main, mid, back }: CollageProps) {
  return (
    <Wrapper>
      <Stage>
        <Cluster>
          {/* arrière-plan */}
          <Back w="32%" z={1} left="19%" top="10%">
            <img src={back.src} alt={back.alt ?? ''} />
          </Back>

          {/* milieu */}
          <Mid w="32%" z={2} left="48%" top="0%">
            <img src={mid.src} alt={mid.alt ?? ''} />
          </Mid>

          {/* premier plan */}
          <Main w="32%" z={3} left="36%" top="48%">
            <img src={main.src} alt={main.alt ?? ''} />
          </Main>
        </Cluster>
      </Stage>
    </Wrapper>
  );
}

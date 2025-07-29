'use client';
import styled from 'styled-components';
import { menuBarHeightPixels, fonts, margins } from '../styledComponents';
import Image from 'next/image';

const Container = styled.div`
  text-align: center;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  z-index: 1;
  padding-top: ${menuBarHeightPixels};
  margin-bottom: ${margins.desktop};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  color: white;
  position: relative;
  z-index: 2;
  font-family: ${fonts.nanum};
  font-weight: 100;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Logo = styled(Image)`
  position: relative;
  z-index: 3;
`;

export default function Header() {
  return (
    <Container>
      <Overlay />
      <Logo src="/logos/logo_white.png" alt="logo" width={200} height={0} style={{ height: 'auto' }} />
      <Description>Fleurs locales et de saison</Description>
    </Container>
  );
}

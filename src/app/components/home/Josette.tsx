'use client';
import styled from 'styled-components';
import { margins, frames, fontSizes } from '../styledComponents';

const Container = styled.section`
  margin: ${margins.desktop} ${frames.desktop};
  padding: ${margins.desktop} 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImgBlock = styled.div`
  --img: 350px;
  display: flex;
  align-items: flex-end;
  min-height: calc(var(--img) * 1.45);

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Stage = styled.div`
  position: relative;
  width: var(--img);
  isolation: isolate;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const Img1 = styled.img`
  width: var(--img);
  height: var(--img);
  object-fit: cover;
  z-index: 2;
  border-radius: 5px;
  position: absolute;
  top: -45%;
  right: -40%;
`;

const Img2 = styled.img`
  display: block;
  width: var(--img);
  height: var(--img);
  object-fit: cover;
  z-index: 1;
  border-radius: 5px;

  @media (max-width: 900px) {
    /* Sur mobile, on peut repasser à plat si besoin */
    position: static;
    width: 100%;
    height: auto;
    margin-top: 12px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Text = styled.p`
  font-size: ${fontSizes.body};
`;

const Subtitle = styled.h3`
  font-size: ${fontSizes.h3};
  text-transform: uppercase;
  font-weight: 500;
`;

export default function Josette() {
  return (
    <Container>
      <ImgBlock>
        <Stage>
          <Img1 src="/josette/josette1.jpg" alt="Josette Main" />
          <Img2 src="/josette/josette7.jpg" alt="Josette Overlay" />
        </Stage>
      </ImgBlock>

      <TextBlock>
        <Logo src="/josette/logo.josette.png" alt="Logo Josette" />
        <Subtitle>Josette, le café fleur des 3 Sœurs</Subtitle>
        <Text>
          À deux pas du beffroi d’Arras, Josette est le prolongement naturel de
          l’univers des 3 Sœurs : un lieu où la fleur est partout, vivante et
          généreuse. Café, fleuriste et espace bien-être, on y déguste un thé ou
          une pâtisserie fleurie, on y choisit des bouquets de saison, et l’on
          s’offre une pause détente avec des soins inspirés par les fleurs.
          <br />
          Imaginé par Hélène et Claire – l’une spécialisée dans le bien-être
          holistique, l’autre fleuriste engagée pour des créations locales et de
          saison – Josette est né d’un rêve commun : créer un endroit convivial,
          inspirant et délicatement fleuri.
          <br />
          Un lieu à vivre, à partager, et à aimer. 🌸
        </Text>
      </TextBlock>
    </Container>
  );
}

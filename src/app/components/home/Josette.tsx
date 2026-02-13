'use client';
import styled from 'styled-components';
import { margins, frames, fontSizes } from '../styledComponents';
import { media } from '@/app/media';

const Container = styled.section`
  margin: ${margins.desktop} ${frames.desktop};
  padding: ${margins.desktop} 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  align-items: center;

  ${media.tablet(`
    margin: ${margins.mobile} ${frames.tablet};
    padding: ${margins.mobile} 0;
    gap: 32px;
  `)}

  ${media.mobile(`
    grid-template-columns: 1fr;
    margin: 0 ${frames.mobile} ${margins.mobile};
    padding: ${margins.mobile} 0 0;
    gap: 48px;
  `)}
`;

const ImgBlock = styled.div`
  --img: 350px;
  display: flex;
  align-items: flex-end;
  min-height: calc(var(--img) * 1.45);

  ${media.tablet(`
    --img: 280px;
  `)}

  ${media.mobile(`
    --img: 250px;
    min-height: auto;
    align-items: center;
  `)}
`;

const Stage = styled.div`
  position: relative;
  width: var(--img);
  isolation: isolate;

  ${media.mobile(`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`;

const Img1 = styled.img`
  width: var(--img);
  height: var(--img);
  object-fit: cover;
  z-index: 2;
  border-radius: 4px;
  position: absolute;
  top: -45%;
  right: -40%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  ${media.tablet(`
    top: -30%;
    right: -25%;
  `)}

  ${media.mobile(`
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  `)}
`;

const Img2 = styled.img`
  display: block;
  width: var(--img);
  height: var(--img);
  object-fit: cover;
  z-index: 1;
  border-radius: 5px;

  ${media.mobile(`
    width: 100%;
    height: auto;
  `)}
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 0 20px;

  ${media.tablet(`
    padding: 0 ${frames.tablet};
  `)}

  ${media.mobile(`
    padding: 0;
    gap: 16px;
    order: -1;
  `)}
`;

const Logo = styled.img`
  width: 200px;
  height: auto;

  ${media.tablet(`
    width: 160px;
  `)}

  ${media.mobile(`
    width: 140px;
  `)}
`;

const Subtitle = styled.h3`
  font-size: ${fontSizes.h3};
  text-transform: uppercase;
  font-weight: 500;

  ${media.tablet(`
    font-size: 20px;
  `)}
`;

const Text = styled.p`
  font-size: ${fontSizes.body};
  line-height: 1.5;
  max-width: 600px;

  ${media.tablet(`
    font-size: 15px;
  `)}

  ${media.mobile(`
    font-size: 15px;
    max-width: none;
  `)}
`;

export default function Josette() {
  return (
    <Container>
      <ImgBlock>
        <Stage>
          <Img1 src="/josette/josette1.jpg" alt="Josette Main" />
          <Img2 src="/josette/josette2.jpg" alt="Josette Overlay" />
        </Stage>
      </ImgBlock>

      <TextBlock>
        <Logo src="/josette/logo.josette.png" alt="Logo Josette" />
        <Subtitle>Josette, le café fleur des 3 Sœurs</Subtitle>
        <Text>
          À deux pas du beffroi d’Arras, Josette est le prolongement naturel de
          l’univers des 3 Sœurs : un lieu où la fleur est partout, vivante et
          généreuse. Café et fleuriste, on y déguste un thé ou une pâtisserie
          fleurie, on y choisit des bouquets de saison, et l’on s’offre une
          pause douce au coeur de la ville.
          <br />
          Josette est aussi un clin d‘oeil tendre à Joséphine, la fille de
          Claire. Un prénom qui évoque la transmission, la créativité et le goût
          des choses simples, partagées autour d‘une table ou d‘un bouquet.
          <br />
          Un lieu chaleureux, à vivre, à partager... et à aimer. 🌸
        </Text>
      </TextBlock>
    </Container>
  );
}

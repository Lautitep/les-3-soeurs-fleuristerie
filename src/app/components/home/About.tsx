'use client';
import styled from 'styled-components';
import { colors, frames, margins } from '../styledComponents';
import { useResponsive } from '@/app/useResponsive';
import { media } from '@/app/media';

const Container = styled.div`
  display: flex;
  height: 600px;
  margin: ${margins.desktop} 0 0;

  ${media.tablet(`
    margin: ${margins.mobile} 0 0;
  `)}

  ${media.mobile(`
    flex-direction: column;
    height: auto;
  `)}
`;

const TextContainer = styled.div`
  background-color: ${colors.yellow};
  width: 50%;
  padding: 95px 0 95px ${frames.desktop};
  text-align: start;
  color: ${colors.white};

  ${media.tablet(`
    padding: 85px 0 85px ${frames.tablet};
  `)}

  ${media.mobile(`
    width: 100%;
    padding: 40px ${frames.mobile};
  `)}
`;

const Line = styled.div`
  width: 100px;
  height: 2px;
  background-color: ${colors.white};
  margin: 15px 0 20px;
`;

const Portrait = styled.img`
  width: 50%;
  object-fit: cover;
  object-position: top;
  ${media.mobile(`
    border-radius: 5px;
    margin: 0;
    width: 100%;
    height: 375px;
    object-position: top;
  `)}
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  max-width: 400px;

  ${media.mobile(`
    font-size: 24px;
    max-width: none;
  `)}
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 200;
  max-width: 400px;
  line-height: 1.5;

  ${media.mobile(`
    font-size: 15px;
    max-width: none;
    margin-top: 16px;
  `)}
`;

export default function About() {
  const { isMobile } = useResponsive();

  return (
    <Container>
      {isMobile ? (
        <TextContainer>
          <Title>NOTRE HISTOIRE</Title>
          <Line />
          <Portrait src="/claire_portrait.jpg" alt="portrait de Claire" />
          <Text>
            Après plusieurs années dans l’événementiel, l’envie d’un métier plus
            ancré, plus créatif et connecté à la nature s’est imposée comme une
            évidence. C’est ainsi qu’est née ma reconversion vers la fleur,
            d’abord avec Jolies Fleurs, ma première boutique, puis aujourd’hui
            avec Les 3 Sœurs.
            <br />
            Ce projet puise son inspiration dans un séjour d’un an au Canada, où
            j’ai découvert la permaculture et une manière plus consciente de
            travailler avec le vivant. Le nom Les 3 Sœurs fait d’ailleurs écho à
            cette méthode d’association végétale où chaque plante soutient les
            deux autres. Symbole d’équilibre, de complicité et de transmission.
            <br />
            Les 3 Sœurs, c’est l’alliance entre l’artisanat floral, la
            créativité et le lien humain. Un atelier où l’on compose, où l’on
            partage, et où l’on célèbre la vie en fleurs.
          </Text>
        </TextContainer>
      ) : (
        <>
          <TextContainer>
            <Title>NOTRE HISTOIRE</Title>
            <Line />
            <Text>
              Après plusieurs années dans l’événementiel, l’envie d’un métier
              plus ancré, plus créatif et connecté à la nature s’est imposée
              comme une évidence. C’est ainsi qu’est née ma reconversion vers la
              fleur, d’abord avec Jolies Fleurs, ma première boutique, puis
              aujourd’hui avec Les 3 Sœurs.
              <br />
              Ce projet puise son inspiration dans un séjour d’un an au Canada,
              où j’ai découvert la permaculture et une manière plus consciente
              de travailler avec le vivant. Le nom Les 3 Sœurs fait d’ailleurs
              écho à cette méthode d’association végétale où chaque plante
              soutient les deux autres. Symbole d’équilibre, de complicité et de
              transmission.
              <br />
              Les 3 Sœurs, c’est l’alliance entre l’artisanat floral, la
              créativité et le lien humain. Un atelier où l’on compose, où l’on
              partage, et où l’on célèbre la vie en fleurs.
            </Text>
          </TextContainer>
          <Portrait
            src="/claire_portrait.jpg"
            alt="portrait de Claire"
            style={{ width: '50%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </>
      )}
    </Container>
  );
}

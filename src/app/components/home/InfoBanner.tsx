import styled from 'styled-components';
import { colors, frames, margins, fontSizes } from '../styledComponents';
import { media } from '../../media';
import Link from 'next/link';

const Container = styled.div`
  padding: ${margins.desktop} ${frames.desktop};
  margin: 0 auto;
  text-align: center;
  background-color: ${colors.beige100};
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  ${media.tablet(`
    flex-direction: column;
    gap: 30px;
    padding: ${margins.mobile} ${frames.tablet};
  `)}

  ${media.mobile(`
    gap: 20px;
    padding: 0 ${frames.mobile};
  `)}
`;

const TextContainer = styled.div`
  width: 50%;
  text-align: start;

  ${media.tablet(`
    width: 80%;
    text-align: center;
  `)}

  ${media.mobile(`
    width: 90%;
  `)}
`;

const Title = styled.h2`
  font-size: ${fontSizes.h1};
  font-weight: 400;

  ${media.tablet(`
    font-size: ${fontSizes.h2};
  `)}

  ${media.mobile(`
    font-size: ${fontSizes.h3};
  `)}
`;

const Subtitle = styled.h3`
  font-size: ${fontSizes.h3};
  font-weight: 400;

  ${media.mobile(`
    font-size: ${fontSizes.body};
  `)}
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: ${fontSizes.body};
  font-weight: 200;
  color: ${colors.grey};
  line-height: 1.5;

  ${media.tablet(`
    font-size: ${fontSizes.small};
  `)}
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${media.tablet(`
    width: 100%;
    flex-wrap: wrap;
  `)}

  ${media.mobile(`
    gap: 10px;
  `)}
`;

const Logo = styled.img`
  height: 200px;

  ${media.tablet(`
    height: 150px;
  `)}

  ${media.mobile(`
    height: 100px;
  `)}
`;

export default function InfoBanner() {
  return (
    <Container>
      <ImageContainer>
        <Logo src="/logos/logo_fleur_pink.png" alt="logo les 3 soeurs" />
        <Link
          href="https://www.collectifdelafleurfrancaise.com/"
          target="_blank"
        >
          <Logo
            src="/logos/logo-collectif-fleur-francaise.webp"
            alt="logo fleur française"
          />
        </Link>
      </ImageContainer>
      <TextContainer>
        <Title>LES 3 SOEURS</Title>
        <Subtitle>FLEURISTERIE ÉCORESPONSABLE</Subtitle>
        <Text>
          Fleuriste sur le secteur d’Arras, en format atelier. Nous avons à cœur
          de vous proposer des fleurs françaises dans le respect de la
          saisonnalité de celles-ci. Nous nous ferons un plaisir de vous
          accompagner dans tous vos projets.
        </Text>
        <Text>
          Les 3 Sœurs, c’est une passion pour la nature et pour son respect.
          C’est pourquoi nous sommes convaincus que notre métier doit évoluer
          dans ce sens. Membre du Collectif de la Fleur Française, nous
          priorisons l’utilisation de fleurs françaises et la recherche de
          producteurs locaux en fleur coupée.
        </Text>
      </TextContainer>
    </Container>
  );
}

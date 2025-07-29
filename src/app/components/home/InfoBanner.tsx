import styled from "styled-components";
import { colors, frames, fonts, margins } from "../styledComponents";
import Link from "next/link";

const Container = styled.div`
  padding: ${margins.desktop} ${frames.desktop};
  margin: 0 auto;
  text-align: center;
  background-color: ${colors.beige100};
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 50%;
  text-align: start;
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  /* font-family: ${fonts.playfair}; */
`;
const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  /* font-family: ${fonts.playfair}; */
`;
const Text = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 200;
  color: ${colors.grey};
`;
const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 200px;
`;


export default function InfoBanner() {
  return (
    <Container>
      <ImageContainer>
        <Logo src="/logos/logo_fleur_pink.png" alt="background" />
        <Link href="https://www.collectifdelafleurfrancaise.com/" target="_blank">
          <Logo src="/logos/logo-collectif-fleur-francaise.webp" alt="logo fleur française" />
        </Link>
      </ImageContainer>
      <TextContainer>
        <Title>LES 3 SOEURS</Title>
        <Subtitle>FLEURISTERIE ÉCORESPONSABLE</Subtitle>
        <Text>Fleuriste sur le secteur d’Arras, en format atelier. Nous avons à coeur de vous proposer des fleurs françaises dans le respect de la saisonnalité de celles-ci. Nous nous ferons un plaisir de vous accompagner dans tous vos projets.</Text>
        <Text>Les 3 Sœurs c’est une passion pour la nature et pour son respect.
        C’est pourquoi, nous sommes convaincus que notre métier doit évoluer dans ce sens. Membre du Collectif de la fleur Française, nous priorisons l’utilisation de fleurs françaises.
        Dans ce sens également, nous sommes sans cesse à la recherche de producteurs locaux dans la fleur coupée.</Text>
      </TextContainer>
    </Container>
  );
}

'use client';
import styled from 'styled-components';
import { colors, fonts, frames, margins } from '../styledComponents';

const Container = styled.div`
  display: flex;
  height: 600px;
  margin: ${margins.desktop} 0;
`;

const TextContainer = styled.div`
  background-color: ${colors.yellow};
  width: 50%;
  padding: 128px 0 128px ${frames.desktop};
  text-align: start;
  color: ${colors.white};
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
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  max-width: 400px;
  /* font-family: ${fonts.playfair}; */
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 200;
  max-width: 400px;
`;

export default function About() {
  return (
    <Container>
      <TextContainer>
        <Title>NOTRE HISTOIRE</Title>
        <Line/>
        <Text>
          8 ans après Jolies Fleurs ma première boutique, je reprends le chemin de la création d’entreprise en créant LES 3 SŒURS.
          Plus de boutique mais un atelier pour continuer à créer bouquets et compositions pour toutes les occasions…
          <br/>
          C’est l’esprit ouvert et rêveur suite à un séjour d’un an au Québec que je retrouve avec beaucoup de joie et d’excitation le chemin de mes fleurs chéries.
          <br/>
          J’ai tellement hâte de vous rencontrer ou retrouver !
          <br/>
          A très vite
        </Text>
      </TextContainer>
      <Portrait src="/claire_portrait.jpg" alt="portrait de Claire" />
    </Container>
  );
}

'use client';

import styled from 'styled-components';
import { frames, colors, fontSizes, margins } from './styledComponents';

const Section = styled.section`
  background: ${colors.beige200};
  padding: 32px ${frames.desktop};
  text-align: center;
  margin: ${margins.desktop} 0;

  @media (max-width: 900px) {
    padding: 60px ${frames.mobile};
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${fontSizes.h3};
  font-weight: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Card = styled.blockquote`
  background: white;
  padding: 22px;
  text-align: left;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  font-style: italic;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

const Author = styled.footer`
  margin-top: 16px;
  text-align: right;
  font-style: normal;
  font-weight: 600;
`;

export default function Feedbacks() {
  return (
    <Section>
      <Title>Les mots des mariés</Title>
      <Grid>
        <Card>
          <p>
            “Nous souhaitions encore vous remercier pour votre magnifique
            travail 😄 les fleurs étaient tellement belles et totalement en
            accord avec les couleurs de notre mariage. Alors merci encore pour
            vos créations. Nous vous souhaitons une belle continuation et
            n‘hésiterons pas à vous recommander et faire de nouveau appel à vous
            si jamais !“
          </p>
          <Author>— Elise & Renaud</Author>
        </Card>

        <Card>
          <p>
            “Nous avons choisi Claire et ses magnifiques fleurs françaises pour
            fleurir notre mariage. Quel bonheur d‘avoir trouvé une personne
            aussi gentille, qualifiée et impliquée. Elle a compris ce que je
            voulais et plus encore ! N‘hésitez plus ! Infiniment merci 🌷🌺🌿“
          </p>
          <Author>— Laetitia & Rémi</Author>
        </Card>

        <Card>
          <p>
            “Claire est exceptionnelle, elle fait des merveilles ! Elle nous a
            fleuri l‘ensemble de notre mariage avec de magnifiques fleurs
            colorées, le bouquet de la mariée était juste splendide, les tables
            également, ainsi que tout le lieu. Encore un grand merci pour ta
            gentillesse et ta disponibilité !“
          </p>
          <Author>— Pauline & Erwin</Author>
        </Card>
      </Grid>
    </Section>
  );
}

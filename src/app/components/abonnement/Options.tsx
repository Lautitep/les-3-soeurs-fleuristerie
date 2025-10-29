'use client';

import styled from 'styled-components';
import { colors, margins, frames, fonts, fontSizes } from '../styledComponents';
import { Flower2 } from 'lucide-react';
import Image from 'next/image';

const Section = styled.section`
  padding: 0 ${margins.desktop} ${frames.desktop};
  background-color: ${colors.beige100};
  text-align: center;

  @media (max-width: 900px) {
    padding: ${margins.mobile};
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 2px solid ${colors.black};
  padding: 48px 32px;
  width: 300px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.h3};
  color: ${colors.black};
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: ${colors.grey};
  margin-bottom: 32px;
`;

const Button = styled.a`
  align-self: start;
  padding: 10px 20px;
  border: 1px solid ${colors.black};
  border-radius: 2px;
  color: ${colors.black};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.beige100};
  }
`;

export default function Options() {
  return (
    <Section>
      <Grid>
        <Card>
          <TitleDiv>
            <Title>Bouquet S</Title>
            <Icon
              src="/abo/bouquet-s.png"
              alt="Bouquet S"
              width={36}
              height={36}
            />
          </TitleDiv>

          <Price>40€ / mois</Price>
          <Description>
            Un bouquet délicat et coloré, idéal pour les petits espaces ou pour
            offrir une touche florale discrète.
            <br />
            Livraison incluse dans un rayon de 15 km autour d’Arras.
          </Description>
          <Button
            href="https://pay.gocardless.com/ALINK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            S’abonner
          </Button>
        </Card>

        <Card>
          <TitleDiv>
            <Title>Bouquet M</Title>
            <Icon
              src="/abo/bouquet-m.png"
              alt="Bouquet S"
              width={36}
              height={36}
            />
          </TitleDiv>
          <Price>60€ / mois</Price>
          <Description>
            Le format le plus apprécié : un bouquet généreux et équilibré,
            parfait pour embellir votre intérieur ou votre lieu de travail.
            <br />
            Livraison incluse dans un rayon de 15 km autour d’Arras.
          </Description>
          <Button
            href="https://pay.gocardless.com/ALINK2"
            target="_blank"
            rel="noopener noreferrer"
          >
            S’abonner
          </Button>
        </Card>

        <Card>
          <TitleDiv>
            <Title>Bouquet L</Title>
            <Icon
              src="/abo/bouquet-l.png"
              alt="Bouquet S"
              width={36}
              height={36}
            />
          </TitleDiv>

          <Price>80€ / mois</Price>
          <Description>
            Pour les amateurs de belles compositions : un bouquet ample et
            travaillé, aux volumes généreux et fleurs d’exception.
            <br />
            Livraison incluse dans un rayon de 15 km autour d’Arras.
          </Description>
          <Button
            href="https://pay.gocardless.com/ALINK3"
            target="_blank"
            rel="noopener noreferrer"
          >
            S’abonner
          </Button>
        </Card>
      </Grid>
    </Section>
  );
}

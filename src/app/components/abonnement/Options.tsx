'use client';

import styled from 'styled-components';
import { colors, margins, frames, fonts, fontSizes } from '../styledComponents';
import Image from 'next/image';
import { media } from '@/app/media';

const Section = styled.section`
  padding: 0 ${frames.desktop} ${margins.desktop};
  background-color: ${colors.beige100};
  text-align: center;

  ${media.tablet(`
    padding: 0 ${frames.tablet} ${margins.mobile} ;
  `)}

  ${media.mobile(`
    padding: 0  ${frames.mobile} ${margins.mobile};
  `)}
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 78px;
  flex-wrap: wrap;

  ${media.tablet(`
    gap: 20px;
  `)}
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

  ${media.tablet(`
    width: 217px;
    padding: 36px 24px;
    justify-content: center;
  `)}

  ${media.mobile(`
    width: 100%;
    padding: 24px 16px;
  `)}
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

  ${media.mobile(`
    font-size: 22px;
  `)}
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
  ${media.mobile(`
    margin-bottom: 12px;
    font-size: 18px;
  `)}
`;

const Description = styled.p`
  font-size: ${fontSizes.small};
  line-height: 1.5;
  color: ${colors.grey};
  margin-bottom: 32px;

  ${media.mobile(`
    margin-bottom: 12px;
  `)}
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
            Un bouquet délicat et coloré, idéal pour égayer le quotidien ou
            offrir une attention florale pleine de douceur.
            <br />
            <i>Livraison dans un rayon de 15 km, chaque 2ᵉ vendredi du mois.</i>
          </Description>
          <Button
            href="https://pay.gocardless.com/BRT00045DJ092SH"
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
            Le format le plus apprécié : un bouquet généreux et harmonieux, qui
            trouve sa place aussi bien à la maison qu’au bureau.
            <br />
            <i>Livraison dans un rayon de 15 km, chaque 2ᵉ vendredi du mois.</i>
          </Description>
          <Button
            href="https://pay.gocardless.com/BRT00045DJ89V8Z"
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
            Une composition ample et élégante, aux volumes généreux et fleurs
            d’exception. Pensée pour sublimer vos espaces ou marquer les grandes
            occasions.
            <br />
            <i>Livraison dans un rayon de 15 km, chaque 2ᵉ vendredi du mois.</i>
          </Description>
          <Button
            href="https://pay.gocardless.com/BRT00045DJB4SGD"
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

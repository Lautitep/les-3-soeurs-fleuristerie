'use client';

import styled from 'styled-components';
import { frames, colors, margins, TitleH3 } from '../styledComponents';

const Section = styled.section`
  background: ${colors.lightGrey};
  padding: 96px ${frames.desktop};
  text-align: center;
  margin: ${margins.desktop} 0;
  color: ${colors.beige100};

  @media (max-width: 900px) {
    padding: 60px ${frames.mobile};
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  gap: 100px;
`;

const Card = styled.div`
  max-width: 100px;
  height: auto;
  &:hover {
    transform: scale(1.15);
    transition: transform 300ms ease-in-out;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const locations = [
  {
    name: 'Le Clos Barthelemy',
    logo: '/events/locations/leClosBarthelemy.logo.png',
    website: 'https://closbarthelemy.fr/',
  },
  {
    name: 'Le Clos Délice',
    logo: '/events/locations/leClosDelice.logo.png',
    website: 'https://www.leclosdelice.com/',
  },
  {
    name: 'Le Domaine de la Traxène',
    logo: '/events/locations/leDomaineDeLaTraxene.logo.png',
    website: 'https://domainedelatraxene.com/',
  },
  {
    name: 'La Ferme Terracotta',
    logo: '/events/locations/laFermeTerracotta.logo.png',
    website: 'https://lafermeterracotta.com/',
  },
  {
    name: 'Hôtel Le Fairway',
    logo: '/events/locations/fairway.logo.svg',
    website: 'https://www.hotel-spa-fairway.com/',
  },
];

export default function Locations() {
  return (
    <Section>
      <TitleH3>Des lieux d‘exceptions, pour des instants mémorables</TitleH3>
      <Grid>
        {locations.map((location) => (
          <Card key={location.name}>
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img src={location.logo} alt={location.name} />
            </a>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

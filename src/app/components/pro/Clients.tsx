'use client';

import styled from 'styled-components';
import { frames, colors, fontSizes, margins } from '../styledComponents';

const Section = styled.section`
  background-color: ${colors.beige200};
  padding: 96px ${frames.desktop};
  text-align: center;
  color: ${colors.black};

  @media (max-width: 900px) {
    padding: 60px ${frames.mobile};
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${fontSizes.h3};
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 32px;
  row-gap: 14px;
`;

const Card = styled.div`
  max-width: 80px;
  height: auto;
  &:hover {
    transform: scale(1.15);
    transition: transform 300ms ease-in-out;
  }
`;

const Logo = styled.img<{ filter?: boolean; width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: auto;
  filter: ${(props) =>
    props.filter ? 'brightness(0) contrast(1.1);' : 'none'};
`;

const locations = [
  {
    name: 'Leroy Merlin',
    logo: '/pro/clients/leroyMerlin.logo.png',
    website: 'https://www.leroymerlin.fr/magasins/arras.html',
    filter: true,
  },
  {
    name: 'Biocoop',
    logo: '/pro/clients/biocoop.logo.png',
    website: 'https://www.biocoop-bioenartois.fr/',
    filter: true,
  },
  {
    name: 'Le Clos Délice',
    logo: '/events/locations/leClosDelice.logo.png',
    website: 'https://www.leclosdelice.com/',
    filter: true,
    width: 100,
  },
  {
    name: 'Hôtel Le Fairway',
    logo: '/events/locations/fairway.logo.svg',
    website: 'https://www.hotel-spa-fairway.com/',
    filter: true,
  },
  {
    name: 'Hotel Mercure',
    logo: '/pro/clients/mercure.logo.png',
    website: 'https://all.accor.com/hotel/1560/index.fr.shtml',
    filter: true,
  },
  {
    name: 'La Communauté Urbaine d‘Arras',
    logo: '/pro/clients/communauteUrbaineArras.logo.svg',
    website: 'https://www.grandarras.fr/',
    filter: true,
  },
  {
    name: 'Kiwanis',
    logo: '/pro/clients/kiwanis.logo.png',
    website: 'https://www.kiwanis.fr/',
    filter: false,
  },
  {
    name: 'La Vie Active',
    logo: '/pro/clients/vieActive.logo.png',
    website: 'https://vieactive.fr/',
    filter: true,
  },
  {
    name: 'Ville d‘Arras',
    logo: '/pro/clients/villeArras.logo.jpg',
    website: 'https://www.arras.fr/',
    filter: false,
    width: 60,
  },
  {
    name: 'Aquarena',
    logo: '/pro/clients/aquarena.logo.svg',
    website: 'https://aquarena.fr/',
    filter: true,
  },
];

export default function Clients() {
  return (
    <Section>
      <Title>Ils nous font confiance</Title>
      <Grid>
        {locations.map((location) => (
          <Card key={location.name}>
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo
                src={location.logo}
                alt={location.name}
                filter={location.filter}
                width={location.width}
              />
            </a>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

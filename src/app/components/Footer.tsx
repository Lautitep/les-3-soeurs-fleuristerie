import styled from 'styled-components';
import { colors, frames } from './styledComponents';
import SocialIcons from './SocialIcons';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: ${colors.pink};
  color: white;
  padding: 90px 272px 30px;
`;
const BlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  text-align: flex-start;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

const StyledLink = styled.p`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <BlockContainer>
        <SubContainer>
          <Title>Contact</Title>
          <p>Basée à Arras (62000)</p>
          <a href="mailto:les3soeurs.fleuristerie@gmail.com">
            les3soeurs.fleuristerie@gmail.com
          </a>
          <a href="tel:+33647930161">+336 47 93 01 61</a>
          <SocialIcons />
        </SubContainer>
        <SubContainer>
          <Title>Pages</Title>
          <Link href="/evenements" passHref>
            <StyledLink>Évènements</StyledLink>
          </Link>
          <Link href="/abonnement" passHref>
            <StyledLink>Bouquet du mois</StyledLink>
          </Link>
          <Link href="/ateliers" passHref>
            <StyledLink>Ateliers</StyledLink>
          </Link>
          <Link href="/professionnel" passHref>
            <StyledLink>Professionnel</StyledLink>
          </Link>
          <StyledLink>Contact</StyledLink>
        </SubContainer>
        <SubContainer>
          <Title>À propos</Title>
          <p>Mentions Légales</p>
          <p>CGV</p>
          <p>CGU</p>
        </SubContainer>
      </BlockContainer>
      <p>© 2025, Les 3 Soeurs - Créé par Laubingo</p>
    </FooterContainer>
  );
}

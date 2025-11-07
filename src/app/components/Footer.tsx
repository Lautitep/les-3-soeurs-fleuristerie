import styled from 'styled-components';
import { colors, fontSizes, frames, margins } from './styledComponents';
import SocialIcons from './SocialIcons';
import Link from 'next/link';
import { media } from '@/app/media';

const FooterContainer = styled.footer`
  background-color: ${colors.pink};
  color: ${colors.white};
  padding: 90px 272px 30px;

  ${media.tablet(`
    padding: 80px ${frames.tablet} 30px;
  `)}

  ${media.mobile(`
    padding: ${margins.mobile} ${frames.mobile} 20px;
    text-align: center;
  `)}
`;

const BlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 50px;

  ${media.tablet(`
    gap: 40px;
  `)}

  ${media.mobile(`
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-bottom: 32px;
  `)}
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  ${media.mobile(`
    align-items: center;
  `)}
`;

const Title = styled.h3`
  font-size: ${fontSizes.h3};
  text-transform: uppercase;
  margin-bottom: 10px;

  ${media.mobile(`
    font-size: 20px;
  `)}
`;

const StyledLink = styled.p`
  font-size: ${fontSizes.body};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${media.mobile(`
    font-size: 15px;
  `)}
`;

const FooterBottom = styled.p`
  font-size: 14px;
  text-align: center;
  opacity: 0.9;
  margin-top: 20px;
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
          <a href="tel:+33647930161">+33 6 47 93 01 61</a>
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
          <Link href="/mentionslegales" passHref>
            <StyledLink>Mentions légales</StyledLink>
          </Link>
          <Link href="/cgv" passHref>
            <StyledLink>CGV</StyledLink>
          </Link>
          <Link href="/politique-de-confidentialite" passHref>
            <StyledLink>Politique de confidentialité</StyledLink>
          </Link>
        </SubContainer>
      </BlockContainer>

      <FooterBottom>
        © 2025, Les 3 Sœurs — Tissé de code et de pétales par Laubingo 🌷
      </FooterBottom>
    </FooterContainer>
  );
}

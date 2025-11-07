'use client';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { colors, frames, fontSizes } from '../components/styledComponents';
import { media } from '../media';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.beige100};
  color: ${colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 80px auto;
  padding: 0 ${frames.desktop};

  ${media.tablet(`
    padding: 0 ${frames.tablet};
  `)}

  ${media.mobile(`
    padding: 0 ${frames.mobile};
  `)}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 60px;
  color: ${colors.black};

  ${media.tablet(`
    font-size: 1.8rem;
    margin-bottom: 48px;
  `)}

  ${media.mobile(`
    font-size: 1.5rem;
    margin-bottom: 32px;
  `)}
`;

const Section = styled.section`
  margin-bottom: 40px;

  ${media.mobile(`
    margin-bottom: 28px;
  `)}

  h2 {
    font-size: 1.2rem;
    color: ${colors.black};
    margin-bottom: 8px;

    ${media.tablet(`
      font-size: 1.1rem;
    `)}

    ${media.mobile(`
      font-size: 1rem;
    `)}
  }

  p {
    font-size: ${fontSizes.body};
    line-height: 1.5;
    margin: 6px 0;

    ${media.tablet(`
      font-size: 15px;
    `)}

    ${media.mobile(`
      font-size: 14px;
      line-height: 1.6;
    `)}
  }

  a {
    color: ${colors.pink};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;

    &:hover {
      border-bottom-color: ${colors.pink};
    }

    ${media.mobile(`
      word-break: break-word;
    `)}
  }
`;

export default function MentionsLegales() {
  return (
    <Container>
      <Content>
        <Title>Mentions légales</Title>

        <Section>
          <h2>Éditeur du site</h2>
          <p>
            Les 3 Sœurs – Atelier floral
            <br />
            152 rue du Galibier
            <br />
            62223 Saint-Nicolas-lez-Arras – France
            <br />
            SIRET : 418 541 553 00024
            <br />
            TVA intracommunautaire : FR23418541553
            <br />
            📧{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
          </p>
        </Section>

        <Section>
          <h2>Responsable de la publication</h2>
          <p>Claire Petit</p>
        </Section>

        <Section>
          <h2>Hébergement</h2>
          <p>
            OVH – 2 rue Kellermann – 59100 Roubaix – France
            <br />
            📞 1007 –{' '}
            <a
              href="https://www.ovh.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ovh.com
            </a>
          </p>
        </Section>

        <Section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu présent sur ce site (textes, photographies,
            visuels, logo, vidéos, code source) est la propriété exclusive de
            Les 3 Sœurs ou de ses partenaires. Toute reproduction,
            représentation ou adaptation, partielle ou totale, sans autorisation
            écrite, est interdite et constitue une contrefaçon au sens du Code
            de la Propriété Intellectuelle.
          </p>
        </Section>

        <Section>
          <h2>Protection des données personnelles</h2>
          <p>
            Les 3 Sœurs collecte uniquement les données nécessaires à la gestion
            des demandes via le formulaire de contact ou par e-mail. Aucune
            donnée personnelle n’est vendue ou transmise à des tiers.
          </p>
          <p>
            Conformément au RGPD (UE 2016/679), vous disposez d’un droit
            d’accès, de rectification et de suppression de vos données. Vous
            pouvez exercer ces droits en écrivant à :{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section>
          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies nécessaires à son bon
            fonctionnement (mesure d’audience, affichage responsive, intégration
            de médias). Vous pouvez désactiver les cookies à tout moment dans
            les paramètres de votre navigateur.
          </p>
        </Section>

        <Section>
          <h2>Crédits</h2>
          <p>
            Rédaction, conception et direction artistique : Les 3 Sœurs
            <br />
            Développement web et design : Laura Petit
            <br />
            Photographies : Les 3 Sœurs et leurs partenaires
            <br />
            Logo et identité visuelle : Les 3 Sœurs
          </p>
        </Section>

        <Section>
          <h2>Droit applicable</h2>
          <p>
            Le site et son contenu sont régis par le droit français. Tout litige
            relatif à son utilisation relève de la compétence exclusive des
            tribunaux français.
          </p>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}

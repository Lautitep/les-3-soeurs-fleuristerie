'use client';

import styled from 'styled-components';
import Footer from '../components/Footer';
import { media } from '../media';
import { colors, fontSizes, frames } from '../components/styledComponents';

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

export default function PolitiqueConfidentialite() {
  return (
    <Container>
      <Content>
        <Title>Politique de confidentialité</Title>

        <p>
          Dernière mise à jour : <strong>octobre 2025</strong>
        </p>

        <Section>
          <h2>Introduction</h2>
          <p>
            La présente politique de confidentialité a pour objectif d’informer
            les visiteurs du site{' '}
            <a href="https://www.les3soeursfleuristerie.com">
              www.les3soeursfleuristerie.com
            </a>{' '}
            sur la manière dont leurs données personnelles sont collectées,
            utilisées et protégées.
          </p>
          <p>
            L’éditeur du site est <strong>Les 3 Sœurs</strong>, représentée par{' '}
            <strong>Claire Petit</strong>, dont le siège est situé au 152 rue du
            Galibier, 62223 Saint-Nicolas-lez-Arras, France.
          </p>
          <p>
            📩 Contact :{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
          </p>
        </Section>

        <Section>
          <h2>Données collectées</h2>
          <p>
            Nous collectons uniquement les données strictement nécessaires à la
            gestion de vos demandes :
          </p>
          <p>
            <strong>Formulaire de contact :</strong> nom, adresse e-mail,
            message libre — utilisées uniquement pour répondre à votre demande.
          </p>
          <p>
            <strong>Abonnement / demandes d’informations :</strong> les données
            transmises via nos formulaires peuvent être utilisées pour organiser
            nos échanges et le suivi de vos projets.
          </p>
          <p>
            Aucune autre donnée personnelle n’est collectée sans votre
            consentement explicite.
          </p>
        </Section>

        <Section>
          <h2>Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>répondre à vos questions et demandes de devis ;</li>
            <li>
              gérer les échanges liés à vos commandes, ateliers ou abonnements ;
            </li>
            <li>
              communiquer des informations en lien avec l’activité des 3 Sœurs
              si vous en avez fait la demande ;
            </li>
            <li>
              améliorer, de manière anonyme, la qualité de notre site et de nos
              services.
            </li>
          </ul>
          <p>
            Vos données ne sont en aucun cas revendues ni transmises à des tiers
            à des fins commerciales.
          </p>
        </Section>
        <Section>
          <h2>Durée de conservation</h2>
          <p>
            Les données envoyées via le formulaire de contact sont conservées
            jusqu’à <strong>12 mois</strong> après le dernier échange, sauf
            relation commerciale engagée.
          </p>
          <p>
            Les données liées à une prestation, facture ou obligation légale
            sont conservées pour la durée requise par la réglementation
            française (obligations comptables et fiscales).
          </p>
        </Section>
        <Section>
          <h2>Sécurité</h2>
          <p>
            Les 3 Sœurs mettent en œuvre des mesures techniques et
            organisationnelles raisonnables pour protéger vos données contre la
            perte, l’accès non autorisé, l’altération ou la divulgation.
          </p>
          <p>
            Le site est hébergé par <strong>OVH</strong>, 2 rue Kellermann,
            59100 Roubaix, France.
          </p>
        </Section>
        <Section>
          <h2>Cookies</h2>
          <p>
            Le site{' '}
            <a href="https://www.les3soeursfleuristerie.com">
              www.les3soeursfleuristerie.com
            </a>{' '}
            utilise uniquement des cookies{' '}
            <strong>techniques nécessaires</strong> à son bon fonctionnement
            (sécurité, affichage, navigation).
          </p>
          <p>
            Aucun cookie publicitaire ou de suivi personnalisé n’est utilisé. Si
            des outils de mesure d’audience ou des services tiers venaient à
            être ajoutés, cette politique serait mise à jour en conséquence.
          </p>
        </Section>
        <Section>
          <h2>Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul>
            <li>droit d’accès à vos données ;</li>
            <li>droit de rectification ;</li>
            <li>droit d’effacement (« droit à l’oubli ») ;</li>
            <li>droit à la limitation ou à l’opposition du traitement ;</li>
            <li>droit à la portabilité de vos données.</li>
          </ul>
          <p>
            Pour exercer vos droits, il vous suffit de nous contacter à
            l’adresse suivante :{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
            .
          </p>
          <p>
            Vous disposez également du droit d’introduire une réclamation auprès
            de la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
              www.cnil.fr
            </a>
            ).
          </p>
        </Section>
        <Section>
          <h2>Modifications de la politique</h2>
          <p>
            La présente politique peut être amenée à évoluer afin de rester
            conforme aux obligations légales ou aux évolutions de nos services.
            Nous vous invitons à la consulter régulièrement.
          </p>
        </Section>

        <Section>
          <h2>Contact</h2>
          <p>
            Pour toute question relative à vos données personnelles ou à cette
            politique de confidentialité :
          </p>
          <p>
            Les 3 Sœurs – Claire Petit
            <br />
            152 rue du Galibier
            <br />
            62223 Saint-Nicolas-lez-Arras – France
            <br />
            📩{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
          </p>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}

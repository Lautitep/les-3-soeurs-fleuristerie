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

  ul {
    margin: 10px 0 10px 20px;
    padding: 0;
    list-style: disc;

    ${media.tablet(`
      margin-left: 16px;
    `)}

    ${media.mobile(`
      margin-left: 14px;
    `)}

    li {
      margin-bottom: 6px;
    }
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

export default function CGV() {
  return (
    <Container>
      <Content>
        <Title>Conditions Générales de Vente</Title>

        <Section>
          <h2>Présentation</h2>
          <p>
            Les présentes conditions générales de vente s’appliquent à
            l’ensemble des produits et prestations proposés par{' '}
            <strong>Les 3 Sœurs</strong>, entreprise représentée par{' '}
            <strong>Claire Petit</strong>, située au{' '}
            <strong>152 rue du Galibier, 62223 Saint-Nicolas-lez-Arras</strong>,
            SIRET <strong>418 541 553 00032</strong>. Le site internet{' '}
            <a href="https://www.les3soeursfleuristerie.com">
              www.les3soeursfleuristerie.com
            </a>{' '}
            présente les activités et offres de la fleuristerie. Toute commande,
            y compris un abonnement bouquet, implique l’acceptation sans réserve
            des présentes CGV.
          </p>
        </Section>

        <Section>
          <h2>Commandes et abonnements</h2>
          <p>Les abonnements « Bouquet du mois » peuvent être souscrits :</p>
          <ul>
            <li>
              soit en <strong>paiement mensuel automatique</strong> (via
              GoCardless ou tout autre prestataire de prélèvement),
            </li>
            <li>
              soit en <strong>paiement unique</strong> pour une durée déterminée
              (3, 6 ou 12 mois).
            </li>
          </ul>
          <p>
            L’abonnement est sans engagement et peut être résilié à tout moment
            avant le <strong>25 du mois en cours</strong> pour éviter le
            prélèvement du mois suivant. Toute commande validée entraîne
            l’adhésion pleine et entière du client aux présentes CGV.
          </p>
        </Section>

        <Section>
          <h2>Livraison</h2>
          <p>
            Les livraisons sont effectuées le{' '}
            <strong>2ᵉ vendredi de chaque mois</strong>, dans un rayon maximal
            de <strong>15 km autour d’Arras</strong>. Les 3 Sœurs s’efforcent de
            respecter ces délais mais ne pourront être tenues responsables d’un
            retard lié à un cas de force majeure. En cas d’absence du
            destinataire, une nouvelle livraison ou un retrait en boutique
            pourra être proposé.
          </p>
        </Section>

        <Section>
          <h2>Tarifs et facturation</h2>
          <p>
            Les tarifs affichés sur le site sont exprimés en euros TTC et
            comprennent la livraison dans le périmètre indiqué. Les 3 Sœurs se
            réservent le droit de modifier leurs prix à tout moment, sans effet
            sur les commandes déjà validées. Chaque abonnement donne lieu à une
            facture mensuelle ou à une facture unique selon le mode de paiement
            choisi.
          </p>
        </Section>

        <Section>
          <h2>Modalités de paiement</h2>
          <p>Les paiements peuvent être effectués :</p>
          <ul>
            <li>
              par <strong>prélèvement mensuel sécurisé via GoCardless</strong>,
            </li>
            <li>
              ou par <strong>virement bancaire</strong> pour les paiements en
              une fois (coordonnées transmises sur demande).
            </li>
          </ul>
          <p>
            Toute somme impayée entraînera la suspension temporaire des
            livraisons jusqu’à régularisation.
          </p>
        </Section>

        <Section>
          <h2>Rétractation et résiliation</h2>
          <p>
            Les bouquets étant des produits périssables, ils ne peuvent faire
            l’objet d’un droit de rétractation après leur préparation.
            L’abonnement peut toutefois être résilié à tout moment sans frais,
            avant la date limite précisée à l’article 2. Toute demande de
            résiliation doit être adressée par e-mail à{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section>
          <h2>Garanties et qualité</h2>
          <p>
            Les bouquets sont préparés avec des fleurs fraîches de saison,
            sélectionnées avec soin. Les 3 Sœurs garantissent la fraîcheur des
            fleurs durant 48 heures après livraison, sous réserve d’un entretien
            adapté (eau propre, température ambiante, absence de soleil direct).
            Aucune réclamation ne sera acceptée au-delà de ce délai.
          </p>
        </Section>

        <Section>
          <h2>Confidentialité et données personnelles</h2>
          <p>
            Les données personnelles collectées (nom, adresse, e-mail,
            téléphone) sont nécessaires à la gestion des commandes et
            abonnements. Elles ne sont ni cédées, ni revendues à des tiers.
            Conformément à la loi Informatique et Libertés et au RGPD, chaque
            client dispose d’un droit d’accès, de rectification et de
            suppression de ses données, à exercer par e-mail à{' '}
            <a href="mailto:les3soeurs.fleuristerie@gmail.com">
              les3soeurs.fleuristerie@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section>
          <h2>Force majeure</h2>
          <p>
            Les 3 Sœurs ne pourront être tenues responsables de l’inexécution de
            leurs obligations en cas de survenance d’un événement imprévisible
            et irrésistible (intempéries, panne, rupture d’approvisionnement,
            grève...).
          </p>
        </Section>

        <Section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Tous les textes, visuels, photographies et créations florales
            présentés sur le site{' '}
            <a href="https://www.les3soeursfleuristerie.com">
              www.les3soeursfleuristerie.com
            </a>{' '}
            sont la propriété exclusive de Les 3 Sœurs. Toute reproduction ou
            utilisation sans autorisation écrite est strictement interdite.
          </p>
        </Section>

        <Section>
          <h2>Droit applicable et litiges</h2>
          <p>
            Les présentes conditions sont soumises au droit français. Tout
            litige relatif à leur interprétation ou exécution sera de la
            compétence exclusive du Tribunal de commerce de Lille.
          </p>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
}

import styled from 'styled-components';
import {
  colors,
  fontSizes,
  frames,
  margins,
  TitleH3,
} from '../styledComponents';
import { Truck, Flower2, CalendarCheck2, CreditCard } from 'lucide-react';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${margins.desktop} ${frames.desktop};
  gap: 30px;
`;

const Text = styled.p`
  font-size: ${fontSizes.bigBody};
  font-weight: 200;
  color: ${colors.grey};
  text-align: center;
  width: 70%;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 260px;
  gap: 14px;
`;

const IconWrap = styled.div`
  background: ${colors.beige200};
  border-radius: 50%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.p`
  font-weight: 600;
  color: ${colors.black};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.grey};
`;

export default function Why() {
  return (
    <Container>
      <TitleH3>
        Des fleurs locales, livrées chaque mois avec soin, au rythme des saisons
      </TitleH3>
      <Text>
        Parce qu’un bouquet régulier, c’est un peu de beauté qui revient chaque
        mois. <br />
        L’abonnement Les 3 Sœurs s’adresse à celles et ceux qui veulent fleurir
        leur quotidien ou offrir une attention unique, avec des fleurs locales,
        fraîches et de saison. Chaque mois, recevez une création inspirée de la
        nature et du savoir-faire artisanal de l’atelier, pour prolonger la
        beauté des saisons et soutenir la fleur française.
      </Text>
      <Grid>
        <Item>
          <IconWrap>
            <Truck size={28} strokeWidth={1.5} />
          </IconWrap>
          <Label>Livraison à proximité</Label>
          <Description>
            Livraison possible dans un rayon de 15 km autour d’Arras.
          </Description>
        </Item>

        <Item>
          <IconWrap>
            <Flower2 size={28} strokeWidth={1.5} />
          </IconWrap>
          <Label>Fleurs françaises</Label>
          <Description>
            Des compositions réalisées avec des fleurs locales et de saison.
          </Description>
        </Item>

        <Item>
          <IconWrap>
            <CalendarCheck2 size={28} strokeWidth={1.5} />
          </IconWrap>
          <Label>Abonnement flexible</Label>
          <Description>
            3, 6, 12 mois ou sans durée
            <br /> Résiliable à tout moment.
          </Description>
        </Item>

        <Item>
          <IconWrap>
            <CreditCard size={28} strokeWidth={1.5} />
          </IconWrap>
          <Label>Paiement simple</Label>
          <Description>
            Par prélèvement mensuel sécurisé ou en une fois{' '}
            <a
              href="mailto:les3soeurs.fleuristerie@gmail.com"
              style={{ textDecoration: 'underline' }}
            >
              sur demande
            </a>
            .
          </Description>
        </Item>
      </Grid>
    </Container>
  );
}

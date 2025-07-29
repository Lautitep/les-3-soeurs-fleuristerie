import styled from "styled-components";
import { colors, frames } from "./styledComponents";
import SocialIcons from "./SocialIcons";

const FooterContainer = styled.footer`
  background-color: ${colors.pink};
  color: white;
  padding: 90px ${frames.desktop} 30px;
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
const ContactLink = styled.h2`
  font-size: 16px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <BlockContainer>
        <SubContainer>
          <Title>Contact</Title>
          <p>Basé à Achicourt (62217)</p>
          <a href='mailto:les3soeurs.fleuristerie@gmail.com'>les3soeurs.fleuristerie@gmail.com</a>
          <a href='tel:+33647930161' >+33 6 47 93 01 61</a>
          <SocialIcons />
        </SubContainer>
        <SubContainer>
          <Title>Évènements & Mariages</Title>
          <p>Ateliers</p>
          <p>Livraisons</p>
        </SubContainer>
        <SubContainer>
          <Title>À propos</Title>
          <p>Mentions Légales</p>
          <p>CGV</p>
          <p>CGU</p>
          <p>Politique de confidentialité</p>
          <p>Politique en matière de remboursements et de retours</p>
        </SubContainer>
      </BlockContainer>
      <p>© 2024, Les 3 Soeurs</p>
    </FooterContainer>
  );
}

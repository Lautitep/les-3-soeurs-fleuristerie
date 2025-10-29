import styled from 'styled-components';
import {
  colors,
  frames,
  margins,
  fontSizes,
  MailButton,
} from '../styledComponents';

const Container = styled.div`
  position: relative;
  padding: ${margins.desktop} ${frames.desktop};
  margin: 128px ${frames.desktop} ${margins.desktop};
  text-align: center;
  background-image: url('/background.contactBanner.jpg');
  background-size: cover;
  background-position: 50% 57%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
    z-index: 1;
  }
`;

const Text = styled.p`
  position: relative;
  z-index: 2;
  font-size: ${fontSizes.h3};
  font-weight: 400;
  color: ${colors.beige100};
`;

export default function ContactBanner() {
  return (
    <Container>
      <Text>
        Vous souhaitez organiser un atelier entre amis, en famille ou avec vos
        collaborateurs ?
      </Text>
      <MailButton white href="mailto:les3soeurs.fleuristerie@gmail.com">
        Parlons-en !
      </MailButton>
    </Container>
  );
}

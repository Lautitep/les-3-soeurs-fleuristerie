import styled from 'styled-components';
import { colors, fontSizes, frames, margins } from '../styledComponents';
import { media } from '@/app/media';

const CustomRequest = styled.section`
  background-color: ${colors.beige200};
  padding: 48px ${frames.desktop};
  margin-bottom: ${margins.desktop};
  text-align: center;

  ${media.tablet(`
    padding: ${margins.mobile} ${frames.tablet};
    margin-bottom: ${margins.mobile};
  `)}

  ${media.mobile(`
    padding: ${margins.mobile} ${frames.mobile};
    margin-bottom: 0;
  `)}
`;

const Text = styled.p`
  font-size: ${fontSizes.body};
  margin: 0 auto 8px;
  max-width: 620px;
  line-height: 1.5;
`;

const LinkMail = styled.a`
  color: ${colors.pink};
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.25s ease;

  &:hover {
    border-bottom-color: ${colors.pink};
  }
`;

export default function CustomBouquet() {
  return (
    <CustomRequest>
      <Text>
        Vous avez une envie particulière, un format différent ou un abonnement à
        offrir ?
        <br />
        Nous proposons des créations sur mesure, adaptées à vos envies et à
        votre rythme.
      </Text>
      <LinkMail href="mailto:les3soeurs.fleuristerie@gmail.com">
        Contactez-nous pour en parler 🌸
      </LinkMail>
    </CustomRequest>
  );
}

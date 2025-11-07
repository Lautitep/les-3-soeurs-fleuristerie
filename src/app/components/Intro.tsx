import styled from 'styled-components';
import { colors, frames, fontSizes, margins, Button } from './styledComponents';
import { media } from '../media';

const Container = styled.div`
  padding: 125px ${frames.desktop} ${margins.desktop};
  text-align: center;
  background-color: ${colors.beige100};
  width: 70%;
  margin: 0 auto;

  ${media.tablet(`
    width: 90%;
    padding: 100px ${frames.tablet} ${margins.mobile};
  `)}

  ${media.mobile(`
    width: 100%;
    padding: 84px ${frames.mobile} ${margins.mobile};
  `)}
`;
const Text = styled.p`
  font-size: ${fontSizes.bigBody};
  font-weight: 200;
  color: ${colors.grey};

  ${media.mobile(`
    font-size: ${fontSizes.body};
  `)}
`;

export default function Intro({
  text,
  onCtaClick,
  CTAText,
}: {
  text: string;
  onCtaClick: () => void;
  CTAText?: string;
}) {
  return (
    <Container>
      <Text>{text}</Text>
      {CTAText && <Button onClick={onCtaClick}>{CTAText}</Button>}
    </Container>
  );
}

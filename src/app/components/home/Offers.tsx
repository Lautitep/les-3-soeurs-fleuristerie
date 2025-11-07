import styled from 'styled-components';
import { frames, margins } from '../styledComponents';
import { media } from '@/app/media';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${margins.desktop} ${frames.desktop};
  gap: 20px;

  ${media.tablet(`
    padding: ${margins.mobile} ${frames.tablet};
    `)}

  ${media.mobile(`
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: ${margins.mobile} ${frames.mobile} 0;
  `)}
`;

const ImgContainer = styled.div`
  position: relative;
  width: 32%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .overlay-text::after {
    width: 100%;
  }

  ${media.mobile(`
    width: 100%;
    max-height: 200px;
  `)}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 5px;
  ${media.mobile(`
    max-height: 200px;
    object-fit: cover;
    object-position: 50% 22%;
  `)}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${media.mobile(`
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.25);
  `)}
`;

const OverlayText = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: white;
    transition: width 0.5s ease;
  }
`;

export default function Offers() {
  return (
    <Container>
      <ImgContainer>
        <Img src="/offers/offer.jpg" alt="offre évènements" />
        <Overlay className="overlay">
          <OverlayText href="/evenements" className="overlay-text">
            Évènements
          </OverlayText>
        </Overlay>
      </ImgContainer>
      <ImgContainer>
        <Img src="/offers/offer2.jpg" alt="offre ateliers" />
        <Overlay className="overlay">
          <OverlayText href="/ateliers" className="overlay-text">
            Ateliers
          </OverlayText>
        </Overlay>
      </ImgContainer>
      <ImgContainer>
        <Img src="/offers/offer3.jpg" alt="offre bouquet du mois" />
        <Overlay className="overlay">
          <OverlayText href="/abonnement" className="overlay-text">
            Bouquet du mois
          </OverlayText>
        </Overlay>
      </ImgContainer>
    </Container>
  );
}

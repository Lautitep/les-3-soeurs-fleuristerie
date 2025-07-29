import styled from 'styled-components';
import { frames } from "../styledComponents";


const Container = styled.div`
  text-align: center;
  background-image: url('/ethics.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* height: 500px; */
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${frames.desktop};
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 233, 218, 0.8);
  z-index: 1;
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  z-index: 2;
`;
const Text = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 200;
  z-index: 2;
`;

export default function Ethics() {
  return(
    <Container>
      <Overlay />
      <Title>ÉTHIQUE & ENGAGEMENT</Title>
      <Text>Les 3 Sœurs c’est une passion pour la nature et pour son respect.

C’est pourquoi, nous sommes convaincus que notre métier doit évoluer dans ce sens. Membre du Collectif de la fleur Française, nous priorisons l’utilisation de fleurs françaises.

Dans ce sens également, nous sommes sans cesse à la recherche de producteurs locaux dans la fleur coupée.</Text>
    </Container>
  )
}

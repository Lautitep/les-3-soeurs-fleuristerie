import styled from 'styled-components';
import { frames, margins, fontSizes } from '../styledComponents';

const Container = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 ${frames.desktop} ${margins.desktop};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const BlockContainer = styled.div<{ flexDirection: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? 'row' : 'row-reverse'};
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 40px;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 4px;
  width: 500px;
  height: 405px;
`;

const TextContainer = styled.div`
  max-width: 460px;
`;

const Title = styled.h2`
  font-size: ${fontSizes.h2};
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

const Text = styled.p`
  font-size: ${fontSizes.body};
  font-weight: 200;
`;

const articles = [
  {
    title: 'Ateliers enfants',
    text: 'Nos ateliers pour enfants sont l’occasion idéale de s’initier à l’univers des fleurs tout en s’amusant. Que ce soit pour un anniversaire, un moment de loisirs ou une activité découverte, chaque atelier éveille la curiosité, stimule la créativité et sensibilise à la nature. Accompagnés pas à pas, les enfants façonnent leur propre composition florale, découvrent les fleurs de saison, manipulent matières et couleurs, et repartent avec leur création ainsi que le plaisir d’avoir créé de leurs mains.',
    image: '/ateliers/enfants.jpg',
  },
  {
    title: 'EVJF, Baby shower, anniversaires',
    text: 'Une parenthèse joyeuse et créative pour célébrer vos plus beaux moments. Autour d’une ambiance conviviale et détendue, vous apprendrez à composer une création florale – couronne, bouquet ou centre de table – guidés pas à pas et avec des fleurs de saison. Entre rires, complicité et petites douceurs partagées, chaque participante repart avec sa réalisation et le souvenir d’un instant unique à vivre ensemble.',
    image: '/ateliers/evjf2.jpeg',
  },
  {
    title: 'Ateliers professionnels',
    text: 'Nos ateliers professionnels s’adressent aussi bien aux entreprises qu’aux institutions désireuses de proposer un moment créatif et porteur de sens. Adaptés à vos objectifs – cohésion d’équipe, cadeau à la clientèle, initiation aux techniques florales – ils allient transmission de savoir-faire, plaisir de créer et convivialité. De vrais instants de partage, qui font fleurir les idées et les relations.',
    image: '/ateliers/pro.jpg',
  },
];
export default function Services() {
  return (
    <Container>
      {articles.map((article, index) => (
        <BlockContainer key={article.title} flexDirection={index % 2 === 0}>
          <Img src={article.image} alt={article.title} />
          <TextContainer>
            <Title>{article.title}</Title>
            <Text>{article.text}</Text>
          </TextContainer>
        </BlockContainer>
      ))}
    </Container>
  );
}

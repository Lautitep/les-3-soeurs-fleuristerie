'use client';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import styled from 'styled-components';
import Intro from '../components/Intro';
import { useRef } from 'react';
import Services from '../components/ateliers/Services';
import ContactBanner from '../components/ateliers/ContactBanner';

const Container = styled.div`
  width: 100%;
`;

const introText =
  'Plus qu’un simple cours, nos ateliers sont des parenthèses créatives où l’on découvre l’art floral autrement. Guidés pas à pas, vous explorez les gestes, les couleurs et les textures, et repartez avec une composition unique qui porte votre empreinte.';

const Ateliers = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Container>
      <HeaderBanner
        image="/ateliers/ateliers.header.jpg"
        title="Nos ateliers"
        subtitle="Des instants de création, accessibles à tous et riches en émotions."
        color="greenEucalyptus"
      />
      <Intro text={introText} onCtaClick={scrollToContact} />
      <Services />
      <ContactBanner />
      <Footer />
    </Container>
  );
};

export default Ateliers;

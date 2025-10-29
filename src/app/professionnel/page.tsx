'use client';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import styled from 'styled-components';
import Intro from '../components/Intro';
import ContactBlock from '../components/ContactBlock';
import { useRef } from 'react';
import Clients from '../components/pro/Clients';
import Triptych from '../components/Triptych';

const Container = styled.div`
  width: 100%;
`;

const introText =
  'Chaque projet professionnel est une scène à imaginer. Nous concevons des créations florales sur mesure pour vos événements professionnels : inaugurations, lancements de produit, shootings, animations ou formations en entreprise. De la conception à l’installation, notre atelier vous accompagne à chaque étape pour créer des décors végétaux qui valorisent votre image et subliment vos espaces. Basés à Arras, nous intervenons dans l’ensemble des Hauts-de-France pour donner vie à des projets élégants, cohérents et responsables.';

const MSFTriptych = {
  left: '/pro/msf-left.jpg',
  center: '/pro/msf-video.mp4',
  right: '/pro/msf-right.jpg',
  caption: 'Main Square Festival x Le Clos Délice — Espace VIP',
};

const JosetteTriptych = {
  left: '/pro/josette-left.jpg',
  center: '/pro/josette-video.mp4',
  right: '/pro/josette-right.jpg',
  caption: 'Inauguration Café Fleur Josette',
};

const Professionnel = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <HeaderBanner
        image="/pro/pro.header2.jpg"
        title="Évènements professionnels"
        subtitle="Des expériences florales originales pour renforcer vos liens et votre image."
        color="orange"
        objectPosition="50% 61%"
      />
      <Intro
        text={introText}
        onCtaClick={scrollToContact}
        CTAText="Collaborons pour sublimer vos événements"
      />
      <Triptych elements={MSFTriptych} />
      <Clients />
      <Triptych elements={JosetteTriptych} marginBottom />
      <div ref={contactRef}>
        <ContactBlock image="/pro/contact.pro.jpg" proPage />
      </div>
      <Footer />
    </Container>
  );
};

export default Professionnel;

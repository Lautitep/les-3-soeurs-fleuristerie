'use client';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import styled from 'styled-components';
import { menuBarHeightPixels } from '../components/styledComponents';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import HeroCollage from '../components/Herocollage';
import Feedbacks from '../components/Feedbacks';
import Locations from '../components/events/Locations';
import ContactBlock from '../components/ContactBlock';
import { useRef } from 'react';

const Container = styled.div`
  width: 100%;
`;

const heroCollageImages = {
  back: { src: '/events/heroCollage.1.jpg', alt: 'Boutonnières sur bois' },
  mid: { src: '/events/heroCollage.2.jpg', alt: 'Centre de table rouge' },
  main: { src: '/events/heroCollage.3.jpg', alt: 'Mariés dans décor fleuri' },
};

const photos = [
  { src: 'events/portfolio/1.jpg', alt: 'Cérémonie', h: 600 },
  { src: 'events/portfolio/2.jpg', alt: 'Centre de table', h: 300 },
  { src: 'events/portfolio/3.jpg', alt: 'Bouquet', h: 600 },
  { src: 'events/portfolio/4.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/5.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/6.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/7.jpg', alt: 'Décoration de table', h: 600 },
  { src: 'events/portfolio/8.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/9.jpg', alt: 'Décoration de table', h: 600 },
  { src: 'events/portfolio/10.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/11.jpg', alt: 'Décoration de table', h: 600 },
  { src: 'events/portfolio/12.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/13.jpg', alt: 'Décoration de table', h: 600 },
  { src: 'events/portfolio/14.jpg', alt: 'Décoration de table', h: 300 },
  { src: 'events/portfolio/15.jpg', alt: 'Décoration de table', h: 300 },
];

const introText =
  'Mariage, anniversaire, réception… chaque événement est une rencontre, une atmosphère à inventer. Nous vous proposons des créations florales sur-mesure, élégantes et authentiques, pour transformer vos moments en souvenirs inoubliables. Basé à Arras, notre atelier se déplace dans l’ensemble des Hauts-de-France afin de vous offrir un accompagnement personnalisé, du simple bouquet aux décors complets, toujours pensés pour refléter votre histoire.';

const Events = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Container>
      <HeaderBanner
        image="/events/events.header.jpg"
        title="Mariages & évènements privés"
        subtitle="Des créations florales uniques pour sublimer vos moments précieux."
        color="yellow"
      />
      <Intro
        text={introText}
        onCtaClick={scrollToContact}
        CTAText="Parlons de votre projet"
      />
      <HeroCollage {...heroCollageImages} />
      <Feedbacks />
      <Portfolio photos={photos} />
      <Locations />
      <div ref={contactRef}>
        <ContactBlock image="/events/contact.mariage.jpg" />
      </div>
      <Footer />
    </Container>
  );
};

export default Events;

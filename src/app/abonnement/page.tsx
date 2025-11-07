'use client';
import Options from '../components/abonnement/Options';
import Why from '../components/abonnement/Why';
import Carousel from '../components/abonnement/Carousel';
import Footer from '../components/Footer';
import HeaderBanner2 from '../components/HeaderBanner2';
import styled from 'styled-components';
import CustomBouquet from '../components/abonnement/CustomBouquet';

const Container = styled.div`
  width: 100%;
`;

const Abonnement = () => {
  return (
    <Container>
      <HeaderBanner2 />
      <Why />
      <Options />
      <CustomBouquet />
      <Carousel />
      <Footer />
    </Container>
  );
};

export default Abonnement;

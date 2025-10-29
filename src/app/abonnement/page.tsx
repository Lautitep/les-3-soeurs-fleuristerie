'use client';
import Options from '../components/abonnement/Options';
import Why from '../components/abonnement/Why';
import Footer from '../components/Footer';
import HeaderBanner2 from '../components/HeaderBanner2';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Abonnement = () => {
  return (
    <Container>
      <HeaderBanner2 />
      <Why />
      <Options />
      <Footer />
    </Container>
  );
};

export default Abonnement;

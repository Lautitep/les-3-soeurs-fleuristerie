'use client'
import styled from 'styled-components';
import Header from './components/home/Header';
import InfoBanner from './components/home/InfoBanner';
import Footer from './components/Footer';
import About from './components/home/About';
import { colors } from './components/styledComponents';
import Ethics from './components/home/Ethics';
import Offers from './components/home/Offers';

const WhiteBanner = styled.div`
  background-color: ${colors.beige100};
  height: 300px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <InfoBanner />
      <Offers />
      {/* <Ethics /> */}
      <About />
      <WhiteBanner />
      <Footer />
    </>
  );
}

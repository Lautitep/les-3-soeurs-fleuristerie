'use client';
import Header from './components/home/Header';
import InfoBanner from './components/home/InfoBanner';
import Footer from './components/Footer';
import About from './components/home/About';
import Offers from './components/home/Offers';
import Josette from './components/home/Josette';
import HeroVideo from './components/home/HeroVideo';

export default function Home() {
  return (
    <>
      <Header />
      <InfoBanner />
      <Offers />
      <About />
      <HeroVideo />
      <Josette />
      <Footer />
    </>
  );
}

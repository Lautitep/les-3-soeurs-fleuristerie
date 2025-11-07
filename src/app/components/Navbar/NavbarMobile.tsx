'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { colors, menuBarHeightPixels } from '../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.nav<{
  isPink: boolean;
  scrolled: boolean;
  isOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${menuBarHeightPixels};
  background-color: ${(props) =>
    props.isOpen
      ? colors.beige100
      : props.scrolled
        ? colors.beige100
        : 'transparent'};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  z-index: 20;
  transition: background-color 0.3s ease;
  ${(props) =>
    props.isPink &&
    `color: ${colors.beige100}; background-color: ${colors.pink};`}
`;

const Logo = styled(Image)`
  height: auto;
  width: 100px;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

const Burger = styled.div<{
  isOpen: boolean;
  scrolled: boolean;
  isPink: boolean;
}>`
  width: 28px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 30;

  span {
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${(props) =>
      (props.isOpen || props.scrolled) && !props.isPink ? '#000' : '#fff'};
    left: 0;
    transition: 0.3s ease;
  }

  span:nth-child(1) {
    top: ${(p) => (p.isOpen ? '9px' : '0')};
    transform: ${(p) => (p.isOpen ? 'rotate(45deg)' : 'none')};
  }
  span:nth-child(2) {
    top: 9px;
    opacity: ${(p) => (p.isOpen ? 0 : 1)};
  }
  span:nth-child(3) {
    top: ${(p) => (p.isOpen ? '9px' : '18px')};
    transform: ${(p) => (p.isOpen ? 'rotate(-45deg)' : 'none')};
  }
`;

const MenuOverlay = styled.div<{ isOpen: boolean; isPink?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: ${menuBarHeightPixels};
  background-color: ${colors.beige100};
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  transform: translateY(${(p) => (p.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 10;
  ${(props) =>
    props.isPink && `color: ${colors.white}; background-color: ${colors.pink};`}
`;

const MenuLink = styled(Link)<{ isPink?: boolean }>`
  font-size: 20px;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  ${(props) => props.isPink && `color: ${colors.white};`}
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export default function NavbarMobile({ isPink }: { isPink: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // désactive le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // change la couleur de fond après scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Container isPink={isPink} scrolled={scrolled} isOpen={isOpen}>
        <Burger
          isOpen={isOpen}
          scrolled={scrolled}
          isPink={isPink}
          onClick={() => setIsOpen((p) => !p)}
        >
          <span />
          <span />
          <span />
        </Burger>
      </Container>

      <MenuOverlay isOpen={isOpen} isPink={isPink}>
        <Logo
          src={isPink ? '/logos/logo_white.png' : '/logos/logo_black.png'}
          alt="logo les 3 soeurs"
          width={100}
          height={0}
        />
        <MenuLink href="/" onClick={() => setIsOpen(false)} isPink={isPink}>
          Accueil
        </MenuLink>
        <MenuLink
          href="/evenements"
          onClick={() => setIsOpen(false)}
          isPink={isPink}
        >
          Évènements
        </MenuLink>
        <MenuLink
          href="/abonnement"
          onClick={() => setIsOpen(false)}
          isPink={isPink}
        >
          Bouquet du mois
        </MenuLink>
        <MenuLink
          href="/ateliers"
          onClick={() => setIsOpen(false)}
          isPink={isPink}
        >
          Ateliers
        </MenuLink>
        <MenuLink
          href="/professionnel"
          onClick={() => setIsOpen(false)}
          isPink={isPink}
        >
          Professionnel
        </MenuLink>
        <SocialIcons>
          <a
            href="https://www.facebook.com/les3soeursfleuristerie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color={isPink ? 'white' : 'black'}
            />
          </a>
          <a
            href="https://www.instagram.com/les3soeurs_fleuristerie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color={isPink ? 'white' : 'black'}
            />
          </a>
        </SocialIcons>
      </MenuOverlay>
    </>
  );
}

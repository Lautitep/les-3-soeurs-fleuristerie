'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { menuBarHeightPixels, colors } from '../components/styledComponents';
import Image from 'next/image';

const Nav = styled.nav<{ scrolled: boolean }>`
  padding: 1rem;
  background-color: ${(props) => (props.scrolled ? `${colors.beige100}` : 'transparent')};
  color: ${(props) => (props.scrolled ? '#000' : `${colors.beige100}`)};
  position: fixed;
  width: 100%;
  height: ${menuBarHeightPixels};
  top: 0;
  left: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 10;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.li``;

const StyledLink = styled.p<{ scrolled: boolean }>`
  color: ${(props) => (props.scrolled ? '#000' : '#fff')};
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${(props) => (props.scrolled ? '#000' : '#fff')};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavList>
        <NavItem>
          <Link href="/" passHref>
            <StyledLink scrolled={scrolled}>Évènements</StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <StyledLink scrolled={scrolled}>Abonnement</StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <Image src={scrolled ? "/logos/les3soeurs_black.png" : "/logos/les3soeurs_white.png"} alt="logo" width={120} height={0} style={{ height: 'auto' }} />
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact" passHref>
            <StyledLink scrolled={scrolled}>Bouquet du mois</StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact" passHref>
            <StyledLink scrolled={scrolled}>Professionnel</StyledLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

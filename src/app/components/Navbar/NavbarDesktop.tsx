'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { menuBarHeightPixels, colors } from '../styledComponents';
import Image from 'next/image';

const Nav = styled.nav<{ scrolled: boolean; isPink: boolean }>`
  padding: 1rem;

  background-color: ${(props) =>
    props.scrolled ? `${colors.beige100}` : 'transparent'};
  color: ${(props) => (props.scrolled && !props.isPink ? '#000' : `#fff`)};
  ${(props) =>
    props.isPink &&
    `color: ${colors.beige100}; background-color: ${colors.pink};`}
  position: fixed;
  width: 100%;
  height: ${menuBarHeightPixels};
  top: 0;
  left: 0;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  z-index: 10;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.li``;

const StyledLink = styled.p<{ scrolled: boolean; isPink: boolean }>`
  color: ${(props) => (props.scrolled && !props.isPink ? '#000' : '#fff')};
  position: relative;
  text-decoration: none;
  font-size: 20px;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${(props) =>
      props.scrolled && !props.isPink ? '#000' : '#fff'};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function Navbar({ isPink }: { isPink: boolean }) {
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
    <Nav scrolled={scrolled} isPink={isPink}>
      <NavList>
        <NavItem>
          <Link href="/evenements" passHref>
            <StyledLink scrolled={scrolled} isPink={isPink}>
              Évènements
            </StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/abonnement" passHref>
            <StyledLink scrolled={scrolled} isPink={isPink}>
              Bouquet du mois
            </StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <Image
              src={
                scrolled && !isPink
                  ? '/logos/les3soeurs_black.png'
                  : '/logos/les3soeurs_white.png'
              }
              alt="logo"
              width={150}
              height={0}
              style={{ height: 'auto', marginTop: '7px' }}
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/ateliers" passHref>
            <StyledLink scrolled={scrolled} isPink={isPink}>
              Ateliers
            </StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/professionnel" passHref>
            <StyledLink scrolled={scrolled} isPink={isPink}>
              Professionnel
            </StyledLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

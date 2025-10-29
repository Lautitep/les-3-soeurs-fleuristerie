'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { menuBarHeightPixels, colors } from '../components/styledComponents';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Nav = styled.nav<{ scrolled: boolean; isAbonnementPage: boolean }>`
  padding: 1rem;

  background-color: ${(props) =>
    props.scrolled ? `${colors.beige100}` : 'transparent'};
  color: ${(props) =>
    props.scrolled && !props.isAbonnementPage ? '#000' : `#fff`};
  ${(props) =>
    props.isAbonnementPage &&
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

const StyledLink = styled.p<{ scrolled: boolean; isAbonnementPage: boolean }>`
  color: ${(props) =>
    props.scrolled && !props.isAbonnementPage ? '#000' : '#fff'};
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
      props.scrolled && !props.isAbonnementPage ? '#000' : '#fff'};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isAbonnementPage = pathname === '/abonnement';

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
    <Nav scrolled={scrolled} isAbonnementPage={isAbonnementPage}>
      <NavList>
        <NavItem>
          <Link href="/evenements" passHref>
            <StyledLink scrolled={scrolled} isAbonnementPage={isAbonnementPage}>
              Évènements
            </StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/abonnement" passHref>
            <StyledLink scrolled={scrolled} isAbonnementPage={isAbonnementPage}>
              Bouquet du mois
            </StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <Image
              src={
                scrolled && !isAbonnementPage
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
            <StyledLink scrolled={scrolled} isAbonnementPage={isAbonnementPage}>
              Ateliers
            </StyledLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/professionnel" passHref>
            <StyledLink scrolled={scrolled} isAbonnementPage={isAbonnementPage}>
              Professionnel
            </StyledLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}

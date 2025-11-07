'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  const isPink =
    pathname === '/abonnement' ||
    pathname === '/mentionslegales' ||
    pathname === '/cgv' ||
    pathname === '/politique-de-confidentialite';

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <NavbarMobile isPink={isPink} />
  ) : (
    <NavbarDesktop isPink={isPink} />
  );
}

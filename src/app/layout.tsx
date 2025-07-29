import './globals.css';
import Navbar from './components/Navbar';
import { ReactNode } from 'react';
import { StyledComponentsRegistry } from './ServerStyleSheet';

export const metadata = {
  title: 'Les 3 Soeurs - Fleuristerie à Arras',
  description: 'Fleuristerie à Arras',
  icons: {
    icon: '/logos/logo_fleur.png',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Nanum+Gothic:wght@400;700;800&family=Lobster&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

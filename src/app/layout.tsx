import './globals.css';
import Navbar from './components/Navbar';
import { ReactNode } from 'react';
import { StyledComponentsRegistry } from './ServerStyleSheet';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title:
    'Les 3 Sœurs Fleuristerie à Arras | Créations florales, mariages & événements',
  description:
    "Les 3 Sœurs, artisanes fleuristes à Arras : bouquets sur mesure, compositions florales, mariages, deuils et livraisons locales. Atelier artisanal au cœur d'Arras.",
  icons: {
    icon: '/logos/logo_fleur_pink.png',
  },
  openGraph: {
    title: 'Les 3 Sœurs Fleuristerie à Arras',
    description:
      'Bouquets, mariages et compositions florales à Arras. Découvrez notre atelier artisanal Les 3 Sœurs.',
    url: 'https://www.les3soeursfleuristerie.com',
    siteName: 'Les 3 Sœurs Fleuristerie',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logos/logo_fleur_pink.png',
        width: 800,
        height: 600,
        alt: 'Logo Les 3 Sœurs Fleuristerie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les 3 Sœurs Fleuristerie à Arras',
    description:
      'Artisanes fleuristes à Arras – Bouquets, compositions, mariages et deuils.',
    images: ['/logos/logo_fleur_pink.png'],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#fefcf9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Nanum+Gothic:wght@400;700;800&family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/logos/logo_fleur_pink.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.les3soeursfleuristerie.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Florist',
              name: 'Les 3 Sœurs Fleuristerie',
              image:
                'https://www.les3soeursfleuristerie.com/logos/logo_fleur_pink.png',
              url: 'https://www.les3soeursfleuristerie.com',
              telephone: '+33 6 47930161',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '15 rue désiré Delansorne',
                addressLocality: 'Arras',
                postalCode: '62000',
                addressCountry: 'FR',
              },
              openingHours: 'Mo-Sa 09:00-19:00',
              priceRange: '€€',
              sameAs: [
                'https://www.facebook.com/les3soeursfleuristerie',
                'https://www.instagram.com/les3soeurs_fleuristerie/',
              ],
            }),
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
          <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

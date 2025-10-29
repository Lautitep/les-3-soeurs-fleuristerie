import styled from 'styled-components';

export const menuBarHeightPixels = '60px';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  beige100: '#FEFCF9',
  beige200: '#F5F1EB',
  pink: '#CA7F76',
  grey: '#404040',
  lightGrey: '#555555',
  yellow: '#F2B601',
  lightRed: '#d9534f',
  red: '#C70200',
  orange: '#DB4430',
  corail: '#e57c6e',
  greenSage: '#A3B18A',
  greenEucalyptus: '#7D9D76',
  greenOlive: '#9CA777',
};

// sur les côtés
export const frames = {
  desktop: '136px',
  mobile: '24px',
};

// entre les blocs
export const margins = {
  desktop: '64px',
  mobile: '40px',
};

export const fonts = {
  playfair: 'Playfair Display, sans-serif',
  nanum: 'Nanum Gothic, sans-serif',
  lobster: 'Lobster, sans-serif',
};

export const fontSizes = {
  h1: '40px', // titres page
  h2: '32px', // sous-titres / sections
  h3: '24px', // sous-sections
  bigBody: '18px', // intro
  body: '16px', // texte
  small: '14px', // légendes, détails
};

// export const fontSizes = {
//   h1: { mobile: '28px', desktop: '40px' },
//   h2: { mobile: '24px', desktop: '32px' },
//   h3: { mobile: '20px', desktop: '24px' },
//   body: { mobile: '16px', desktop: '18px' },
//   small: { mobile: '12px', desktop: '14px' },
// };

export const Button = styled.button<{ white?: boolean }>`
  margin-top: 32px;
  padding: 12px 24px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid;
  border-color: ${({ white }) => (white ? colors.beige100 : colors.black)};
  color: ${({ white }) => (white ? colors.beige100 : colors.black)};
  transition: all 0.3s ease;
  max-width: 240px;

  &:hover {
    background-color: ${({ white }) =>
      white ? colors.beige100 : colors.black};
    color: ${({ white }) => (white ? colors.black : colors.beige100)};
  }
`;

export const MailButton = styled.a<{ white?: boolean }>`
  margin-top: 32px;
  padding: 12px 24px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${({ white }) => (white ? colors.beige100 : colors.black)};
  color: ${({ white }) => (white ? colors.beige100 : colors.black)};
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  z-index: 2;

  &:hover {
    background-color: ${({ white }) =>
      white ? colors.beige100 : colors.black};
    color: ${({ white }) => (white ? colors.black : colors.beige100)};
  }
`;

export const TitleH3 = styled.h3`
  text-transform: uppercase;
  font-size: ${fontSizes.h3};
  font-weight: 400;
`;

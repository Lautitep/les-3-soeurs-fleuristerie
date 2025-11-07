export const breakpoints = {
  mobile: 767,
  tablet: 1024,
};

// Helper function to generate media queries
export const media = {
  mobile: (styles) => `
    @media (max-width: ${breakpoints.mobile}px) {
      ${styles}
    }
  `,
  tablet: (styles) => `
    @media (max-width: ${breakpoints.tablet}px) {
      ${styles}
    }
  `,
  desktop: (styles) => `
    @media (min-width: ${breakpoints.tablet + 1}px) {
      ${styles}
    }
  `,
};

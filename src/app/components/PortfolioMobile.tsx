'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { frames, margins, colors } from './styledComponents';

type Photo = {
  src: string;
  alt?: string;
};

type PortfolioMobileProps = {
  photos: Photo[];
};

const Container = styled.section`
  margin: 0 ${frames.mobile} ${margins.mobile};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Card = styled.figure`
  margin: 0;
  overflow: hidden;
  background: ${colors.beige100};
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 300ms ease,
    transform 400ms cubic-bezier(0.22, 0.61, 0.36, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export default function PortfolioMobile({ photos }: PortfolioMobileProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cards = Array.from(ref.current.querySelectorAll('.reveal-card'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Container ref={ref}>
      {photos.map(({ src, alt }, i) => (
        <Card key={src + i} className="reveal-card">
          <Img src={src} alt={alt ?? `Photo ${i + 1}`} />
        </Card>
      ))}
    </Container>
  );
}

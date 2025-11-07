'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { margins, colors, frames } from './styledComponents';
import { media } from '../media';

type Photo = {
  src: string;
  alt?: string;
  h: number; // hauteur en px des images
};

type PortfolioProps = {
  photos: Photo[];
};

const GAP = 8;

const Container = styled.section`
  margin: 0 ${frames.desktop} ${margins.desktop};
  ${media.tablet(`
    margin: 0 ${frames.tablet} ${margins.mobile};
  `)}
`;

const Masonry = styled.div`
  column-count: 3;
  column-gap: ${GAP}px;
`;

const Card = styled.figure`
  break-inside: avoid;
  margin: 0 0 ${GAP}px;
  overflow: hidden;
  background: ${colors.beige100};
  opacity: 0;
  transform: translateY(16px) scale(0.98);
  transition:
    opacity 240ms ease,
    transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1);

  &.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const Img = styled.img<{ h: number }>`
  width: 100%;
  height: ${(p: { h: number }) => p.h}px;
  display: block;
  object-fit: cover;
`;

export default function Portfolio({ photos }: PortfolioProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(
      containerRef.current.querySelectorAll('.reveal-card')
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = cards.indexOf(entry.target as Element);
          (entry.target as HTMLElement).style.transitionDelay =
            `${(idx % 8) * 40}ms`;
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
    <Container ref={containerRef}>
      <Masonry>
        {photos.map(({ src, alt, h }, i) => (
          <Card key={src + i} className="reveal-card">
            <ImgWrap>
              <Img src={src} alt={alt ?? `Photo ${i + 1}`} h={h} />
            </ImgWrap>
          </Card>
        ))}
      </Masonry>
    </Container>
  );
}

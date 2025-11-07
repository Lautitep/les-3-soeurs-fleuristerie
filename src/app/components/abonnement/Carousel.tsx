'use client';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect } from 'react';
import { margins } from '../styledComponents';
import { media } from '@/app/media';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 600px;
  height: 600px;
  margin: 0 auto ${margins.desktop};

  ${media.tablet(`
    margin: 0 auto ${margins.mobile};
  `)}

  ${media.mobile(`
    width: 100%;
    height: 400px;
  `)}
`;

const CarouselViewport = styled.div`
  display: flex;
  height: 100%;
`;

const Slide = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${media.mobile(`
    width: 100%;
  `)}
`;

const images = [
  { src: '/abo/portfolio/bouquet1.jpg', alt: 'Bouquet 1' },
  { src: '/abo/portfolio/bouquet2.jpg', alt: 'Bouquet 2' },
  { src: '/abo/portfolio/bouquet3.jpg', alt: 'Bouquet 3' },
  { src: '/abo/portfolio/bouquet4.jpg', alt: 'Bouquet 4' },
  { src: '/abo/portfolio/bouquet5.jpg', alt: 'Bouquet 5' },
  { src: '/abo/portfolio/bouquet6.jpg', alt: 'Bouquet 6' },
  { src: '/abo/portfolio/bouquet7.jpg', alt: 'Bouquet 7' },
  { src: '/abo/portfolio/bouquet8.jpg', alt: 'Bouquet 8' },
  { src: '/abo/portfolio/bouquet9.jpg', alt: 'Bouquet 9' },
  { src: '/abo/portfolio/bouquet10.jpg', alt: 'Bouquet 10' },
  { src: '/abo/portfolio/bouquet11.jpg', alt: 'Bouquet 11' },
  { src: '/abo/portfolio/bouquet12.jpg', alt: 'Bouquet 12' },
  { src: '/abo/portfolio/bouquet13.jpg', alt: 'Bouquet 13' },
  { src: '/abo/portfolio/bouquet14.jpg', alt: 'Bouquet 14' },
  { src: '/abo/portfolio/bouquet15.jpg', alt: 'Bouquet 15' },
  { src: '/abo/portfolio/bouquet16.jpg', alt: 'Bouquet 16' },
  { src: '/abo/portfolio/bouquet17.jpg', alt: 'Bouquet 17' },
  { src: '/abo/portfolio/bouquet18.jpg', alt: 'Bouquet 18' },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Autoplay simple
      const interval = setInterval(() => emblaApi.scrollNext(), 3000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <CarouselContainer ref={emblaRef}>
      <CarouselViewport>
        {images.map((image, index) => (
          <Slide key={index}>
            <StyledImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={600}
            />
          </Slide>
        ))}
      </CarouselViewport>
    </CarouselContainer>
  );
}

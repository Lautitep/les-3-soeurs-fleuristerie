'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors, margins } from '../styledComponents';

const HeroVideoWrap = styled.section`
  position: relative;
  overflow: hidden;
  aspect-ratio: 22 / 9;
  background: ${colors.beige100};
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.playbackRate = 0.9;

    // Lazy play: ne lance la vidéo que quand visible
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!el) return;
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* ignore */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <HeroVideoWrap>
      <Video
        ref={ref}
        muted
        playsInline
        loop
        preload="metadata"
        poster="/video/hero-poster-2.jpg"
      >
        {/* Version mobile (plus légère) en premier, puis desktop */}
        <source
          src="/video/hero-video-2.webm"
          type="video/webm"
          media="(max-width: 768px)"
        />
        <source
          src="/video/hero-video-2.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source src="/video/hero-video-2.webm" type="video/webm" />
        <source src="/video/hero-video-2.mp4" type="video/mp4" />
        {/* Fallback simple */}
      </Video>
    </HeroVideoWrap>
  );
}

// 'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const SlidingImageCursorTrail = ({ children }) => {
    const rootRef = useRef(null);
    const [images, setImages] = useState([]);
    const [mediaItems, setMediaItems] = useState([]);
    const [indexImg, setIndexImg] = useState(0);
    const [resetDist, setResetDist] = useState(0);

    const incr = useRef(0);
    const oldIncrX = useRef(0);
    const oldIncrY = useRef(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        setResetDist(window.innerWidth / 8);

        const root = rootRef.current;
        const imgs = Array.from(root.querySelectorAll('.medias img')).map(img =>
            img.getAttribute('src')
        );
        setImages(imgs);

        const handleFirstMove = (e) => {
            oldIncrX.current = e.clientX;
            oldIncrY.current = e.clientY;
        };

        const handleMouseMove = (e) => {
            const valX = e.clientX;
            const valY = e.clientY;

            incr.current += Math.abs(valX - oldIncrX.current) + Math.abs(valY - oldIncrY.current);

            if (incr.current > resetDist) {
                incr.current = 0;

                const deltaX = valX - oldIncrX.current;
                const deltaY = valY - oldIncrY.current;

                createMedia(valX, valY - root.getBoundingClientRect().top, deltaX, deltaY);
            }

            oldIncrX.current = valX;
            oldIncrY.current = valY;
        };

        root.addEventListener('mousemove', handleFirstMove, { once: true });
        root.addEventListener('mousemove', handleMouseMove);

        return () => {
            root.removeEventListener('mousemove', handleMouseMove);
        };
    }, [resetDist]);

    const createMedia = (x, y, deltaX, deltaY) => {
        const id = Date.now();
        const imgSrc = images[indexImg];
        const randomRotation = (Math.random() - 0.5) * 20;
        const xOffset = deltaX * 4;
        const yOffset = deltaY * 4;

        setMediaItems(items => [
            ...items,
            {
                id,
                src: imgSrc,
                x,
                y,
                xOffset,
                yOffset,
                rotation: randomRotation,
            },
        ]);

        setTimeout(() => {
            setMediaItems(items => items.filter(item => item.id !== id));
        }, 2000);

        setIndexImg((prev) => (prev + 1) % images.length);
    };

    return (
        <Section ref={rootRef}>
            <HiddenMedias>
                {children}
            </HiddenMedias>

            <Container>
                <Title>Move mouse</Title>
            </Container>

            <AnimatePresence>
                {mediaItems.map(({ id, src, x, y, xOffset, yOffset, rotation }) => (
                    <motion.img
                        key={id}
                        src={src}
                        style={{ width: '25vh', height: '25vh' }}
                        initial={{
                            x,
                            y,
                            xPercent: -50 + (Math.random() - 0.5) * 80,
                            yPercent: -50 + (Math.random() - 0.5) * 10,
                            scaleX: 0,
                            scaleY: 0,
                            opacity: 0,
                            rotate: rotation,
                            position: 'absolute',
                            pointerEvents: 'none',
                        }}
                        animate={{
                            x: x + xOffset,
                            y: y + yOffset,
                            scaleX: 1,
                            scaleY: 1,
                            opacity: 1,
                            transition: {
                                scaleX: { duration: 0.6, bounce: 1 },
                                scaleY: { duration: 0.6, bounce: 1 },
                                x: { duration: 1, bounce: 2 },
                                y: { duration: 1, bounce: 2 },
                            },
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                bounce: 2,
                            },
                        }}
                    />
                ))}
            </AnimatePresence>
        </Section>
    );
};

const Section = styled.section`
  height: 150vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
  background: #121212;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  gap: 3vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;

  p {
    text-transform: uppercase;
    letter-spacing: -0.01em;
    font-size: 16px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font: 400 italic 9vw / 0.76 'Instrument Serif', serif;
  letter-spacing: -0.05em;
  width: 56%;
`;

const Text = styled.p`
  font: 500 normal clamp(12px, 0.9vw, 100px) / normal 'IBM Plex Mono';
  text-transform: uppercase;
  max-width: 34vw;
  text-align: center;
`;

const HiddenMedias = styled.div`
  display: none;

  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
`;

const CursorImage = styled.img`
  width: 15vw;
  height: 15vw;
  position: absolute;
  object-fit: cover;
  z-index: 5;
`;


export default SlidingImageCursorTrail;

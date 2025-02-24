'use client'
import './ParallaxText.css';
import { useScroll, useTransform, motion } from 'motion/react';
// import Image from 'next/image';
import { useRef } from 'react';

export default function ParallaxText() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['-20vh end', 'end start']
    });

    return (
        <main ref={container} className="page-container">
            <div className="spacer" />
            <div>
                <Slide src="/ui.png" direction="left" left="-50%" progress={scrollYProgress} />
                <Slide src="/ui.png" direction="right" left="-15%" progress={scrollYProgress} />
                <Slide src="/ui.png" direction="left" left="-25%" progress={scrollYProgress} />
            </div>
            <div className="spacer" />
        </main>
    );
}

const Slide = ({ src, direction, left, progress }) => {
    const moveDirection = direction === 'left' ? -1 : 1;
    const translateX = useTransform(progress, [0, 1], [350 * moveDirection, -350 * moveDirection]);

    return (
        <motion.div style={{ x: translateX, left }} className="slide">
            <Phrase src={src} text="Digital" />
            <Phrase src={src} text="Experience" />
            <Phrase src={src} text="Digital" />
            <Phrase src={src} text="Experience" />
            <Phrase src={src} text="Digital" />
            <Phrase src={src} text="Experience" />
            <Phrase src={src} text="Digital" />
            <Phrase src={src} text="Experience" />
        </motion.div>
    );
};

const Phrase = ({ src, text }) => {
    return (
        <div className="phrase">
            <p className="phrase-text">{text}</p>
            <motion.div
                initial={{ rotate: 50, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1, transition: { duration: .4, bounce: .4 } }}
                exit={{ rotate: -30, opacity: 0, transition: { duration: .4, bounce: .4 } }}
                viewport={{ once: false, rootMargin: "-50px" }}
                className="phrase-image">
                <img style={{ objectFit: "cover" }} src={src} alt="image" />
            </motion.div>
        </div>
    );
};

import './Nav.css';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from "react"
import Link from 'next/link';
import Magnetic from "../Magnetic"

export default function Nav() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <nav ref={container} className='navi' style={{ opacity }}>
            {/* <Slide progress={scrollYProgress} /> */}
            <Magnetic>
                <Link href="/">Works</Link>
            </Magnetic>

            <Magnetic>
                <Link href="/about">Services</Link>
            </Magnetic>

            <Magnetic>
                <Link href="/">Contact</Link>
            </Magnetic>

        </nav >
    );
}
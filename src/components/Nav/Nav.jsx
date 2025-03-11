// import './Nav.css';
import styles from './Nav.module.css';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from "react"
import Link from 'next/link';
import Logo from "../Logo";
import Magnetic from "../Magnetic"

export default function Nav() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

    return (
        <nav ref={container} className={styles.navi} style={{ opacity }}>
            {/* <Slide progress={scrollYProgress} /> */}
            <Link className="link" href="/">Work</Link>

            {/* <Magnetic> */}
            <Link className="logo" href="/" scroll={false} >
                <Logo color="#ccc" />
            </Link>
            {/* </Magnetic> */}

            {/* <Magnetic> */}
            <Link className="link" href="/services">Service</Link>
            {/* </Magnetic> */}
        </nav >
    );
}
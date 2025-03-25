// import './Nav.css';
import styles from './Nav.module.css';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from "react"
import Link from 'next/link';
import Logo2 from "../Logo2";

export default function Nav() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const v = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { delay: .8, duration: 1 } }
    }

    return (
        <motion.nav variants={v} initial="hidden" animate="show" ref={container} className={styles.navi}>
            <Link className="logo" href="/">
                <Logo2 color="#333" />
            </Link>

            <Link className="link" href="/services">Work</Link>

            <Link className="link" href="/about">Blog</Link>
        </motion.nav>
    );
}
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Logo2 from "../Logo2";

export default function Nav() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current + 2) {
                setHidden(true); // Hide when scrolling down 50px
            } else if (currentScrollY < lastScrollY.current - 2) {
                setHidden(false); // Show when scrolling up 50px
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Variants for animation on mount and when toggling visibility
    const v = {
        hide: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.nav
            animate={{
                y: hidden ? "-100%" : 0,
                opacity: hidden ? 0 : 1,
                scale: hidden ? 0.9 : 1
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div variants={v}
                className={styles.navi}
                initial="hide"
                animate="visible"
            >
                <Link className={styles.logo} href="/">
                    <Logo2 color="#666" />
                </Link>
                <Link className={styles.link} href="services">Work</Link>
                <Link className={styles.link} href="about">Blog</Link>
            </motion.div>
        </motion.nav>
    );
}

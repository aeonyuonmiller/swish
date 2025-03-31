// import './Footer.module.css';
import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';

const Footer = () => {

    // Scroll Anim
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        // 'element container' 
        // offset: ['start 90%', 'end 100%']
        offset: ['start end', 'end end']
    })
    const parallax = useTransform(scrollYProgress, [0, 1], ["60%", "0%"])
    const o = useTransform(scrollYProgress, [0.3, 1], [0, 1])
    const xRotation = useTransform(scrollYProgress, [0.6, 1], ["90deg", "0deg"])
    const size = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return (
        <motion.footer ref={container}>
            <motion.a
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.4, transition: { type: "spring" } }}
                className="email-link"
                href="mailto:aym1@mail.com">
                Write me
            </motion.a>

            <motion.h5 style={{
                y: parallax,
                opacity: o,
                scale: size,
                rotateY: 0,
                rotateX: xRotation,
                transformStyle: "preserve-3d",
                perspective: 9999,
                transformOrigin: "50% 50%",
                margin: "0 auto"
            }}
            >
                Project<br />in mind?
            </motion.h5>

            <span className="copyright">&copy; 2025</span>

        </motion.footer>
    );
};

export default Footer;

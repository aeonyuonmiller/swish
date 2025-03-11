// import './Footer.module.css';
import { useRef } from "react";
import { useScroll, useTransform, motion } from 'motion/react';

const Footer = () => {

    // Scroll Anim
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        // 'element container' 
        offset: ['start 90%', 'end 100%']
    })
    const parallax = useTransform(scrollYProgress, [0, 1], ["60%", "0%"])
    const size = useTransform(scrollYProgress, [0, 1], [0.9, 1])

    return (
        <motion.footer ref={container}>
            <div>
                <motion.h5 style={{ y: parallax, scale: size, transformOrigin: "50% 50%", left: 0 }}
                >Get in touch</motion.h5>
            </div>
        </motion.footer>
    );
};

export default Footer;

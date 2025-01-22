import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
// import './Footer.module.css';

const Footer = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // 'element container' 
        // offset: ['start start', 'end end']
        offset: ['start 50vh', 'end -70vh']
    });

    const x = useTransform(scrollYProgress, [0, .25, .75, .95], ["2%", "-2%", "-80%", "-90%"]);

    return (
        <footer ref={targetRef}>
            <div className="carousel-container">
                <motion.div style={{ x }}>
                    Footer
                </motion.div>
            </div>
        </footer>
    );
};


export default Footer;

'use client'

import { motion, useTransform, useScroll, AnimatePresence } from "motion/react";
import { useRef } from "react";
// import './HorizonSlider.css';

const HorizonSlider = () => {
    const targetRef = useRef(null);
    const numCards = cards.length;
    const scrollFactor = numCards * 6; // Scrolls dynamically based on number of cards

    const { scrollYProgress } = useScroll({
        target: targetRef,
        // 'start when child of parent is at $startTop of container'
        // offset: ['start start', 'end end']
        // offset: ['start 10vh', 'end -50vh']
        offset: ['start 5%', '95% start']
    });

    // const x = useTransform(scrollYProgress, [0, .6], ["0%", "-110%"]);
    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
    const x = useTransform(scrollYProgress, [0, 1], ["0", `-${scrollFactor}%`]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
    const bgColor = useTransform(scrollYProgress, [0, 0.25, 0.5], ["#252525", "#000", "#252525"]);

    return (
        <AnimatePresence>
            <motion.section ref={targetRef} style={{ backgroundColor: bgColor }} className="carousel-section">
                <div className="carousel-container">
                    <motion.div style={{ x, y }}
                        className="carousel">
                        {cards.map((card) => (
                            <Card card={card} key={card.id} />
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </AnimatePresence>
    );
};

const Card = ({ card }) => {
    return (
        <motion.div
            initial={{ scale: 0.99, x: 200 }}
            whileInView={{ scale: 1, x: 0, transition: { duration: .4, bounce: .4 } }}
            exit={{ scale: 0.99, opacity: 0, transition: { duration: .4, bounce: .4 } }}
            // viewport={{ once: true, amount: 0.02, rootMargin: "-50px" }}
            viewport={{ once: false, rootMargin: "-50px" }}
            key={card.id}
            className="card">
            <motion.div
                className="card-image"
                style={{ backgroundImage: `url(${card.url})` }}
            ></motion.div>
            <div className="card-text">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: .15, bounce: .4, delay: .25 } }}
                    className="title">{card.title}</motion.p>
            </div>
        </motion.div>
    );
};

export default HorizonSlider;

const cards = [
    { url: "space.png", title: "Title 1", id: 1 },
    { url: "ui.png", title: "Title 2", id: 2 },
    { url: "space.png", title: "Title 3", id: 3 },
    { url: "space.png", title: "Title 4", id: 4 },
    { url: "ui.png", title: "Title 5", id: 5 },
    { url: "space.png", title: "Title 6", id: 6 },
    { url: "space.png", title: "Title 7", id: 7 },
    { url: "space.png", title: "Title 8", id: 8 },
    { url: "space.png", title: "Title 9", id: 9 },
    { url: "ui.png", title: "Title 10", id: 10 },
    { url: "space.png", title: "Title 11", id: 11 },
    { url: "space.png", title: "Title 12", id: 12 },
    { url: "ui.png", title: "Title 13", id: 13 },
    { url: "space.png", title: "Title 14", id: 14 },
    { url: "space.png", title: "Title 15", id: 15 },
    { url: "space.png", title: "Title 16", id: 16 },
    { url: "space.png", title: "Title 17", id: 17 },
    { url: "ui.png", title: "Title 18", id: 18 },
    { url: "space.png", title: "Title 19", id: 19 },
    { url: "space.png", title: "Title 20", id: 20 },
    { url: "ui.png", title: "Title 21", id: 21 },
    { url: "space.png", title: "Title 22", id: 22 },
    { url: "space.png", title: "Title 23", id: 23 },
    { url: "space.png", title: "Title 24", id: 24 },
    { url: "space.png", title: "Title 25", id: 25 },
    { url: "ui.png", title: "Title 26", id: 26 },
    { url: "space.png", title: "Title 27", id: 27 },
    { url: "space.png", title: "Title 28", id: 28 },
    { url: "ui.png", title: "Title 29", id: 29 },
    { url: "space.png", title: "Title 30", id: 30 },
];

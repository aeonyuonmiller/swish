import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
// import './HorizonSlider.module.css';

const HorizonSlider = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // 'element container' 
        // offset: ['start start', 'end end']
        offset: ['start 50vh', 'end -70vh']
    });

    const x = useTransform(scrollYProgress, [0, .2, .75, .95], ["2%", "2.5%", "-80%", "-90%"]);

    return (
        <section ref={targetRef} className="carousel-section">
            <div className="carousel-container">
                <motion.div style={{ x }} className="carousel">
                    {cards.map((card) => (
                        <Card card={card} key={card.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, y: "100%" }}
            whileInView={{ scale: 1, y: 0, transition: { duration: .3, bounce: .2 } }}
            // viewport={{ once: true, amount: 0.02, rootMargin: "-50px" }}
            viewport={{ once: false, rootMargin: "-50px" }}
            key={card.id}
            className="card">
            <motion.div
                className="card-image"
                style={{
                    backgroundImage: `url(${card.url})`,
                }}
            ></motion.div>
            <div className="card-text">
                <p className="title">{card.title}</p>
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
    { url: "ui.png", title: "Title 1", id: 5 },
    { url: "space.png", title: "Title 2", id: 6 },
    { url: "space.png", title: "Title 3", id: 7 },
    { url: "space.png", title: "Title 4", id: 8 },
];

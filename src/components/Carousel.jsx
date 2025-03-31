"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
    "../files/out-there.jpg",
    "../files/space.png",
    "../files/out-there.jpg",
    "../files/out-there.jpg",
    "../files/out-there.jpg",
];

const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

const Carousel = () => {
    const [index, setIndex] = useState(1); // Start at the first real slide
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const slides = [images[images.length - 1], ...images, images[0]];

    // Handle infinite looping
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => nextSlide(), AUTO_PLAY_INTERVAL);
        }
        return () => clearInterval(intervalRef.current);
    }, [index, isPaused]);

    // Fix transition by resetting position after exit
    const handleEnd = () => {
        if (index === 0) setIndex(images.length);
        if (index === images.length + 1) setIndex(1);
    };

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % (images.length + 2));
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + images.length + 2) % (images.length + 2));
    };

    const handleDragEnd = (event, { offset }) => {
        if (offset.x > 100) prevSlide();
        else if (offset.x < -100) nextSlide();
    };

    return (
        <div
            style={styles.container}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div style={styles.carousel}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        style={styles.slide}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
                        transition={{ duration: 0.5 }}
                        onAnimationComplete={handleEnd}
                        drag="x"
                        dragConstraints={{ left: -50, right: 50 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        <img src={slides[index]} alt={`Slide ${index}`} style={styles.image} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <button style={styles.nextbutton} onClick={nextSlide}>next ›</button>
            <button style={styles.prevbutton} onClick={prevSlide}>‹ Prev</button>

            {/* Indicators */}
            <div style={styles.indicators}>
                {images.map((_, i) => (
                    <motion.div
                        key={i}
                        style={{
                            ...styles.dot,
                            backgroundColor: index === i + 1 ? "#fff" : "#555",
                            width: index === i + 1 ? "30px" : "12px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#1a1a1a",
    },
    carousel: {
        position: "relative",
        width: "50%",
        height: "50%",
        overflow: "hidden",
        borderRadius: "15px",
    },
    slide: {
        position: "absolute",
        width: "90%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        // aspectRatio: "16/9",
        objectFit: "cover",
        borderRadius: "15px",
    },
    prevbutton: {
        position: "absolute",
        fontSize: "2rem",
        color: "#fff",
        left: "30px",
        background: "black",
        borderRadius: "150px",
        cursor: "pointer",
        margin: "30px",
    },
    nextbutton: {
        position: "absolute",
        fontSize: "2rem",
        color: "#fff",
        right: "30px",
        background: "black",
        borderRadius: "150px",
        cursor: "pointer",
        margin: "30px",
    },
    indicators: {
        position: "absolute",
        height: "40px",
        marginBottom: "30px",
        display: "flex",
        marginTop: "50%",
        gap: "16px",
        zIndex: "9999",
    },
    dot: {
        width: "12px",
        height: "12px",
        borderRadius: "50px",
        backgroundColor: "#555",
        transition: "background-color 0.3s",
    },
};

export default Carousel;

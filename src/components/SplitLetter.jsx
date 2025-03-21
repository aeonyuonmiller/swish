"use client"
import { motion } from 'motion/react';

export function SplitLetter({ children, ...rest }) {
    let letters = children.split('');
    return (
        <span style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
            {letters.map((letter, i) => (
                <span
                    key={children + i}
                    style={{ display: 'inline-block', overflow: 'visible' }}
                >
                    <motion.span
                        {...rest}
                        // initial={{ scale: 0.5, opacity: 0, y: "50%", rotate: "16deg", filter: "blur(16px)" }}
                        initial={{ y: "300%", scale: .5, opacity: 0, rotate: "10deg" }}
                        animate={{ y: "0%", scale: 1, opacity: 1, rotate: "0deg" }}
                        exit={{
                            y: "-10%",
                            scale: 0,
                            opacity: 0,
                            rotate: "-10deg",
                            transition: {
                                delay: i * 0.05,
                                type: "spring",
                                duration: .4,
                                bounce: 0.1 // (0 = no bounce, 1 = full bounce)
                            }
                        }}
                        transition={{
                            delay: i * 0.05,
                            type: "spring",
                            stiffness: 40, // controls speed (higher = faster)
                            damping: 5, // controls bounce resistance (higher = less bounce)
                            bounce: 0.5 // (0 = no bounce, 1 = full bounce)
                        }}
                        style={{ display: 'inline-block', willChange: 'transform' }}
                        custom={i}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

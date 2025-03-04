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
                        // initial={{ scale: 0.5, opacity: 0, y: "50%", rotate: "16deg", filter: "blur(16px)" }}
                        initial={{ scale: 0.5, opacity: 0, rotate: "16deg" }}
                        animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                        exit={{ scale: 0, opacity: 0, rotate: "-16deg" }}
                        transition={{
                            delay: i * 0.05,
                            type: "spring",
                            stiffness: 40, // controls speed (higher = faster)
                            damping: 10, // controls bounce resistance (higher = less bounce)
                            bounce: 0.5 // (0 = no bounce, 1 = full bounce)
                        }}                        {...rest}
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

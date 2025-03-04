// "use client"
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
                        initial={{ opacity: 0, y: "50%", rotate: "16deg" }}
                        animate={{ opacity: 1, y: 0, rotate: "0deg" }}
                        exit={{ opacity: 0, y: "-40%", rotate: "-16deg" }}
                        transition={{
                            delay: i * 0.05, // Each letter appears 0.1s after the previous one
                            type: "spring",
                            stiffness: 200, // Controls speed (higher = faster)
                            damping: 10, // Controls bounce resistance (higher = less bounce)
                            bounce: 0.2 // Bounce intensity (0 = no bounce, 1 = full bounce)
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
